import NavigationSidebar from "../NavigationSidebar/index.js";
import PostList from "./PostList.js";
import PostSummaryList from "../PostSummaryList/index.js";

function homeInit() {
    $("#wd-home").append(`
  <div class="row mt-2">
    <div class="col-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
        ${NavigationSidebar("Home")}
    </div>
    
    <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-10 col-sm-10 col-10">
<!--    <h2 class="alert-primary">PostList</h2>-->
        ${PostList()}
    </div>
    
    <div class="col-xxl-4 col-xl-4 col-lg-4 d-none d-lg-block">
        ${PostSummaryList()}
    </div>
    
  </div>

   `);
}

$(homeInit);