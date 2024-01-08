import React, { useEffect, useState } from "react";
import "./home.scss";
import { AcUnit } from "@material-ui/icons";
import Navbar from "../../component/navbar/Navbar";
import Featured from "../../component/featured/Featured";
import List from "../../component/list/List";
import axios from "axios";

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        console.log("coming")
        const res = await axios.get(
          `lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre: ""}`, {
            headers:{
              token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1OGU1ZmU3NTkxNmMxMTkwN2RmZjY0MCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwNDAwNDE1MywiZXhwIjoxNzA0NDM2MTUzfQ.WjGyLgtoXpJSaU8uO2dVCg45VrDsSEa9FxvmIBds0AY"
            }
          }
        );
        console.log(res);
        // setLists(res.data)
      } catch (err) {
        console.error(err);
      }
    };
    getRandomLists();
  }, [type, genre]);
  return (
    <div className="home">
      <Navbar />
      <Featured type={type} />
      <List />
      <List />
      <List />
      <List />
      <List />
    </div>
  );
};

export default Home;
