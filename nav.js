var navbar = ` 
    <div class = logo>
        <img src="/htools.png">
    </div>
    <nav>
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
