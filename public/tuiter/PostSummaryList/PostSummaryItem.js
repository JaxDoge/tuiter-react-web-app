// Create one post summary item

const PostSummaryItem = (post) => {
    return(`
    
                    <a class="list-group-item list-group-item-action" href="#">
                        <div class="row ">
                            <div class="my-1 col-9">
                                <div class="text-white-50">${post.topic}</div>
                                <div class="fw-bold">
                                    <span class="">${post.userName} <i class="fa-solid fa-circle-check"></i></span>
                                    <span class="text-white-50"> - ${post.time}</span>
                                </div>
                                <div class="fw-bold">
                                    post.title
                                </div>
                                <div class="text-white-50">post.tweetNum</div>
                            </div>
                            <div class="wd-img-component col-3 d-flex justify-content-end">
                                <div class="p-1">
                                    <img class="rounded-4" src=${post.image} width="100px" height="100px">
                                </div>
                            </div>
                        </div>
                    </a>
    
    
    `)
}

export default PostSummaryItem;