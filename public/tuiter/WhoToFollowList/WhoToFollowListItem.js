import who from "./UserDataList.js";

const WhoToFollowListItem = (who) => {
    return (`
               <div class="list-group-item">
                    <div class="row">
                        <div class="col-xxl-2 col-xl-2 col-lg-2">
                            <img class="rounded-circle" height="48px" src=${who.avatarIcon}>
                        </div>
                        <div class="col-xxl-7 col-xl-6 col-lg-5 pt-1 ps-xxl-3 pe-xl-0 pe-lg-0 ps-xl-2 ps-lg-4">
                            <div class="fw-bold text-nowrap">
                                ${who.userName}
                                <i class="fa-solid fa-circle-check"></i>
                            </div>
                            <div class="text-secondary wd-content-subtitle">
                                @${who.handle}
                            </div>
                        </div>
                        <div class="col-xxl-3 col-xl-4 col-lg-5 d-flex align-items-center">
                            <a href="#"
                               class="btn btn-primary rounded-pill w-100">
                                Follow
                            </a>
                        </div>
                    </div>
                </div>
    
    
    `)
}


function init() {
    $(".list-group").append(`${WhoToFollowListItem(who[0])}`)
}
$(init);

export default WhoToFollowListItem;