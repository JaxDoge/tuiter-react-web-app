import React from "react";
import TuitStats from "../tuits/TuitStats";
import {useDispatch} from "react-redux";
import {deleteTuitThunk} from "../../services/tuits-thunks";


const PostListItem = ({post}) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }


    return(
        <div className="list-group-item pt-3 border border-top-0 border-start-0 border-end-0">

            <div className="row">
                <div id="avatar-colum" className="col-1">
                    <img src={`/imgs/${post.image}`} className="rounded-circle" width="48px"  alt={"avatar"}/>
                </div>
                <div id="twiter-content-column" className="col-11 ps-4">
                    <i className="bi bi-x-lg float-end"
                       onClick={() => deleteTuitHandler(post._id)}></i>
                    <div id="content-head-info" className="row">
                        <div id="user-time" className="col-10 ps-0">
                            <span className="fw-bold">{post.userName} <i
                                className="fa-solid fa-circle-check"></i></span>
                            <span className="ms-1">@{post.handle} · {post.time}</span>
                        </div>
                        <div id="three-dots" className="col-2 d-flex justify-content-end">
                            <div className="text-white-50"><i className="fa-solid fa-ellipsis"></i></div>
                        </div>
                    </div>
                    <div id="tweet-content" className="">
                        <div className="">
                            <div dangerouslySetInnerHTML={{ __html: post.tuit}} />
                        </div>
                        {/*<div id="hyperlink-card" className="border rounded-3 mt-2">*/}
                        {/*    <div className="border border-start-0 border-end-0 border-top-0">*/}
                        {/*        <img src={`/imgs/${post.hyperLinkImage}`} className="w-100 rounded-top"  alt={"hyperlink card"}/>*/}
                        {/*    </div>*/}
                        {/*    <div id="hyperlink-preview" className="container pt-2">*/}
                        {/*        <div className="">*/}
                        {/*            {post.hyperLinkTitle}*/}
                        {/*        </div>*/}
                        {/*        <div id="hyperlink-specification" className="">*/}
                        {/*            {post.hyperLinkSpec}*/}
                        {/*            {post.hyperLinkUrl}*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>

                    <TuitStats post={post}/>


                </div>
            </div>

        </div>
    );
}

export default PostListItem;