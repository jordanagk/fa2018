const sections = document.querySelectorAll('section')


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
