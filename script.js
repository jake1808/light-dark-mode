const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

function toggleLightDarkMode(properties) {
    nav.style.backgroundColor = properties.navBackgroundColor
    textBox.style.backgroundColor = properties.textBoxBackgroundColor

    toggleIcon.children[0].textContent = properties.toggleIconText;
    toggleIcon.children[1].classList.remove(properties.toggleIconRemove);
    toggleIcon.children[1].classList.add(properties.toggleIconAdd);

    image1.src = properties.image1
    image2.src = properties.image2
    image3.src = properties.image3

}


function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark')
        const darkProperties = {
            navBackgroundColor: 'rgb(0 0 0 / 50%)',
            textBoxBackgroundColor: 'rgb(255 255 255 / 50%)',
            toggleIconText: 'Dark Mode',
            toggleIconRemove: 'fa-sun',
            toggleIconAdd: 'fa-moon',
            image1: 'img/undraw_proud_coder_dark.svg',
            image2: 'img/undraw_feeling_proud_dark.svg',
            image3: 'img/undraw_conceptual_idea_dark.svg'
        }
        toggleLightDarkMode(darkProperties);
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light')
        const lightProperties = {
            navBackgroundColor: 'rgb(255 255 255 / 50%)',
            textBoxBackgroundColor: 'rgb(0 0 0 / 50%)',
            toggleIconText: 'Light Mode',
            toggleIconRemove: 'fa-moon',
            toggleIconAdd: 'fa-sun',
            image1: 'img/undraw_proud_coder_light.svg',
            image2: 'img/undraw_feeling_proud_light.svg',
            image3: 'img/undraw_conceptual_idea_light.svg'
        }
        toggleLightDarkMode(lightProperties);
    }
}

toggleSwitch.addEventListener('change', switchTheme);

const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true
        const darkProperties = {
            navBackgroundColor: 'rgb(0 0 0 / 50%)',
            textBoxBackgroundColor: 'rgb(255 255 255 / 50%)',
            toggleIconText: 'Dark Mode',
            toggleIconRemove: 'fa-sun',
            toggleIconAdd: 'fa-moon',
            image1: 'img/undraw_proud_coder_dark.svg',
            image2: 'img/undraw_feeling_proud_dark.svg',
            image3: 'img/undraw_conceptual_idea_dark.svg'
        }
        toggleLightDarkMode(darkProperties);
    } else {
        toggleSwitch.checked = false;
        const lightProperties = {
            navBackgroundColor: 'rgb(255 255 255 / 50%)',
            textBoxBackgroundColor: 'rgb(0 0 0 / 50%)',
            toggleIconText: 'Light Mode',
            toggleIconRemove: 'fa-moon',
            toggleIconAdd: 'fa-sun',
            image1: 'img/undraw_proud_coder_light.svg',
            image2: 'img/undraw_feeling_proud_light.svg',
            image3: 'img/undraw_conceptual_idea_light.svg'
        }
        toggleLightDarkMode(lightProperties);
    }
}