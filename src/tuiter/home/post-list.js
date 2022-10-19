import React from "react";
import "./index.css"
import postsArray from "./posts.json"
import PostSummaryItem from "./post-List-Item";


const HomeComponent = () => {
    return(
        <div id="postlist" className="list-group">
            {
            postsArray.map(post =>
                <PostSummaryItem
                    key={post._id}
                    post={post}/> )
        }
        </div>
    );

}

export default HomeComponent;