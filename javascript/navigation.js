const menuButton = document.querySelector('.menu-nav')
const navLIst = document.querySelector('.primary-nav__list')

let toggleClick = 'off'

function MenuToggle() {

    if (toggleClick === 'on') {
        menuButton.classList.remove('menu-animation')
        navLIst.classList.remove('translate-x')

        toggleClick = 'off'
    } else if(toggleClick === 'off') {
        menuButton.classList.add('menu-animation')
        navLIst.classList.add('translate-x')

        toggleClick = 'on'
    }
}
menuButton.addEventListener('click', MenuToggle)