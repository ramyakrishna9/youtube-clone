import React, { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom'

import './Header.css';

function Header() {
  const [InputSearch, SetInputSearch] = useState('');
  return (
    <div className="header">
        
        <div className="header__left">
            <MenuIcon />
            <Link to='/'>
              <img className="header__logo" 
              src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" 
              alt="" />
           </Link>  
        </div>
        <div className="header__center">
            <input  onChange={e => SetInputSearch(e.target.value)}
             value={InputSearch} 
             placeholder="Search"
             type="text"
            />
            <Link to={`/search/${InputSearch}`} >
              <SearchIcon  className="header__inputButton" />
            </Link>
        </div>
        <div className="header__right">
            <VideoCallIcon  className="header__icon"/>
            <AppsIcon  className="header__icon" />
            <NotificationsIcon  className="header__icon" />
            <Avatar alt="samantha"
            src ="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS6ABN4GOXnsJ78ytLytYBFlgDcccXYVnKwvw&usqp=CAU"
            />
        </div>

      
    </div>
  );
}

export default Header;