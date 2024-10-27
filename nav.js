var navbar = ` 
    <div class = logo>
        <img src="/htools.png">
    </div>
    <nav id = "navbar">
        <div class = "navbox nav2">
            <a href = "https://h-tools.github.io/nav">
                <img src="/nav.png" class = "icon">
            </a>
        </div>
        <ul class = "nav_links">
            <div class = "navbox">
                <a href ="https://h-tools.github.io/wallpaper">H Wallpaper Generator</a>
            </div>
            <div class = "navbox">
                <a href ="https://h-tools.github.io/">About</a>
            </div>
        </ul>
    </nav>`;
document.getElementById("header").innerHTML = navbar;
const active = 0;
let current = 0;
var icon = document.getElementsByClassName("icon")[0];
var navbar = document.getElementsById("navbar");
var iconbox = document.getElementsByClassName("nav2")[0];
for (var i = 0; i < document.links.length; i++) {
    if (document.links[i].href === document.URL) {
        current = i;
        if (document.links[i].href === "https://h-tools.github.io/nav") {
            icon.src = "/navactive.png";
            document.links[current].href = "javascript:history.back()"
        }
    }
}
if (document.URL === "https://h-tools.github.io/") {
    iconbox.remove()
    navbar.className = 'navindex';
}
if ((document.URL !== "https://h-tools.github.io/nav") || (document.URL !== "https://h-tools.github.io")) {
        document.links[current].className = 'active';
}

$(".navbox").click(function() {
    window.location = $(this).find("a").attr("href"); 
    return false;
  });
