// when we scroll the page, make things parallax
// we want to move certain types based on how far they are from an anchor point. The anchor point in this example is the middle of the section.

// How far should we parallax? Well, it's a ratio of the middle distance scrolled to the middle point of the anchor

document.addEventListener ("scroll", function() {

        //   distance from the top of the viewport to the midpoint
    const topViewport = window.pageYOffset

      //   distance from the top of the viewport to the midpoint plus half the height of the entire page.
    const midViewport = topViewport + (window.innerHeight / 2)
  
  
        //   *** Code to determine the midpoint for each section
    sections.forEach(section => {

        //     code to determine how far down the page the top of each section is
    const topSection = section.offsetTop

        //     code to determine the midpoint for each section
    const midSection = topSection + (section.offsetHeight / 2)
    
        //     code to determine the distance between midSection and MidViewport.
    const distanceToSection = midViewport - midSection

        //     code to add movement to ALL shapes
    const parallaxTags = section.querySelectorAll(`[data-parallax]`)
    
        //     loop over each parallaxed tag
    parallaxTags.forEach(tag => {
      const speed = parseFloat(tag.getAttribute("data-parallax"))
    tag.style.transform = `translate(0, ${distanceToSection * speed}px)`
    })
  })
});
