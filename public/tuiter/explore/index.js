import NavigationSidebar from "../NavigationSidebar/index.js";
import ExploreComponent from "./ExploreComponent.js";
import WhoToFollowList from "../WhoToFollowList/index.js";

function exploreInit() {
    $("#wd-explore").append(`
  <div class="row mt-2">
    ${NavigationSidebar()}
   
    ${ExploreComponent()}
   
    ${WhoToFollowList()}
  </div>

   `);
}

$(exploreInit);
