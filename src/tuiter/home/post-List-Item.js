import React from "react";


const PostListItem = ({post}) => {
    // const post = JSON.parse(post_p);
    return(
        <div className="list-group-item pt-3 border border-top-0 border-start-0 border-end-0">

            <div className="row">
                <div id="avatar-colum" className="col-1">
                    <img src={`/imgs/${post.avatarImage}`} className="rounded-circle" width="48px"  alt={"avatar"}/>
                </div>
                <div id="twiter-content-column" className="col-11">
                    <div id="content-head-info" className="row">
                        <div id="user-time" className="col-10">
                            <span className="fw-bold">{post.userName} <i
                                className="fa-solid fa-circle-check"></i></span>
                            <span className="">@{post.userHandle} · {post.tweetTime}</span>
                        </div>
                        <div id="three-dots" className="col-2 d-flex justify-content-end">
                            <div className="text-white-50"><i className="fa-solid fa-ellipsis"></i></div>
                        </div>
                    </div>
                    <div id="tweet-content" className="">
                        <div className="">
                            <div dangerouslySetInnerHTML={{ __html: post.tweetText}} />
                        </div>
                        <div id="hyperlink-card" className="border rounded-3 mt-2">
                            <div className="border border-start-0 border-end-0 border-top-0">
                                <img src={`/imgs/${post.hyperLinkImage}`} className="w-100 rounded-top"  alt={"hyperlink card"}/>
                            </div>
                            <div id="hyperlink-preview" className="container pt-2">
                                <div className="">
                                    {post.hyperLinkTitle}
                                </div>
                                <div id="hyperlink-specification" className="">
                                    {post.hyperLinkSpec}
                                    {post.hyperLinkUrl}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="functional-panel" className="row mt-3">
                        <div id="button-column" className="col-3 d-flex  align-content-center">
                            <a href="/#"><i className="fa-regular fa-message me-2"></i></a>{post.replyNum}
                        </div>
                        <div id="button-column" className="col-3 d-flex justify-content-center align-content-center">
                            <a href="/#"><i className="fa-sharp fa-solid fa-retweet me-2"></i></a>{post.retweetNum}
                        </div>
                        <div id="button-column" className="col-3 d-flex justify-content-center align-content-center">
                            <a href="/#" style={{"color": "red"}}><i className="fa-solid fa-heart me-2"></i></a>{post.likeNum}
                        </div>
                        <div id="button-column" className="col-3 d-flex justify-content-center align-content-center">
                            <a href="/#"><i className="fa-solid fa-arrow-up-from-bracket"></i></a>
                        </div>
                    </div>


                </div>
            </div>

        </div>
    );
}

export default PostListItem;