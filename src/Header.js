import React, { useState } from 'react'
import "./Header.css"
import VideoCallSharpIcon from '@material-ui/icons/VideoCallSharp';
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from "@material-ui/icons/Search"
import AppsIcon from "@material-ui/icons/Apps"
import NotificationIcon from "@material-ui/icons/Notifications"
import Avatar from "@material-ui/core/Avatar"
import {Link} from "react-router-dom";


function Header() {

    const [inputSearch, setInputSearch] = useState('');

    return (
        <div className="header">

            <div className="header__left">
                <MenuIcon />
                <Link to="/">
                <img className="header__logo" src="https://th.bing.com/th/id/Rd1e624e141de2a5d061dff878254eb89?rik=lEa0j9bMT6ktbQ&riu=http%3a%2f%2fimg.talkandroid.com%2fuploads%2f2013%2f09%2fYouTube-Transparent-Logo.png&ehk=jAiFFaDo3uZvYTuhPTS4WW4J55B5AGIRb6785bT4XLk%3d&risl=&pid=ImgRaw" />            
                </Link>
            </div>

            <div className="header__input">
                <input onChange={e => setInputSearch(e.target.value)} value={inputSearch} placeholder="Search" type="text" />
                <Link to={`/search/${inputSearch}`}>
                <SearchIcon className="header__inputButton" />
                </Link>
            </div>

            <div className="header__icons">
                <VideoCallSharpIcon className="header__icon"/>
                <AppsIcon className="header__icon"/>
                <NotificationIcon className="header__icon"/>
                <Avatar />
            </div>
            

        </div>
    )
}

export default Header
