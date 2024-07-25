'use strict'




function toggleSidebar() {
    let sidebar = document.getElementById("sidebar")
    let content = document.querySelector(".content")
    if (sidebar.style.width === "250px") {
        sidebar.style.width = "0"
        content.style.marginLeft = "0"
    } else {
        sidebar.style.width = "250px"
        content.style.marginLeft = "250px"
    }
}




document.addEventListener("DOMContentLoaded", function() {
    let sidebar = document.getElementById("sidebar")
    sidebar.style.width = "0"
    document.querySelector(".content").style.marginLeft = "0"
})