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

  var loadPath;
  if (window.location.hostname.includes('github.io')) {
    loadPath = '/portfolio/assets/{{lng}}.json';
  } else {
    loadPath = '../assets/{{lng}}.json';
  }

    i18next
        .use(i18nextHttpBackend)
        .init({
            lng: 'pl',
            backend: {
                loadPath: loadPath
            }
        }, function(err, t) {
            updateElements();
        });

    function updateElements() {
      function setPlaceholder(id, translationKey) {
        const element = document.getElementById(id);
        if (element) {
            element.setAttribute('placeholder', i18next.t(translationKey));
        }
      }
        
      function setTranslation(id, translationKey) {
        const rowElement = document.getElementById(id).querySelector('.row-title');
        if (rowElement) {
          var translation = i18next.t(translationKey);
          rowElement.style.setProperty('--text-after', "'" + translation + "'");
        }
      }

      setPlaceholder('message', 'contact.message');
      setPlaceholder('name', 'contact.name');
      
      setTranslation('about', 'about.title');
      setTranslation('skills', 'skills.title');
      setTranslation('projects', 'projects.title');
      setTranslation('features', 'features.title'); 
      setTranslation('contact', 'contact.title');
    }


    document.querySelectorAll('.lang-change').forEach(function(btn) {
        btn.addEventListener('click', function() {
          document.querySelectorAll('.lang-change').forEach(function(el) {
            el.classList.remove('active');
        });
        this.classList.add('active');

            changeLanguage(this.getAttribute('data-lang'));
        });
    });

    function changeLanguage(lng) {
        i18next.changeLanguage(lng);
        setTimeout(() => {
            updateElements();
        }, 100);
    }

    i18next.on('languageChanged', () => {
        updateContent();
    });

    function updateContent() {
        document.querySelectorAll('[data-i18n]').forEach((element) => {
            const key = element.getAttribute('data-i18n');
            element.innerHTML = i18next.t(key);
        });
    }

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

    // button animation 
    const $Element = document.getElementById('animBtn');
    const $Element2 = document.getElementById('animBtn2');


    $Element.addEventListener('mouseenter', animate);
    $Element.addEventListener('mouseout', resetText);
    $Element2.addEventListener('mouseenter', animate);
    $Element2.addEventListener('mouseout', resetText);


    resetText();
});


window.onload = function() {
  var recaptcha = document.forms["contact-form"]["g-recaptcha-response"];
  recaptcha.oninvalid = function(e) {
    const error = document.querySelector('.recaptcha'); 
    error.classList.add('show');
    setTimeout(() => {
      error.classList.remove('show')
    },2000);
  }
}
