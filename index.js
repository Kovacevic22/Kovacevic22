//HAMBURGER MENU
const ham_btn = document.querySelector('.ham-menu');
const mobile_menu = document.querySelector('.mobile-nav');
ham_btn.addEventListener('click', ()=> {
    ham_btn.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});
const nav_links = document.querySelectorAll('.mobile-nav a')
nav_links.forEach(link => {
    link.addEventListener('click', () => {
        ham_btn.classList.remove('active');
        mobile_menu.classList.remove('active');
    });
});
//CV DOWNLOAD

const resumeBtn = document.getElementById('resume-btn');
resumeBtn.addEventListener('click', ()=> {
    if (confirm("Do you want to download the CV file? Click OK to continue.")) {
        const link = document.createElement('a');
        link.href = './CV/VK_CV.pdf';
        link.download = 'VK_CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
});

//CONTACT ME -email
document.getElementById('contact-btn').addEventListener('click', function() {
    window.location.href = "mailto:vukasinkue03@gmail.com";
});

//CLICK

document.querySelectorAll('a[id$="-section"],a[class$="-section"],.header-left p[class$="-section"]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const id = this.id || this.className;

        const main1 = document.querySelector('.main-content-1');
        const main2 = document.querySelector('.main-content-2');
        const main3 = document.querySelector('.main-content-3');
        const main4 = document.querySelector('.main-content-4');
        if (id.includes('home')) {
            main1.style.display = 'block';
            main2.style.display = 'none';
            main3.style.display = 'none';
            main4.style.display = 'none';
        } else if (id.includes('about')) {
            main1.style.display = 'none';
            main2.style.display = 'block';
            main3.style.display = 'none';
            main4.style.display = 'none';
        } else if(id.includes('projects')){
            main1.style.display = 'none';
            main2.style.display = 'none';
            main3.style.display = 'block';
            main4.style.display = 'none';
        }else if(id.includes('skills')){
            main1.style.display = 'none';
            main2.style.display = 'none';
            main3.style.display = 'none';
            main4.style.display = 'block';
        }
    });
});
window.addEventListener('DOMContentLoaded', function () {
    const content1 = document.querySelector('.main-content-1');
    if (content1) {
        content1.style.display = 'block';
    }
});
//ANIMATED TEXT

const animatedText = document.getElementById('animated-text');

const typewriter = new Typewriter(animatedText, {
    loop: true,
    delay: 75
});

typewriter
  .pauseFor(2000)
  .typeString('Web Developer who loves bringing ideas to life in the browser')
  .pauseFor(1000)
  .start();

//ANIMATION
