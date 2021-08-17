import { Avatar } from '@material-ui/core'
import React from 'react';
import './Sidebar.css';

function Sidebar() {

    const recentItem = (topic) => (
        <div className="sidebar_recentItem">
            <span className="sidebar_hash">#</span>
            <p>{topic}</p>
        </div>
    );

    return (
        <div className="sidebar">
            <div className="sidebar_top">
                <img src="https://images.unsplash.com/photo-1550353127-b0da3aeaa0ca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80" alt="Free Texture Image on Unsplash" ></img>

                <Avatar className="sidebar_avatar" />
                <h2>User Name</h2> 
                <h4>UserName@gmail.com</h4>
            </div>

            <div className="sidebar_stats">
                <div className="sidebar_stat">
                    <p>Connections </p>
                    <p className="sidebar_statNumber">253</p>
                </div>
                <div className="sidebar_stat">
                    <p>Who viewed you</p>
                    <p className="sidebar_statNumber">103</p>
                </div>
            </div>

            <div className="sidebar_bottom">
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('techworld')}
                {recentItem('softwareengineering')}
                {recentItem('frontend ')}
            </div>
        </div>
    )
}

export default Sidebar;
