// import "babel-polyfill";
window.addEventListener('DOMContentLoaded', init);

// import $ from 'jquery';

function init () {
    let hh;
    document.getElementById('menu-toggle').addEventListener('click', function (e) {
        let navWrap = document.querySelector('.nav-wrap');
        
        this.classList.toggle('open');
        navWrap.classList.toggle('show');

        if (navWrap.classList.contains('show')) {
            document.addEventListener('mousewheel', stopScrollWheel);
            document.addEventListener('keydown', stopScrollKey);
            document.addEventListener('touchmove', stopScrollTouch, { passive: false });
            document.querySelector('.overlay').style.display = 'block';
        } else {
            document.removeEventListener('mousewheel', stopScrollWheel);
            document.removeEventListener('keydown', stopScrollKey);
            document.removeEventListener('touchmove', stopScrollTouch, { passive: false });
            document.querySelector('.overlay').style.display = 'none';
        }
    })

    document.querySelector('.overlay').addEventListener('click', hideMenu);
    window.addEventListener('scroll', hideMenu);

    function hideMenu() {
        let navWrap = document.querySelector('.nav-wrap');

        if (navWrap.classList.contains('show')) {
            navWrap.classList.remove('show');
            document.getElementById('menu-toggle').classList.remove('open');
            document.removeEventListener('mousewheel', stopScrollWheel);
            document.removeEventListener('keydown', stopScrollKey);
            document.removeEventListener('touchmove', stopScrollTouch, { passive: false });
            document.querySelector('.overlay').style.display = 'none';
        }
    }

    function stopScrollWheel(e) {
        e.preventDefault();
    }
    
    function stopScrollKey(e) {
        let key = e.keyCode;
        if (key === 33 || key === 34 || key === 40 || key === 38) {
            e.preventDefault();
        }
    }
    
    function stopScrollTouch(e) {
        e.preventDefault();
    }
    }








