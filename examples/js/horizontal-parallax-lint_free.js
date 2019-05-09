
const pixelsTag = document.querySelector('div.pixels');

const bodyTag = document.querySelector('body');

const progressTag = document.querySelector("div.progress");

const sections = document.querySelectorAll("section");


const clientTag = document.querySelector("div.client");

// ** Code to select the div.page classes
const pageTag = document.querySelector("div.page");

// ** Code to select the header HTML tag
const headerTag = document.querySelector("header");



document.addEventListener('scroll', function() {

  const pixels = window.pageXOffset;

  pixelsTag.innerHTML = pixels;
});


document.addEventListener('scroll', function() {
  const pixels = window.pageXOffset;
  
  const pageWidth = bodyTag.getBoundingClientRect().width;

  const totalScrollableDistance = pageWidth - window.innerWidth;

  console.log(pageWidth);
  
  
  const percentage = pixels / totalScrollableDistance;
  
  progressTag.style.height = `${100 * percentage}%`;
  progressTag.style.width = "5px";
 });

document.addEventListener("scroll", function() {
  const pixels = window.pageXOffset;
  
  sections.forEach(section => {

    if (section.offsetLeft - 60 <= pixels) {
      clientTag.innerHTML = section.getAttribute("data-client");
      pageTag.innerHTML = section.getAttribute("data-page");
      
      if (section.hasAttribute("data-is-dark")) {
          headerTag.classList.add("white");
        progressTag.classList.add("white");
          } else {
            headerTag.classList.remove("white");
            progressTag.classList.remove("white");
          }
      
    }
  }); 
});

// Parallax Effect
document.addEventListener ("scroll", function() {

  const leftViewport = window.pageXOffset;

  const midViewport = leftViewport + (window.innerWidth / 2);
  
  
//   *** Code to determine the midpoint for each section
  sections.forEach(section => {
//     code to determine how far down the page the top of each section is
    const leftSection = section.offsetLeft;
//     code to determine the midpoint for each section
    const midSection = leftSection + (section.offsetWidth / 2);
    });
    
//     code to determine the distance between midSection and MidViewport. How far away the 
    const distanceToSection = midViewport - midSection;

//     code to add movement to ALL shapes
    const parallaxTags = section.querySelectorAll(`[data-parallax]`);
    
//     loop over each parallaxed tag
    parallaxTags.forEach(tag => {
      const speed = parseFloat(tag.getAttribute("data-parallax"));
    tag.style.transform = `translate(0, ${distanceToSection * speed}px)`;
    });
});