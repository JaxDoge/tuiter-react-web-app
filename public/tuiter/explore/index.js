import NavigationSidebar from "../NavigationSidebar/index.js";
import ExploreComponent from "./ExploreComponent.js";
import WhoToFollowList from "../WhoToFollowList/index.js";

function exploreInit() {
    $("#wd-explore").append(`
  <div class="row mt-2">
    <div class="col-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
        ${NavigationSidebar("Explore")}
    </div>
    
    <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-10 col-sm-10 col-10">
        ${ExploreComponent()}
    </div>
    
    <div class="col-xxl-4 col-xl-4 col-lg-4 d-none d-lg-block">
        ${WhoToFollowList()}
    </div>
    
  </div>

   `);
}

$(exploreInit);
