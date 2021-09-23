const burger = document.querySelector('.humburger-menu')
const menuItem = document.querySelector('.menu')

const toggleMenu = () => {
  menuItem.classList.toggle('menu-active')
  burger.classList.toggle('humburger-menu-active')
}

burger.addEventListener('click', () => toggleMenu())