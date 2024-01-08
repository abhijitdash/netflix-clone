import React from 'react'
import "./feature.scss"
import { InfoOutlined, PlayArrow } from '@material-ui/icons'

export default function Featured({ type}) {
  return (
    <div className='featured'>
      {type && (
        <div className="category">
          <span>{type === "movies" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option > Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
        <img width= "100%" src="https://prod-images.tcm.com/Master-Profile-Images/theshawshankredemption1994.20338.2.jpg?w=1216" alt="" />
        <div className='info'>
          <img src='https://img.resized.co/theslicedpan/eyJkYXRhIjoie1widXJsXCI6XCJodHRwczpcXFwvXFxcL21lZGlhLmJhbGxzLmllXFxcL3VwbG9hZHNcXFwvMjAxNVxcXC8wOFxcXC8wMjExNTcyMVxcXC9zaGF3c2hhbmstcmVkZW1wdGlvbi0xMDI0eDU2NS5qcGdcIixcIndpZHRoXCI6NjQwLFwiaGVpZ2h0XCI6MzYwLFwiZGVmYXVsdFwiOlwiaHR0cHM6XFxcL1xcXC93d3cudGhlc2xpY2VkcGFuLmNvbVxcXC9hc3NldHNcXFwvaVxcXC9uby1pbWFnZS5wbmc_dj0xXCJ9IiwiaGFzaCI6ImM1NjZmYTA5YTZlY2VkZDEwYTc1YTU2ZWNmZGE0OTEzZjA0OTg0NWEifQ==/quiz-how-much-do-you-remember-about-the-classic-shawshank-redemption.jpg' alt=''/>
        <span className='desc'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
         Alias magni quidem optio rerum, odio nesciunt ducimus, 
         similique ab nobis incidunt beatae? Eius, 
         voluptates reprehenderit perferendis doloribus ducimus pariatur voluptatibus a.
         </span>
         <div className='buttons'>
          <button className='play'> 
          <PlayArrow />
          <span>Play</span>
          </button>
          <button className='more'>
            <InfoOutlined />
            <span>Info</span>
          </button>
         </div>
        </div>
        </div>
  )
}
