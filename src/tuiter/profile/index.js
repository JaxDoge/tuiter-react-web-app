import React from "react";
import "./index.css"
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const ProfileComponent = () => {
    const myProfile = useSelector((st) => st.myProfile);
    return(
        <div className={"border rounded"}>
            <div id={"head"} className={"d-flex py-2"}>
                <div className={"d-flex justify-content-center align-items-center ms-3 me-5"}>
                    <button type={"button"} className={"btn btn-link text-dark"}><i className="fa-solid fa-arrow-left"></i></button>
                </div>
                <div className={""}>
                    <div className={"fw-bold h5 mb-0"}>{myProfile.name}</div>
                    <div className={"text-secondary wd-content-subtitle"}>6,114 Tuitters</div>
                </div>
            </div>
            <div id={"bannerImg"} className={"position-relative"}>
                <img src={`/imgs/${myProfile.bannerPicture}`} className="w-100" alt={"profileBanner"}/>
                <img src={`/imgs/${myProfile.profilePicture}`} className={"rounded-circle wd-profile-avatar-position"} height={120} alt={"profileAvatar"} />
            </div>
            <div id={"editButton"} className={"d-flex flex-row-reverse mt-2 me-2"}>
                <Link to={"/tuiter/edit-profile"}>
                    <button className={"btn btn-outline-secondary rounded-pill fw-bold text-dark"}>Edit profile</button>
                </Link>
            </div>
            <div id={"detailInfo"} className={"container mt-4"}>
                <div className={"d-flex flex-column"}>
                    <span className={"fw-bold h5 mb-0"}>{myProfile.name}</span>
                    <span className={"text-secondary wd-content-subtitle"}>@{myProfile.handle}</span>
                </div>
                <div id={"introduction"} className={"mt-2"}>
                    {myProfile.bio}
                </div>
                <div className={"d-flex text-secondary wd-content-subtitle mt-2"}>
                    <div id={"positionDetail"} className={"me-3"}>
                        <i className="bi bi-geo-alt-fill me-2"></i>
                        {myProfile.location}
                    </div>
                    <div className={"me-3"}>
                        <i className="fa-solid fa-cake-candles me-2"></i>
                        Born {myProfile.dateOfBirth}
                    </div>
                    <div className={"me-3"}>
                        <i className="fa-solid fa-calendar-days me-2"></i>
                        Joined {myProfile.dateJoined}
                    </div>
                    <div className={"me-3"}>
                        <i className="fa-solid fa-link me-2"></i>
                        <a href={`https://${myProfile.website}`}>{myProfile.website}</a>
                    </div>

                </div>
                <div id={"socialStat"} className={"d-flex text-secondary wd-content-subtitle mt-2"}>
                    <div className={"me-4"}>
                        <span className={"fw-bold text-dark"}>{myProfile.followingCount}</span> Following
                    </div>
                    <div>
                        <span className={"fw-bold text-dark"}>{myProfile.followersCount}</span> Followers
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileComponent ;