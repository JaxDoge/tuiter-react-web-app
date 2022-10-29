import React, {useState} from "react";
import "./index.css"
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {updateProfile} from "../reducers/profile-reducer";


const EditProfile = () => {
    const initProfile = useSelector((st) => st.myProfile);
    let [userName, setUserName] = useState(initProfile.name);
    let [bio, setBio] = useState(initProfile.bio);
    let [location, setLocation] = useState(initProfile.location);
    let [website, setWebsite] = useState(initProfile.website);
    let [birthday, setbirthday] = useState(initProfile.dateOfBirth)
    let [bdayEditor, setBdayEditor] = useState(true)
    let newProfile = {
        name: userName,
        bio: bio,
        location: location,
        website: website,
        dateOfBirth: birthday,
    }
    const dispatch = useDispatch();
    const saveSubmitHandler = () => {
        dispatch(updateProfile(newProfile));
    }

    return(
        <div className={"border rounded"}>
            <div id={"head"} className={"d-flex my-2"}>
                <div className={"d-flex justify-content-center align-items-center ms-3 me-5"}>
                    <Link to={"/tuiter/profile"} className={"text-dark"}><i className="fa-solid fa-xmark"></i></Link>
                </div>
                <div className={"pt-1"}>
                    <div className={"fw-bold h5 mb-0"}>Edit profile</div>
                </div>
                <div className={"ms-auto me-2"}>
                    <Link to={"/tuiter/profile"}>
                        <button className={"btn  btn-dark rounded-pill fw-bold  py-1"} type={"submit"} onClick={saveSubmitHandler}>Save</button>
                    </Link>
                </div>
            </div>
            <div id={"bannerImg"} className={"position-relative"}>
                <img src={"/imgs/webDevelopBanner.jfif"} className="w-100" alt={"profileBanner"}/>
                <img src={"/imgs/nerdAvatar.jpg"} className={"rounded-circle wd-profile-avatar-position"} height={120} alt={"profileAvatar"} />
            </div>
            <div id={"edit_form"} className={"container mt-5 pt-2"}>
                <form>
                    <div className="form-group position-relative mb-4">
                        <small className={"text-secondary wd-label-position"}>
                            <label htmlFor="userName">Name</label>
                        </small>
                        <input className="form-control pt-4" id="userName" value={userName} onChange={(event)=>setUserName(event.target.value)}/>
                    </div>
                    <div className="form-group position-relative mb-4">
                        <small className={"text-secondary wd-label-position"}>
                            <label htmlFor="bio">Bio</label>
                        </small>
                        <textarea className="form-control pt-4" id="bio" value={bio} onChange={(event) =>setBio(event.target.value)} />
                    </div>
                    <div className="form-group position-relative mb-4">
                        <small className={"text-secondary wd-label-position"}>
                            <label htmlFor="location">Location</label>
                        </small>
                        <input className="form-control pt-4" id="location" value={location} onChange={(event)=>setLocation(event.target.value)} />
                    </div>
                    <div className="form-group position-relative mb-4">
                        <small className={"text-secondary wd-label-position"}>
                            <label htmlFor="website">Website</label>
                        </small>
                        <input className="form-control pt-4" id="website" value={website} onChange={(event)=>setWebsite(event.target.value)} />
                    </div>
                    <div className="form-group position-relative mb-4 d-flex flex-column">
                        <small className={"text-secondary"}>
                            Birth date · <button type={"button"} className={"btn btn-link text-primary pt-0 ps-0"} onClick={() => setBdayEditor(!bdayEditor)}>Edit</button>
                        </small>
                        {bdayEditor
                            ? <span>{birthday} </span>
                            :<input value={birthday} type="date" className="form-control w-25" onChange={(event)=>setbirthday(event.target.value)} />
                        }


                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditProfile ;