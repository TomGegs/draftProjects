// function to transition nav bar from transparent to colored on scroll

function changeBg() {
    let navBarJs = document.getElementById('navBarJs')
    let scrollValue = window.scrollY;
    if(scrollValue < 100){
        navBarJs.classList.remove('navBarTransparentBackground')
}   else {
    navBarJs.classList.add('navBarTransparentBackground')
}
}

window.addEventListener('scroll', changeBg)

//function to reveal and hide about me text 

let shortAboutMeText = document.getElementById("shortAboutMeText");
let longAboutMeText = document.getElementById("longAboutMeText");
let aboutMeButton = document.getElementById("aboutMeToggle")
  

// function toggleShortLongAboutMeText() {
//     if (longAboutMeText.style.display === 'none' && shortAboutMeText.style.display === 'block') 
//     {
//         longAboutMeText.style.display = "block" && shortAboutMeText.style.display === 'none'
//     } else {
//         longAboutMeText.style.display = "none" && longAboutMeText.style.display === 'block'
//     }


// }

aboutMeToggle.addEventListener('click', () => {
    if (longAboutMeText.style.display === 'none' && shortAboutMeText.style.display === 'block') {    
        longAboutMeText.style.display = "block" && shortAboutMeText.style.display === 'none'
    } else {
        longAboutMeText.style.display = "none" && longAboutMeText.style.display === 'block'
    }
}
)