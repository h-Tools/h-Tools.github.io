var navbar = ` 
    <div class = logo>
        <img src="/htools.png">
    </div>
    <nav>
        <div class = "navbox nav2">
            <a href = "/nav">
                <img src="/nav.png" class = "icon">
            </a>
        </div>
        <ul class = "nav_links">
            <div class = "navbox">
                <a href ="/wallpaper">H Wallpaper Generator</a>
            </div>
            <div class = "navbox">
                <a href ="/about">About</a>
            </div>
        </ul>
    </nav>`;
document.getElementById("header").innerHTML = navbar;
const active = 0;
var icon = document.getElementsByClassName("icon")[0];
for (var i = 0; i < document.links.length; i++) {
    if (document.links[i].href === document.URL) {
        current = i;
    }
}
if (document.links[current].class === "navbox nav2") {
    icon.src = "/navactive.png";
    document.links[current].href = "javascript:history.back()"
}
document.links[current].className = 'active';

$(".navbox").click(function() {
    window.location = $(this).find("a").attr("href"); 
    return false;
  });
