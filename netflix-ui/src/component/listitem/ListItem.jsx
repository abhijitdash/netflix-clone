import React, { useState } from 'react'
import "./listItem.scss"
import { Add, PlayArrow, ThumbDownOutlined, ThumbUpOutlined } from '@material-ui/icons'

export default function ListItem({ index }) {
    const [isHovered, setIsHovered] = useState(false)
    const trailer = "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761"

    return (
        <div className='listItem'
            style={{ left: isHovered && index * 225 - 50 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            <img
                src='https://i.ytimg.com/vi/Io9W8HJgDtg/maxresdefault.jpg'
                alt=''
            />
            {/* console.log(isHovered) */}
            {isHovered && (
                <>
                    <video src={trailer} autoPlay={true} loop />
                    <div className="itemInfo">
                        <div className="icons">
                            <PlayArrow className='icon' />
                            <Add className='icon' />
                            <ThumbUpOutlined className='icon' />
                            <ThumbDownOutlined className='icon' />
                        </div>
                        <div className="iteminfoTop">
                            <span>1 hr 14 mins</span>
                            <span className='limit'>+16</span>
                            <span>2023</span>
                        </div>
                        <div className="genre"> Action</div>
                        <div className="desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Pariatur sapiente excepturi non.
                        </div>
                        
                    </div>
                </>
            )}
        </div>
    )
}
