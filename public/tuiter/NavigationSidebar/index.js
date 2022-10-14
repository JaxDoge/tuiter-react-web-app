const NavigationSidebar = (curScreen) => {
    return(`
        <!--Left Navigation Bar-->
        <div id="wd-navsidebar" class="">
            <div class="list-group">
                <div href="#" class="list-group-item">
                    <i class="fa-solid fa-t"></i>
                </div>
                <a href="../HomeScreen/index.html" class="list-group-item list-group-item-action ${curScreen === 'Home' ? 'active' : ''}">
                    <i class="fa-solid fa-house"></i><span class="d-none d-xl-inline ms-2">Home</span>
                </a>
                <a href="../explore/index.html" class="list-group-item list-group-item-action ${curScreen === 'Explore' ? 'active' : ''}">
                    <i class="fa-solid fa-hashtag"></i><span class="d-none d-xl-inline ms-2">Explore</span>
                </a>
                <a href="#" class="list-group-item list-group-item-action ${curScreen === 'Notification' ? 'active' : ''}">
                    <i class="fa-solid fa-bell"></i><span class="d-none d-xl-inline ms-2">Notification</span>
                </a>
                <a href="#" class="list-group-item list-group-item-action ${curScreen === 'Messages' ? 'active' : ''}">
                    <i class="fa-solid fa-envelope"></i><span class="d-none d-xl-inline ms-2">Messages</span>
                </a>
                <a href="#" class="list-group-item list-group-item-action ${curScreen === 'Bookmarks' ? 'active' : ''}">
                    <i class="fa-solid fa-bookmark"></i><span class="d-none d-xl-inline ms-2">Bookmarks</span>
                </a>
                <a href="#" class="list-group-item list-group-item-action ${curScreen === 'Lists' ? 'active' : ''}">
                    <i class="fa-solid fa-list-ul"></i><span class="d-none d-xl-inline ms-2">Lists</span>
                </a>
                <a href="#" class="list-group-item list-group-item-action ${curScreen === 'Profile' ? 'active' : ''}">
                    <i class="fa-solid fa-user"></i><span class="d-none d-xl-inline ms-2">Profile</span>
                </a>
                <a href="#" class="list-group-item list-group-item-action ${curScreen === 'More' ? 'active' : ''}">
                    <i class="fa-solid fa-dice-three"></i><span class="d-none d-xl-inline ms-2">More</span>
                </a>
            </div>
            <div id="post-tuiter">
                <div id="post-button" class="d-grid pt-2 pb-2">
                    <button class="btn btn-primary rounded-pill" type="button">Tuit</button>
                </div>

            </div>
        </div>

 `);
}

// It is the analogy of psvm in java
const init = () => {
    $("#navsidbar").append(NavigationSidebar())
}
$(init)

// $(NavigationSidebar);
export default NavigationSidebar;