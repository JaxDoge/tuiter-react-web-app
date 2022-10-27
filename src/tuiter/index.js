import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import ExploreComponent from "./explore";
import HomeComponent from "./home/post-list";

import {Routes, Route} from "react-router-dom";

import { configureStore } from '@reduxjs/toolkit';
import {Provider} from "react-redux";

import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./tuits/tuits-reducer";

const store = configureStore(
    {reducer: {
        who: whoReducer,
        tuits: tuitsReducer
    }});

function Tuiter() {
    return(
        <Provider store={store}>
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
        </Provider>
    );
}
export default Tuiter