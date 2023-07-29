const active = 0;
for (var i = 0; i < document.links.length; i++) {
    if ((document.links[i].href === document.URL) || (document.URL === "https://h-Tools.github.io" && document.links[i].href === "/index.html")) {
        current = i;
    }
}
document.links[current].className = 'active';