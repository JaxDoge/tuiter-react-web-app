import PostListItem from "./PostListItem.js";
import posts from "./post.js"


const PostList = () => {
    return(`
        <div id="postlist" class="list-group">
            ${
        posts.map(
            (post) => {
                return(PostListItem(post))
            }
        ).join("")
    }
        </div>
    `)
}

export default PostList;