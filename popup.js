// pop up
const openBtn = document.getElementById('open-btn');
const closeBtn = document.getElementById('close-btn');
const popup = document.getElementById('popup');
const mainPopup = document.getElementById('main-popup');

openBtn.addEventListener('click', () => {
    popup.style.display = 'flex';
    mainPopup.style.animation = 'slide-in .5s ease';
    mainPopup.style.animationFillMode = 'forwards';
});

closeBtn.addEventListener('click', () => {
    mainPopup.style.animation = 'slide-out .5s ease';
    mainPopup.style.animationFillMode = 'forwards';
    setTimeout(() => {
    popup.style.display = 'none';
    }, 500);
});

window.addEventListener('click', (e) => {
    if (e.target == document.querySelector('.popup-overlay')) {
        mainPopup.style.animation = 'slide-out .5s ease';
        mainPopup.style.animationFillMode = 'forwards';
            setTimeout(() => {
            popup.style.display = 'none';
            }, 500);
    }
});