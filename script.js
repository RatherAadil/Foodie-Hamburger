const headerContent = document.querySelector('.header-content')
const hamburgerMenuContainer = document.querySelector('.hamburger-menu-container')
const closeIcon = document.querySelector('.close-icon')

const main = document.querySelector('.main-content')
const goToTop = document.querySelector('.go-to-top')

hamburgerMenuContainer.addEventListener('click', () => {
    headerContent.classList.add('menu-open')
})
headerContent.addEventListener('click', (e) => [
    e.stopPropagation()

])
closeIcon.addEventListener('click', () => {
    headerContent.classList.remove('menu-open')
})

window.addEventListener('click', () => {
    headerContent.classList.remove('menu-open')
})

goToTop.addEventListener('click', () => {
    main.scrollTo(0, 0)
})