const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");

//register the user
router.post("/register", async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString(),
    });
    try {
        const user = await newUser.save();
        res.status(201).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
});


//Log-In
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email })
        
        if (!user)
            return res.status(401).json("Wrong Password or username")

        //validating the password
        const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY)
        const orig_password = bytes.toString(CryptoJS.enc.Utf8)

        if(orig_password !== req.body.password)
        return res.status(401).json("Wrong Password")

        const { password, ...info } =user._doc
        
        return res.status(200).json(user)

    } catch (err) {
        return res.status(500).json(err)
    }
})

module.exports = router;
