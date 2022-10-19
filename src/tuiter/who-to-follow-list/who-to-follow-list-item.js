import React from "react";


const WhoToFollowListItem = (
    {
        who
    }
) => {
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-xxl-2 col-xl-2 col-lg-2">
                    <img className="rounded-circle" height="48px" src={`/imgs/${who.avatarIcon}`} alt={"recommend user"}/>
                </div>
                <div className="col-xxl-7 col-xl-6 col-lg-5 pt-1 ps-xxl-3 pe-xl-0 pe-lg-0 ps-xl-2 ps-lg-4">
                    <div className="fw-bold text-nowrap">
                        {who.userName}
                        <i className="fa-solid fa-circle-check"></i>
                    </div>
                    <div className="text-secondary wd-content-subtitle">
                        @{who.handle}
                    </div>
                </div>
                <div className="col-xxl-3 col-xl-4 col-lg-5 d-flex align-items-center">
                    <button className="btn btn-primary rounded-pill w-100">
                        Follow
                    </button>
                </div>
            </div>
        </li>
    );
};
export default WhoToFollowListItem;