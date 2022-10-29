import React from "react";
import {Link, useLocation} from "react-router-dom";


const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];
    return (
        <div className="list-group">
            <div className="list-group-item">Tuiter</div>
            <Link to="/tuiter/home" className={`list-group-item ${active === 'home' || paths.length === 2?'active':''}`}>
                Home
            </Link>
            <Link to="/tuiter/explore" className={`list-group-item ${active === 'explore'?'active':''}`}>
                Explore
            </Link>
            <Link to="/" className="list-group-item">
                Labs
            </Link>
            <div className={`list-group-item
                    ${active === 'notifications'?'active':''}`}>
                Notifications
            </div>
            <div className={`list-group-item
                    ${active === 'messages'?'active':''}`}>
                Messages
            </div>
            <div className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}>
                Bookmarks
            </div>
            <div className={`list-group-item
                    ${active === 'lists'?'active':''}`}>
                Lists
            </div>
            <Link to="/tuiter/profile" className={`list-group-item ${active === 'profile'?'active':''}`}>
                Profile
            </Link>
            <div className={`list-group-item
                    ${active === 'more'?'active':''}`}>
                More
            </div>
        </div>
    );
};
export default NavigationSidebar;