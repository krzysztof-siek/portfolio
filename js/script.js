
import {
    showBackToUpButton,
    toggleNavLinks,
    closeNavLinks
} from "./others.js"

import {
    resetText,
    setRandomText,
    animate
} from './buttonAnim.js';



window.addEventListener('load', (event) => {


    var swiper = new Swiper('.swiper-container', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        pagination: {
            el: '.swiper-pagination',
        },
    });
    //   End of swipper


    //  LOADER 
    const loader = document.querySelector(".loader-bg");
    loader.classList.add("hide")


    // ScrollSpy
    var spy = new Gumshoe('#nav-links a');


    //  toggle nav-links when press nav-button
    const navBtn = document.querySelector('.nav-button');
    navBtn.addEventListener('click', toggleNavLinks)


    // click navLink close NavLinks and navBtn only on mobile
    const navLink = document.querySelectorAll('.nav-link')
    navLink.forEach(el => el.addEventListener('click', closeNavLinks))

    // show back to up button
    window.addEventListener('scroll', showBackToUpButton)

    // modal when click download cv buttom
    const downloadBtn = document.querySelector('.download');
    const closeModalBtn = document.querySelector('.close-btn')
    const modalBg = document.querySelector('.modal-bg');
    const body = document.querySelector('body')




    closeModalBtn.addEventListener('click', () => {
        modalBg.classList.add('hide')
        body.classList.remove('blocked')
    })

    downloadBtn.addEventListener('click', () => {
        modalBg.classList.remove('hide')
        body.classList.add('blocked')
    })


    // skills change content when mouse on
    const skillsIcons = document.querySelectorAll('.skills-single-icon')

    skillsIcons.forEach(el => el.addEventListener('mouseover', function () {
        let data = this.getAttribute('data-icon')
        const technology = document.querySelector('.technology')
        const description = document.querySelector(".description")
        const content = document.querySelector('.content')
        const procent = document.querySelector(".procent")
        if (data == "html") {
            technology.textContent = "HTML"
            description.textContent = "I use tags in accordance with W3C semantics and standards. "
            content.style = "width: 80%"
            procent.textContent = "80%"

        } else if (data == "css") {
            technology.textContent = "CSS"
            description.textContent = "I use Scss to make the writing code easier to read."
            content.style = "width: 80%"
            procent.textContent = "80%"

        } else if (data == "js") {
            technology.textContent = "JavaScript"
            description.textContent = "I use JavaScript version ES6 to ensure proper functionality and transparency of the code"
            content.style = "width: 70%"
            procent.textContent = "70%"

        } else if (data == "angular") {
            technology.textContent = "Angular"
            description.textContent = "I use the Angular framework to make writing code faster and more efficient"
            content.style = "width: 60%"
            procent.textContent = "60%"

        } else if (data == "bootstrap") {
            technology.textContent = "Bootstrap"
            description.textContent = "I can also use this Css framework"
            content.style = "width: 80%"
            procent.textContent = "80%"

        } else if (data == "sass") {
            technology.textContent = "Sass"
            description.textContent = "Much cooler code writing using the sass processor"
            content.style = "width: 70%"
            procent.textContent = "70%"

        } else if (data == "git") {
            technology.textContent = "Git i  Github"
            description.textContent = "A version control system is necessary when working in a larger team. I also keep my projects on Github myself"
            content.style = "width: 70%"
            procent.textContent = "70%"

        } else if (data == "rwd") {
            technology.textContent = "Responsive Web Design"
            description.textContent = "Nowadays, you need pages to match the device on which they are displayed."
            content.style = "width: 80%"
            procent.textContent = "80%"
        }
    }))

    // button animation 

    const $Element = document.getElementById('animBtn');
    const $Element2 = document.getElementById('animBtn2');


    $Element.addEventListener('mouseenter', animate);
    $Element.addEventListener('mouseout', resetText);
    $Element2.addEventListener('mouseenter', animate);
    $Element2.addEventListener('mouseout', resetText);


    resetText();

    window.onload = function() {
      var recaptcha = document.forms["contact-form"]["g-recaptcha-response"];
      recaptcha.required = true;
      recaptcha.oninvalid = function(e) {
        // do something
        alert("Please check the box, \"I'm not a robot\" in the reCaptcha below.");
      }
    }

});