const toggleSwitch = document.querySelector('input[type="checkbox"]')
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

//Change Image Mode
function imageMode(color){
    image1.src = `img/undraw_proud_coder_${color}.svg`;
    image2.src = `img/undraw_feeling_proud_${color}.svg`;
    image3.src = `img/undraw_conceptual_idea_${color}.svg`;
}

//Dark Mode
function darkMode(){
    nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    toggleIcon.children[0].textContent = 'Dark Mode';
    toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
    imageMode('dark');
    //toggleIcon.children[1].classList.remove('fa-sun');
    //toggleIcon.children[1].classList.add('fa-moon');
    // image1.src = 'img/undraw_proud_coder_dark.svg';
    // image2.src = 'img/undraw_feeling_proud_dark.svg';
    // image3.src = 'img/undraw_conceptual_idea_dark.svg';
}

function lightMode(){
    nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    toggleIcon.children[0].textContent = 'Light Mode';
    toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    imageMode('light');
    //toggleIcon.children[1].classList.remove('fa-moon');
    //toggleIcon.children[1].classList.add('fa-sun');
    // image1.src = 'img/undraw_proud_coder_light.svg';
    // image2.src = 'img/undraw_feeling_proud_light.svg';
    // image3.src = 'img/undraw_conceptual_idea_light.svg';
}

//Theme Switcher
function switchTheme(){
    if (event.target.checked){
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme','dark');
        darkMode();
    }else{
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme','light');
        lightMode();
    }
}

//Event Listener
toggleSwitch.addEventListener('change', switchTheme);

//Check local storage for the Theme
const currentTheme = localStorage.getItem('theme');
console.log(currentTheme);