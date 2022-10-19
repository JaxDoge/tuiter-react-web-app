import PostSummaryList from "../PostSummaryList/index.js";


const ExploreComponent = () => {
    return (`
                    <!--Main content column-->
        <div class=""
             id="main timeline">
            <div id="content-container" class="">
                <div id="navibar" class="wd-content-container-padding">
                    <div id="uppernavibar" class="row position-relative">
                        <div class="col-11">
                            <input type="search"
                                class="form-control rounded-pill ps-5"
                                placeholder="Search Tuiter"/>
                            <span class="wd-search-icon-position">
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </span>
                        </div>
                        <div class="col-1 d-flex align-items-center justify-content-center ps-0">
                            <a class="" href="#">
                                <i class="fa-solid fa-gear wd-gear-icon"></i>
                            </a>
                        </div>

                    </div>

                    <div id="lowernavi">

                        <nav class="nav nav-tabs pt-2">
                                <a class="nav-link active" href="for-you.html">
                                    For you
                                </a>
                                <a class="nav-link" href="trending.html">
                                    Trending
                                </a>
                                <a class="nav-link" href="news.html">
                                    News
                                </a>
                                <a class="nav-link" href="sports.html">
                                    Sports
                                </a>
                                <a class="nav-link d-none d-md-block" href="entertainment.html">
                                    Entertainment
                                </a>
                        </nav>

                    </div>
                </div>
                <div class="position-relative">
                    <img class="w-100 pt-2"
                         src="../../imgs/Starship-Mk1-Day.webp">
                    <h3 class="position-absolute bottom-0 px-2">
                        SpaceX's Spaceship
                    </h3>
                </div>

                ${PostSummaryList()}


            </div>
        </div>
            `);
}

export default ExploreComponent;