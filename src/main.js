
// Store a dictionary of nav buttons with key as section id
const navButtons = Array.from(document.querySelectorAll("nav .nav-button")).reduce((acc, button) => {
  acc[button.href.split("#")[1]] = button;
  return acc;
}, {});


let scrollingToSection = null;
let currentSection = null;
let currentSectionIntersection = 0;

const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      let entryIntersection = entry.intersectionRatio * entry.boundingClientRect.height;
      // console.log(entry.target.id, entryIntersection);
      if (entry.target.id === currentSection) {
        currentSectionIntersection = entryIntersection;
      }
      if (entryIntersection > currentSectionIntersection) {
        console.log("Leaving " + currentSection + " and entering " + entry.target.id);
        if (currentSection !== null) {
          navButtons[currentSection].setAttribute("active", false);
        }
        currentSection = entry.target.id;
        currentSectionIntersection = entryIntersection;

        if (scrollingToSection === currentSection) {
          console.log("Arrived at " + currentSection);
          
          scrollingToSection = null;
          navButtons[currentSection].setAttribute("active", true);
        } else {
          navButtons[currentSection].setAttribute("active", scrollingToSection === null);
        }
      }
    })

  }, {
    root: document.querySelector("main"),
    rootMargin: "0px 0px -20%",
    threshold: [0, 0.01, 0.02, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09, 0.1, 0.12, 0.14, 0.16, 0.18, 0.2, 0.25, 0.3, 0.4, 0.5]
  }
);

document.querySelectorAll("section").forEach(el => sectionObserver.observe(el));
for (let id in navButtons) {
  let button = navButtons[id];
  button.onclick = () => {
    scrollingToSection = id;
  };
}

onwheel = () => {
  // If we are scrolling to a section, this event firing means it has been interrupted
  // So update the nav buttons to reflect the current section that we stopped at
  if (scrollingToSection !== null) {
    scrollingToSection = null;
    navButtons[currentSection].setAttribute("active", true);
  }
};


const imageCarousels = document.querySelectorAll(".image-carousel");
let currentImages = new Array(imageCarousels.length).fill(0);
imageCarousels.forEach((carousel, i) => {
  // console.log(carousel, i);
  
  const images = carousel.querySelectorAll("&> div:first-child > *");
  const buttons = carousel.querySelectorAll("button");
  const imageNumberText = carousel.querySelector("h5");
  
  images.forEach(image => image.style.display = "none");
  images[0].style.display = "block";
  imageNumberText.textContent = (currentImages[i] + 1) + "/" + images.length;
  
  buttons[0].onclick = () => {
    if (images[currentImages[i]].nodeName === "VIDEO") {
      images[currentImages[i]].pause();
    }
    images[currentImages[i]].style.display = "none";
    currentImages[i] = (currentImages[i] + (images.length - 1)) % images.length;    
    imageNumberText.textContent = (currentImages[i] + 1) + "/" + images.length;
    images[currentImages[i]].style.display = "block";
    if (images[currentImages[i]].nodeName === "VIDEO") {
      images[currentImages[i]].play();
    }
  }
  buttons[1].onclick = () => {
    if (images[currentImages[i]].nodeName === "VIDEO") {
      images[currentImages[i]].pause();
    }
    images[currentImages[i]].style.display = "none";
    currentImages[i] = (currentImages[i] + 1) % images.length;
    imageNumberText.textContent = (currentImages[i] + 1) + "/" + images.length;
    images[currentImages[i]].style.display = "block";
    if (images[currentImages[i]].nodeName === "VIDEO") {
      images[currentImages[i]].play();
    }
  }
});
