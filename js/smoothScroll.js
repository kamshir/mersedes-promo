const linkHead = document.querySelectorAll('.menu-list__link')
const mainScroll = document.querySelectorAll('.main__scroll')
const newArray = [...linkHead, mainScroll]

newArray.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault()

    const ID = e.target.getAttribute('href').substr(1)

    document.getElementById(ID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
})