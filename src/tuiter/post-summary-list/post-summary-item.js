import React from "react";

const PostSummaryItem = (
    {
        post = {
            "_id":123,
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "image": "Tesla_logo.png"
        }
    }
) => {
    return(
        <a className="list-group-item list-group-item-action" key={post._id} href="/#">
            <div className="row ">
                <div className="my-1 col-9">
                    <div className="">{post.topic}</div>
                    <div className="">
                        <span className="fw-bold">{post.userName} <i className="fa-solid fa-circle-check"></i></span>
                        <span className=""> - {post.time}</span>
                    </div>
                    <div className="">
                        {post.title}
                    </div>
                    <div className="">{post.tweetNum}</div>
                </div>
                <div className="col-3 d-flex justify-content-center align-content-center">
                    <img className="rounded-3" src={`/imgs/${post.image}`} width="82px" height="82px" alt={"post summary image"}/>
                </div>
            </div>
        </a>
    );
}

export default PostSummaryItem;