const pixelsTag = document.querySelector('div.pixels')

const progressTag = document.querySelector("div.progress")
const bodyTag = document.querySelector("body")

const sections = document.querySelectorAll('section')
const headerTag = document.querySelector('header')
const clientTag = document.querySelector('div.client')
const pageTag = document.querySelector('div.page')

document.addEventListener('scroll', function() {
  const pixels = window.pageYOffset  
  pixelsTag.innerHTML = pixels
})

document.addEventListener("scroll", function () {
  const currentDistance = window.pageYOffset
  const pageHeight = bodyTag.getBoundingClientRect().height
	const totalDistance = pageHeight - window.innerHeight
  
  const percentage = currentDistance / totalDistance
    
  progressTag.style.width = `${100 * percentage}%`  
})

document.addEventListener("scroll", function () {
	const pixels = window.pageYOffset  

  sections.forEach(section => {
    if (section.offsetTop - 20 <= pixels) {
      clientTag.innerHTML = section.getAttribute('data-client')
      pageTag.innerHTML = section.getAttribute('data-page')
      
      const isDark = section.hasAttribute('data-is-dark')

      if (isDark) {
        headerTag.classList.add('white')
        progressTag.classList.add('white')
      } else {
        headerTag.classList.remove('white')
        progressTag.classList.remove("white")
      }
    }
  })
})


document.addEventListener('scroll', function() {
  const topViewport = window.pageYOffset
  const midViewport = topViewport + (window.innerHeight / 2)

  sections.forEach(section => {
    const midSection = section.offsetTop + (section.offsetHeight / 2)
    const distanceToSection = midViewport - midSection

    const parallaxTags = section.querySelectorAll('[data-parallax]')

    parallaxTags.forEach(tag => {
      const ratio = parseFloat(tag.getAttribute('data-parallax'))
      const weightedDistance = distanceToSection * ratio

      tag.style.transform = `translate(0, ${weightedDistance}px)`
    })
  })
})
