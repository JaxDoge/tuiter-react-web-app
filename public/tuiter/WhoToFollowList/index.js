import UserDataList from "./UserDataList.js";
import WhoToFollowListItem from "./WhoToFollowListItem.js";

const WhoToFollowList = () => {
    return (`
   <div id="recommend_user" class="col-xxl-4 col-xl-4 col-lg-4 d-none d-lg-block">
    <div class="list-group">
        <div class="list-group-item">
            <span class="fw-bold">Who to follow</span>
        </div>
        
        ${
        
        UserDataList.map(userData => {
            return(WhoToFollowListItem(userData))
        }).join("")
    }
        
    </div>
</div> 
    
    `)
}


const init = () => {
    $("#testID").append(WhoToFollowList)
}

$(init);

export default WhoToFollowList;