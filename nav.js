const active = 0;
for (var i = 0; i < document.links.length; i++) {
    if ((document.links[i].href === document.URL) || (document.URL === "https://h-tools.github.io" && document.links[i].href === "/index.html") || (concat(document.links[i].href, ".html") === document.URL)) {
        current = i;
    }
}
document.links[current].className = 'active';
