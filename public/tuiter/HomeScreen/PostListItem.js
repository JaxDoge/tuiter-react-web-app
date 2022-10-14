const PostListItem = (post) => {
    return (`
    <div class="list-group-item pt-3 border border-top-0 border-start-0 border-end-0">
    
      <div class="row">
        <div id="avatar-colum" class="col-1">
          <img src=${post.avatarImage} class="rounded-circle" width="48px">
        </div>
        <div id="twiter-content-column" class="col-11">
          <div id="content-head-info" class="row">
            <div id="user-time" class="col-10">
              <span class="fw-bold">${post.userName} <i class="fa-solid fa-circle-check"></i></span>
               <span class="text-white-50">@${post.userHandle} &#x00B7 ${post.tweetTime}</span>
            </div>
            <div id="three-dots" class="col-2 d-flex justify-content-end">
              <div class="text-white-50"><i class="fa-solid fa-ellipsis"></i></div>
            </div>
          </div>
          <div id="tweet-content" class="">
            <div class="">
              ${post.tweetText}
            </div>
            <div id="hyperlink-card" class="border rounded-3 mt-2">
              <div class="border border-start-0 border-end-0 border-top-0">
                <img src=${post.hyperLinkImage} class="w-100 rounded-top">
              </div>
              <div id="hyperlink-preview" class="container pt-2">
                <div class="">
                  ${post.hyperLinkTitle}
                </div>
                <div id="hyperlink-specification" class="text-white-50">
                  ${post.hyperLinkSpec}
                  ${post.hyperLinkUrl}
                </div>
              </div>
            </div>
          </div>
      
      <div id="functional-panel" class="row text-white-50 mt-3">
          <div id="button-column" class="col-3 d-flex  align-content-center">
            <a href="#"><i class="fa-regular fa-message me-2"></i></a>${post.replyNum}
          </div> 
          <div id="button-column" class="col-3 d-flex justify-content-center align-content-center">
            <a href="#"><i class="fa-sharp fa-solid fa-retweet me-2"></i></a>${post.retweetNum}
          </div> 
          <div id="button-column" class="col-3 d-flex justify-content-center align-content-center">
            <a href="#" style = "color: red"><i class="fa-solid fa-heart me-2"></i></a>${post.likeNum}
          </div>           
          <div id="button-column" class="col-3 d-flex justify-content-center align-content-center">
            <a href="#"><i class="fa-regular fa-share-from-square me-2"></i></a>
          </div>    
      </div>
   

        </div>
      </div>
   
<!--          <div class="wd-functional-panel">-->
<!--            <div class="wd-button-column">-->
<!--              <div class="wd-button-icon">-->
<!--                <a href="#"><i class="fa-regular fa-message"></i></a>-->
<!--              </div>-->
<!--              <div class="wd-button-number wd-content-subtitle">-->
<!--                9999-->
<!--              </div>-->
<!--            </div>-->
<!--            <div class="wd-button-column">-->
<!--              <div class="wd-button-icon">-->
<!--                <a href="#"><i class="fa-sharp fa-solid fa-retweet"></i></a>-->
<!--              </div>-->
<!--              <div class="wd-button-number wd-content-subtitle">-->
<!--                9999-->
<!--              </div>-->
<!--            </div>-->
<!--            <div class="wd-button-column">-->
<!--              <div class="wd-button-icon">-->
<!--                <a href="#" style = "color: red"><i class="fa-solid fa-heart"></i></a>-->
<!--              </div>-->
<!--              <div class="wd-button-number wd-content-subtitle">-->
<!--                9999-->
<!--              </div>-->
<!--            </div>-->
<!--            <div class="wd-button-column">-->
<!--              <div class="wd-button-icon">-->
<!--                <a href="#"><i class="fa-regular fa-share-from-square"></i></a>-->
<!--              </div>-->
<!--            </div>-->

<!--          </div>-->
    </div>

    
    
    `)
}



export default PostListItem;