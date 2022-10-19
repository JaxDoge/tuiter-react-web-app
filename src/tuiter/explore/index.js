import React from "react";
import PostSummaryList from "../post-summary-list";
import "./index.css";
const ExploreComponent = () => {
    return (
        <div className=""
             id="main timeline">
            <div id="content-container" className="">
                <div id="navibar" className="">
                    <div id="uppernavibar" className="row position-relative">
                        <div className="col-11">
                            <input type="search"
                                   className="form-control rounded-pill ps-5"
                                   placeholder="Search Tuiter"/>
                            <span className="wd-search-icon-position">
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </span>
                        </div>
                        <div className="col-1 d-flex align-items-center justify-content-center ps-0">
                            <a className="" href="/#">
                                <i className="fa-solid fa-gear wd-gear-icon"></i>
                            </a>
                        </div>

                    </div>

                    <div id="lowernavi">

                        <nav className="nav nav-tabs pt-2">
                            <a className="nav-link active" href="/#">
                                For you
                            </a>
                            <a className="nav-link" href="/#">
                                Trending
                            </a>
                            <a className="nav-link" href="/#">
                                News
                            </a>
                            <a className="nav-link" href="/#">
                                Sports
                            </a>
                            <a className="nav-link d-none d-md-block" href="/#">
                                Entertainment
                            </a>
                        </nav>

                    </div>
                </div>
                <div className="position-relative">
                    <img className="w-100 pt-2"
                         src="/imgs/Starship-Mk1-Day.webp" alt={"banner"}/>
                        <h3 className="position-absolute bottom-0 px-2 text-white">
                            SpaceX's Spaceship
                        </h3>
                </div>

                <PostSummaryList />


            </div>
        </div>

    );
}


export default ExploreComponent;