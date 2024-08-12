let nav = document.getElementById("nav")
let closeNav = document.getElementById("close")
let bar = document.getElementById("bar")

bar.addEventListener("click",()=>{
    nav.style.display = "flex"
})

closeNav.addEventListener("click",()=>{
    nav.style.display = "none"
})