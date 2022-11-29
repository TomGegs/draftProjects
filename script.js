// function to transition nav bar from transparent to colored on scroll

function changeBg() {
    var navBarJs = document.getElementById('navBarJs')
    var scrollValue = window.scrollY;
    if(scrollValue < 100){
        navBarJs.classList.remove('navBarTransparentBackground')
}   else {
    navBarJs.classList.add('navBarTransparentBackground')
}
}

window.addEventListener('scroll', changeBg)

//