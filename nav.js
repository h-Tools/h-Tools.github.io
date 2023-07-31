var navbar = ` 
    <div class = logo>
        <img src="/htools.png">
    </div>
    <nav>
        <div class = "navbox">
            <a href = "/nav.html">
                <img src="/nav.png" class = "icon">
            </a>
        </div>
        <ul class = "nav_links">
            <div class = "navbox">
                <a href ="/wallpaper.html">H Wallpaper Generator</a>
            </div>
            <div class = "navbox">
                <a href ="/index.html">Home</a>
            </div>
            <div class = "navbox">
                <a href ="/about.html">About</a>
            </div>
        </ul>
    </nav>`;
document.getElementById("header").innerHTML = navbar;
const active = 0;
for (var i = 0; i < document.links.length; i++) {
    if (document.links[i].href === document.URL) {
        current = i;
    }
}
document.links[current].className = 'active';

$(".navbox").click(function() {
    window.location = $(this).find("a").attr("href"); 
    return false;
  });