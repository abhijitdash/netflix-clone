import React, { useState } from 'react'
import "./navbar.scss"
import { ArrowDropDown, Notifications, Search } from '@material-ui/icons'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)

    window.onscroll = () =>{
        setIsScrolled(window.pageYOffset === 0 ? false: true)
        return () => (window.onscroll =null)
    }
    console.log(isScrolled)
    return (
        <div className={isScrolled ? "navbar scrolled": "navbar"}>
            <div className="container">
                <div className='left'>
                    <img src="https://images.ctfassets.net/y2ske730sjqp/5QQ9SVIdc1tmkqrtFnG9U1/de758bba0f65dcc1c6bc1f31f161003d/BrandAssets_Logos_02-NSymbol.jpg?w=940" alt="" />
                    <span>Homepage</span>
                    <span>Series</span>
                    <span>Movies</span>
                    <span>New and Popular</span>
                    <span>My List</span>
                
                </div>

                <div className='right'>
                    <Search className="icon"/>
                    <span>KID</span>
                    <Notifications className="icon"/>
                    <img src='https://images.pexels.com/photos/3560168/pexels-photo-3560168.jpeg?auto=compress&cs=tinysrgb&w=600' alt=""/>
                    <div className="profile">
                    <ArrowDropDown className="icon"/>
                    <div className='options'>
                        <span> Settings</span>
                        <span> Logout</span>

                    </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Navbar