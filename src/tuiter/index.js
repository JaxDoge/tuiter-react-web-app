import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import ExploreComponent from "./explore";
import HomeComponent from "./home/post-list";

import {Routes, Route} from "react-router-dom";


function Tuiter() {
    return(
        <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                <NavigationSidebar />
            </div>

            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-10 col-sm-10 col-10">
                <Routes>
                    <Route index element={<HomeComponent />} />
                    <Route path="home"    element={<HomeComponent/>}/>
                    <Route path="explore" element={<ExploreComponent/>}/>
                    <Route path="*" element={<HomeComponent />} />
                </Routes>
            </div>

            <div className="col-xxl-4 col-xl-4 col-lg-4 d-none d-lg-block">
                <WhoToFollowList />
            </div>

        </div>

    );
}
export default Tuiter