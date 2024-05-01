// univerisal selectors
const themeDefault = document.querySelectorAll('.theme-default');
const themeOpposite = document.querySelectorAll('.theme-default-opposite');
const popupOpenBtn = document.querySelector('.open-btn');

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

  themeDefault.forEach(el => el.style.backgroundColor = '#F2EDD7');
  themeDefault.forEach(el => el.style.color = '#755139');
  themeOpposite.forEach(el => el.style.backgroundColor = '#755139');
  themeOpposite.forEach(el => el.style.color = '#F2EDD7');
})

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

  themeDefault.forEach(el => el.style.backgroundColor = '#fff');
  themeDefault.forEach(el => el.style.color = '#000');
  themeOpposite.forEach(el => el.style.backgroundColor = '#000');
  themeOpposite.forEach(el => el.style.color = '#fff');
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

  themeDefault.forEach(el => el.style.backgroundColor = '#F0EDCC');
  themeDefault.forEach(el => el.style.color = '#024d4a');
  themeOpposite.forEach(el => el.style.backgroundColor = '#024d4a');
  themeOpposite.forEach(el => el.style.color = '#F0EDCC');
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
  
    themeDefault.forEach(el => el.style.backgroundColor = '#DCE2F0');
    themeDefault.forEach(el => el.style.color = '#50586C');
    themeOpposite.forEach(el => el.style.backgroundColor = '#50586C');
    themeOpposite.forEach(el => el.style.color = '#DCE2F0');
  })

// dark mode selectors
/*
const darkModeButton = document.querySelector('.dark-mode');
const darkModeToggle = document.querySelector('.dark-mode-icon');
// toggle dark mode
darkModeButton.addEventListener('click', () => {
  if (darkModeToggle.classList.contains("fa-toggle-off")) {
    darkModeToggle.classList.remove("fa-toggle-off");
    darkModeToggle.classList.add("fa-toggle-on");

    if (coffeeIcon.classList.contains("fa-toggle-on")) {
      html.style.backgroundColor = '#755139';
      html.style.color = '#F2EDD7';
      signature.src = './images/signature_coffee_light.png';
    } else if (blackWhiteIcon.classList.contains("fa-toggle-on")) {
      html.style.backgroundColor = '#000';
      html.style.color = '#fff';
      signature.src = './images/signature_bnw_light.png';
    } else if (greenIcon.classList.contains("fa-toggle-on")) {
      html.style.backgroundColor = '#024d4a';
      html.style.color = '#F0EDCC';
      signature.src = './images/signature_green_light.png';
    }
  } 
  else if (darkModeToggle.classList.contains("fa-toggle-on")) {
    darkModeToggle.classList.remove("fa-toggle-on");
    darkModeToggle.classList.add("fa-toggle-off");

    if (coffeeIcon.classList.contains("fa-toggle-on")) {
      html.style.backgroundColor = '#F2EDD7';
      html.style.color = '#755139';
      signature.src = './images/signature_coffee_dark.png';
    } else if (blackWhiteIcon.classList.contains("fa-toggle-on")) {
      html.style.backgroundColor = '#fff';
      html.style.color = '#000';
      signature.src = './images/signature_bnw_dark.png';
    } else if (greenIcon.classList.contains("fa-toggle-on")) {
      html.style.backgroundColor = '#F0EDCC';
      html.style.color = '#024d4a';
      signature.src = './images/signature_green_dark.png';
    }
  }
})
*/