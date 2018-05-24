// import "babel-polyfill";
window.addEventListener('DOMContentLoaded', init);

// import $ from 'jquery';

function init () {
    
    document.getElementById('menu-toggle').addEventListener('click', function (e) {
        let navWrap = document.querySelector('.nav-wrap');
        
        this.classList.toggle('open');
        navWrap.classList.toggle('show');

        if (navWrap.classList.contains('show')) {
            document.body.style.overflow = 'hidden';
            document.querySelector('.overlay').style.display = 'block';
        } else {
            document.body.style.overflow = 'auto';
            document.querySelector('.overlay').style.display = 'none';
        }
    })

    document.querySelector('.overlay').addEventListener('click', function (e) {
        let navWrap = document.querySelector('.nav-wrap');

        if (navWrap.classList.contains('show')) {
            navWrap.classList.remove('show');
            document.body.style.overflow = 'auto';
            document.getElementById('menu-toggle').classList.remove('open');
            document.querySelector('.overlay').style.display = 'none';
        }
    })
        

}








