function setLinksTargetAttribute () {
    const links = document.getElementsByTagName("a")
    for (const l of links) {
        if (l.getAttribute("href").startsWith(".") || l.getAttribute("href").startsWith("#")) {
            // internal link, use 'target="_self"'
            l.setAttribute("target", "_self")
        } else {
            // external link, use 'target="_blank"'
            l.setAttribute("target", "_blank")
        }
    }
}

document.addEventListener("DOMContentLoaded", setLinksTargetAttribute)
