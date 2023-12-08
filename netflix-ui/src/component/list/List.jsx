import React, { useRef, useState } from 'react'
import "./list.scss"
import { ArrowBackIos, ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons'
import ListItem from '../listitem/ListItem'

export default function List() {
    const [slideNumber, setslideNumber] = useState(0)
    const listRef = useRef()

    const handleClick = (direction) => {
        let distance = listRef.current.getBoundingClientRect().x-50
        if (direction === "left" && slideNumber > 0){
            setslideNumber(slideNumber-1)
            listRef.current.style.transform = `translateX(${230 + distance}px)`
        }

        if (direction === "right" && slideNumber< 5){
            setslideNumber(slideNumber +1)
            listRef.current.style.transform = `translateX(${-230 + distance}px)`
        }
    }
  return (
    <div className='list'>
        <span className="listTitle">Continue to watch</span>
        <div className="wrapper">
        <ArrowBackIosOutlined className='sliderArrow left' onClick={() =>handleClick("left")} />
        <div className="container" ref={listRef}>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>

        </div>
        <ArrowForwardIosOutlined className='sliderArrow right' onClick={() =>handleClick("right")}/>

        </div>
        </div>
  )
}
