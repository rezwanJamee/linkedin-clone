import React from 'react';
import './Header.css';
import HeaderOption from './HeaderOption';

import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import TextsmsIcon from '@material-ui/icons/Textsms';
import NotificationsIcon from '@material-ui/icons/Notifications';
import profileavater from './assets/avater.png'; 

//import AppsIcon from '@material-ui/icons/Apps';
//import ComputerIcon from '@material-ui/icons/Computer';

function Header() {
    return (
        <div className="header" >

            <div className="header_left">
                <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt="" />
            
                <div className="header_search">
                    <SearchIcon />
                    <input type="text" placeholder="Search" />
                </div>
            </div>
            <div className="header_right">

                <HeaderOption Icon={HomeIcon} title="Home" />
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
                <HeaderOption Icon={TextsmsIcon} title="Messaging" />
                <HeaderOption Icon={NotificationsIcon} title="Notifications" />

                <HeaderOption avatar={profileavater} title="Me" />
            </div>
        </div>
    )
}

export default Header
