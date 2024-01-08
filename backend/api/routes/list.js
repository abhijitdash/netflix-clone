const router = require("express").Router();
const List = require("../models/List");
const Movie = require("../models/Movie");
const verify = require("../verifyToken");

//Create movie/series list
router.post("/", verify, async (req, res) => {
    if (req.user.isAdmin) {
        const newList = new List(req.body);

        try {
            const savedList = await newList.save();
            res.status(201).json(savedList);
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("You are not allowed");
    }
});

//Update
router.put("/:id", verify, async (req, res) => {
    if (req.user.isAdmin) {
        try {
            const updatedMovie = await Movie.findByIdAndUpdate(
                req.params.id,
                {
                    $set: req.body,
                },
                { new: true }
            );

            res.status(200).json(updatedMovie);
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("You are not allowed");
    }
});

//delete
router.delete("/:id", verify, async (req, res) => {
    if (req.user.isAdmin) {
        try {
            await List.findByIdAndDelete(req.params.id);

            res.status(200).json("The List has been deleted...");
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("You are not allowed");
    }
});

//GET
router.get("/", verify, async (req, res) => {
    console.log("coming here....1")
        const typeQuery = req.query.type;
        const genreQuery = req.query.genre;
        let list = [];
    try {
        if(typeQuery){
            //means we are in some movie/series page
            if(genreQuery){
                //some genre is chosen
                list = await List.aggregate([
                    {$sample: {size: 10 }},
                    { $match: { type: typeQuery, genre: genreQuery }}
                ])
            }else{
                list = await List.aggregate([
                    {$sample: {size: 10 }},
                    { $match: { type: typeQuery }}
                ])
            }
        }else{
            //in home page and can fetch random lists
            list = await List.aggregate([{ $sample: { size: 10 }}])
        }
        res.status(200).json(list);
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET random movies
router.get("/random", verify, async (req, res) => {
    console.log("coming........");
    const type = req.query.type;
    let movie;
    try {
        if (type === "series") {
            movie = await Movie.aggregate([
                { $match: { isSeries: true } },
                { $sample: { size: 1 } },
            ]);
        } else {
            movie = await Movie.aggregate([
                { $match: { isSeries: false } },
                { $sample: { size: 1 } },
            ]);
        }
        res.status(200).json(movie);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

module.exports = router;
