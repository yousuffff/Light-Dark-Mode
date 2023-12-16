const toggleSwitch = document.querySelector('input[type="checkbox"]');
const toggleIcon = document.querySelector('#toggle-icon');
const navBar = document.querySelector('#nav');
const textBox = document.querySelector('.text-box');
const image1 = document.querySelector('#image1');
const image2 = document.querySelector('#image2');
const image3 = document.querySelector('#image3');
const body = document.querySelector('body');

function setImage(color){
  image1.src =`img/undraw_proud_coder_${color}.svg`;
  image2.src =`img/undraw_feeling_proud_${color}.svg`;
  image3.src =`img/undraw_conceptual_idea_${color}.svg`;
}

function darkMode(){
  navBar.style.backgroundColor = 'rgb(0 0 0/ 50%'
  textBox.style.backgroundColor = 'rgb(255 255 255 / 50%';
  toggleIcon.children[0].textContent = 'Dark Mode';
  toggleIcon.children[1].classList.replace('fa-sun','fa-moon');
  body.style.backgroundImage = "url('low-poly-grid-haikei.svg')";
  setImage('dark');
}
function lightMode(){
  navBar.style.backgroundColor = 'rgb(255 255 255 / 50%';
  textBox.style.backgroundColor = 'rgb(0 0 0/ 50%';
  toggleIcon.children[0].textContent = 'Light Mode';
  toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
  body.style.backgroundImage = "url('low-poly-grid-haikei\ \(1\).svg')";
  setImage('light')
}

function switchTheme(event){
  // console.log(event.target.checked);
  if(event.target.checked){
    document.documentElement.setAttribute('data-theme','dark');
    localStorage.setItem('theme','dark')
    darkMode();
  }else{
    document.documentElement.setAttribute('data-theme','light')
    localStorage.setItem('theme','light')
    lightMode();
  }
}
console.log(toggleIcon.children);
toggleSwitch.addEventListener('change', switchTheme);
// textBox.style.backgroundColor = 'rgb(255 255 255/ 50%';

//get value from local storage

let currentTheme = localStorage.getItem('theme');
if(currentTheme){
  document.documentElement.setAttribute('data-theme',currentTheme);
  if(currentTheme === 'dark'){
    toggleSwitch.checked= true;
    darkMode();
  }
}