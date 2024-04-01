console.log('container вилазить, все добре')

let home = 'https://google.com'

window.back = () => {
  console.log('back')
  history.back()
}

window.forward = () => {
  history.forward()
}

window.reload = () => {
  location.reload()
}

window.home = () => {
  location.assign(home)
}

window.go = () => {
  if (urlInput.value === '') {
    urlInput.value = window.location.href
  } else if (urlInput.value.startsWith('https://')) {
    location.assign(urlInput.value)
  } else if (urlInput.value.startsWith('http://')) {
    location.assign(urlInput.value)
  } else {
    location.assign('https://' + urlInput.value)
  }
}

let loremtext =
  "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."

for (i = 0; i < 200; i++) {
  lorem.innerHTML = lorem.innerHTML.concat(loremtext)
}

window.onscroll = function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    document.getElementById(
      'scrollToTopBtn',
    ).style.display = 'block'
  } else {
    document.getElementById(
      'scrollToTopBtn',
    ).style.display = 'none'
  }
}

window.scrollToTop = function () {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
}
