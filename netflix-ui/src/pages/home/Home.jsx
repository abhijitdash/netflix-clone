import React from 'react'
import "./home.scss";
import { AcUnit } from "@material-ui/icons"
import Navbar from '../../component/navbar/Navbar';
import Featured from '../../component/featured/Featured';
import List from '../../component/list/List';

const home = () => {
  return (
    <div className='home'>
        <Navbar />
        <Featured />
        <List />
        <List />
        <List />
        <List />
        <List />
    </div>
  )
}

export default home
