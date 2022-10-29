import React from "react";
import {useDispatch} from "react-redux";
import {likeTuitterToggle} from "./tuits-reducer";

const TuitStats = ({post}) => {
    const dispatch = useDispatch();
    const likedToggleSwitcher = (tuit) => {
        dispatch(likeTuitterToggle(tuit))
    }
    return(
        <div id="functional-panel" className="row mt-3">
            <div id="button-column" className="col-3 d-flex  align-content-center">
                <button type={"button"} className={"btn btn-link pt-0 ps-0 text-secondary"}><i className="fa-regular fa-message"></i></button>{post.replies}
            </div>
            <div id="button-column" className="col-3 d-flex justify-content-center align-content-center">
                <button type={"button"} className={"btn btn-link pt-0 ps-0 text-secondary"}><i className="fa-sharp fa-solid fa-retweet me-2"></i></button>{post.retuits}
            </div>
            <div id="button-column" className="col-3 d-flex justify-content-center align-content-center">
                <button type={"button"} className={"btn btn-link pt-0 ps-0 text-secondary"} onClick={() => likedToggleSwitcher(post)}>{
                    post.liked
                        ? <i className="fa-solid fa-heart text-danger me-2"></i>
                        : <i className="fa-regular fa-heart me-2"></i>
                }
                </button>{post.likes}
            </div>
            <div id="button-column" className="col-3 d-flex justify-content-center align-content-center">
                <button type={"button"} className={"btn btn-link pt-0 ps-0 text-secondary"}><i className="fa-solid fa-arrow-up-from-bracket"></i></button>
            </div>
        </div>

    );
}

export default TuitStats;