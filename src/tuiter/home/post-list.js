import React, {useEffect} from "react";
import "./index.css"
// import postsArray from "./posts.json"
import PostListItem from "./post-List-Item";
import {useDispatch, useSelector} from "react-redux";
import WhatsHappening from "./whats-happening";
import {findTuitsThunk} from "../../services/tuits-thunks";


const HomeComponent = () => {
    const {tuits, loading} = useSelector(state => state.tuitsData);
    const dispatch = useDispatch();
    useEffect(() => {dispatch(findTuitsThunk())}, [dispatch])

    return(
        <>
            <WhatsHappening />
            <div id="postlist" className="list-group border">
                {
                    loading &&
                    <li className="list-group-item">
                        Loading...
                    </li>
                }

                {
                    tuits.map(post =>
                        <PostListItem
                            key={post._id}
                            post={post}/>
                    )
                }
            </div>
        </>

    );

}

export default HomeComponent;