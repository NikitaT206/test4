const subtitle = document.querySelector('.subtitle')
const body = document.querySelector('.body')

fetch('https://baconipsum.com/api/?type=lucky')
  .then(data => data.json())
  .then(data => {
    subtitle.textContent = data[0]
  }).catch(err => console.log(err)).finally(() => body.style.display = 'block')

const counries = document.querySelectorAll('.circle-grey__country_hide')
const circle = document.querySelector('.circle-grey')
const ms = 400

setTimeout(() => {
  counries.forEach((item, i, arr) => {
    setTimeout(() => {
      item.classList.add('circle-grey__country')
    }, i * ms)
    setTimeout(() => {
      circle.classList.add('circle-grey_animated')
    }, arr.length * ms + 100)
  })
}, 3000)

const mobileNavigation = document.querySelector('.header__navigation-mobile')
const mobileNavigationLinks = document.querySelectorAll('.header__link-mobile')
const mobileNavigationCurrentLink = document.querySelector('.header__current-link')
const mobileNavigationTriangle = document.querySelector('.header__triangle')

mobileNavigation.addEventListener('click', () => {
  if (mobileNavigation.classList.contains('header__navigation-mobile_open')) {
    mobileNavigation.classList.remove('header__navigation-mobile_open')
    mobileNavigationTriangle.classList.remove('header__triangle_rotate')
  } else {
    mobileNavigation.classList.add('header__navigation-mobile_open')
    mobileNavigationTriangle.classList.add('header__triangle_rotate')
  }
})

const navigationLinks = document.querySelectorAll('.header__link')


navigationLinks.forEach(item => {
  item.addEventListener('click', () => {
    const currentLink = document.querySelector('.header__link_current')
    if (item !== currentLink) {
      item.classList.add('header__link_current')
      currentLink.classList.remove('header__link_current')
    }
  })
})

mobileNavigationLinks.forEach(item => {
  item.addEventListener('click', () => {
    mobileNavigationCurrentLink.textContent = item.textContent
  })
})

const input = document.querySelector('.form__input')

input.addEventListener('input', () => {
  let value = input.value
  const pattern = /[!@#$%^&*()]/gi
  if (pattern.test(value)) {
    value = value.replace(pattern, '')
    input.value = value
  }
})
 

