// univerisal selectors
const themeDefault = document.querySelectorAll('.theme-default');
const themeOpposite = document.querySelectorAll('.theme-default-opposite');
const popupMain = document.querySelector('.main-popup')

let colorLight;
let colorDark;

// change color theme
function colorChange(color1, color2) {
    colorLight = color1;
    colorDark = color2;

    themeDefault.forEach(el => el.style.backgroundColor = colorLight);
    themeDefault.forEach(el => el.style.color = colorDark);
    themeOpposite.forEach(el => el.style.backgroundColor = colorDark);
    themeOpposite.forEach(el => el.style.color = colorLight); 
    popupMain.style.backgroundColor = colorDark;
    popupMain.style.color = colorLight;

    saveTheme(color1, color2);
}

// save chosen theme to localstorage
function saveTheme(color1, color2) {
    localStorage.setItem('theme1', color1);
    localStorage.setItem('theme2', color2);
 }

 // check if theme is saved to localstorage on page load
const savedThemeBgColor = localStorage.getItem('theme1');
const savedThemeColor = localStorage.getItem('theme2');
 if (savedThemeBgColor, savedThemeColor) {
    themeDefault.forEach(el => el.style.backgroundColor = savedThemeBgColor);
    themeDefault.forEach(el => el.style.color = savedThemeColor);
    themeOpposite.forEach(el => el.style.backgroundColor = savedThemeColor);
    themeOpposite.forEach(el => el.style.color = savedThemeBgColor);
    popupMain.style.backgroundColor = savedThemeColor;
    popupMain.style.color = savedThemeBgColor;
 }

 // toggle selectors:

// coffee selectors
const coffeeButton = document.querySelector('.coffee');
const coffeeIcon = document.querySelector('.coffee-icon');
// toggle coffee 
coffeeButton.addEventListener('click', () => {
  coffeeIcon.classList.remove("fa-toggle-off");
  coffeeIcon.classList.add("fa-toggle-on");

  blackWhiteIcon.classList.remove("fa-toggle-on");
  blackWhiteIcon.classList.add("fa-toggle-off");

  greenIcon.classList.remove("fa-toggle-on");
  greenIcon.classList.add("fa-toggle-off");

  blueIcon.classList.remove("fa-toggle-on");
  blueIcon.classList.add("fa-toggle-off");

  /*darkModeToggle.classList.remove("fa-toggle-on");
    darkModeToggle.classList.add("fa-toggle-off");*/
});

// black & white selectors
const blackWhiteButton = document.querySelector('.bw');
const blackWhiteIcon = document.querySelector('.bw-icon');
// toggle black & white
blackWhiteButton.addEventListener('click', () => {
  blackWhiteIcon.classList.add("fa-toggle-on");
  blackWhiteIcon.classList.remove("fa-toggle-off");

  coffeeIcon.classList.remove("fa-toggle-on");
  coffeeIcon.classList.add("fa-toggle-off");

  greenIcon.classList.remove("fa-toggle-on");
  greenIcon.classList.add("fa-toggle-off");

  blueIcon.classList.remove("fa-toggle-on");
  blueIcon.classList.add("fa-toggle-off");

  /*darkModeToggle.classList.remove("fa-toggle-on");
    darkModeToggle.classList.add("fa-toggle-off");*/
})

// natural green selectors
const greenButton = document.querySelector('.green');
const greenIcon = document.querySelector('.green-icon');
// toggle natural green
greenButton.addEventListener('click', () => {
  greenIcon.classList.add("fa-toggle-on");
  greenIcon.classList.remove("fa-toggle-off");

  blackWhiteIcon.classList.remove("fa-toggle-on");
  blackWhiteIcon.classList.add("fa-toggle-off");

  coffeeIcon.classList.remove("fa-toggle-on");
  coffeeIcon.classList.add("fa-toggle-off");

  blueIcon.classList.remove("fa-toggle-on");
  blueIcon.classList.add("fa-toggle-off");

  /*darkModeToggle.classList.remove("fa-toggle-on");
    darkModeToggle.classList.add("fa-toggle-off");*/
})

// cool blue selectors
const blueButton = document.querySelector('.blue');
const blueIcon = document.querySelector('.blue-icon');
// cool blue toggle
blueButton.addEventListener('click', () => {
    blueIcon.classList.add("fa-toggle-on");
    blueIcon.classList.remove("fa-toggle-off");
  
    blackWhiteIcon.classList.remove("fa-toggle-on");
    blackWhiteIcon.classList.add("fa-toggle-off");
  
    coffeeIcon.classList.remove("fa-toggle-on");
    coffeeIcon.classList.add("fa-toggle-off");

    greenIcon.classList.remove("fa-toggle-on");
    greenIcon.classList.add("fa-toggle-off");

    /*darkModeToggle.classList.remove("fa-toggle-on");
    darkModeToggle.classList.add("fa-toggle-off");*/
})