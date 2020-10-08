function toggleMenu(action) {
    const menu = document.getElementById('header-menu');

    if (action == 'open') {
        menu.style.display = 'flex';
    } else if (action == 'close') {
        menu.style.display = 'none';
    }
}

function changeSlide(slide) {
    const control = document.getElementById(`control-${slide}`);

    [...document.querySelectorAll('.control')].forEach(function(button) {
        button.classList.remove('control-active');
    });

    document.getElementById('slide').src = `./assets/slider/${slide}.jpg`;

    control.classList.add('control-active');
}

function changePackImage(pack, image) {
    document.getElementById(`${pack}`).src = `./assets/packs/1/${image}.jpg`; 
}