import PostSummaryItem from "./PostSummaryItem.js";
import posts from "./post.js";

const PostSummaryList = () => {
    return (`
                    <div class="list-group rounded-1">
                        ${posts.map((post) => {
            return(PostSummaryItem(post))
        }).join("")
    }
                    </div>
    
    `)

}

const init = () => {
    $("#testID").append(PostSummaryList)
}
$(init);

export default PostSummaryList;