import "./topbar.css"
import { Search, Person, Chat, Notifications } from '@mui/icons-material';
import { Link } from "react-router-dom";

export default function Topbar() {
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <span className="logo">SocialApp
                    </span>
                </Link>
            </div>
            <div className="topbarCenter">
                <div className="searchBar">
                    <Search className="searchIcon" />
                    <input type="text" placeholder="Search for friend, post or video"
                        className="searchInput" />
                </div>
            </div>
            <div className="topbarRight">
                <span className="topbarLink">Homepage</span>
                <span className="topbarLink">TimeLine</span>
                <div className="topbarLinks">

                    <div className="topbarIcons">
                        <div className="topbarIconItem">
                            <Person />
                            <span className="topbarIconBadge">1</span>
                        </div>
                        <div className="topbarIconItem">
                            <Chat />
                            <span className="topbarIconBadge">2</span>
                        </div>
                        <div className="topbarIconItem">
                            <Notifications />
                            <span className="topbarIconBadge">1</span>
                        </div>
                    </div>
                </div>
                <img src="/assets/person/1.jpeg" alt="" className="topbarProfilePicture" />
            </div>

        </div >
    )
}