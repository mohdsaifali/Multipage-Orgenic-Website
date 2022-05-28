// Header Scroll
let nav = document.querySelector('.navbar')
window.onscroll = function(){
    if(document.documentElement.scrollTop > 50){
        nav.classList.add("header-scrolled")
    }else{
        nav.classList.remove("header-scrolled")
    }
}
//Nav hide 
let navbar = document.querySelectorAll('.nav-link')
let navcollapse = document.querySelector('.navbar-collapse.collapse')
navbar.forEach(function(e){
    e.addEventListener("click",function(){
        navcollapse.classList.remove("Show")
    })
})