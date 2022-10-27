import React from "react";
import "./index.css"
// import postsArray from "./posts.json"
import PostListItem from "./post-List-Item";
import {useSelector} from "react-redux";
import WhatsHappening from "./whats-happening";


const HomeComponent = () => {
    const postsArray = useSelector((st) => st.tuits);
    return(
        <>
            <WhatsHappening />
            <div id="postlist" className="list-group border">
                {
                    postsArray.map(post =>
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