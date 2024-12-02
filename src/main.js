/*
import './style.css'

document.querySelector('#app').innerHTML = `
  <header class="fixed top-0 z-40 w-screen">
    <nav class="w-responsive py-3 sm:py-4 xl:py-5 flex gap-4 sm:gap-6 xl:gap-7 justify-center items-center">
        <a href="#home" class="link-nav">Home</a>
        <a href="#projects" class="link-nav">Projects</a>
        <a href="#education" class="link-nav">Education</a>
    </nav>
  </header>
  <main>
    <section id="home" class="from-purple-200 to-purple-100 dark:from-aqua-800 dark:to-aqua-850">
      <div class="section-container">
        <h1 class="font-merriweather font-thin leading-[0.8]">Tancrède</h1>
        <h2 class="text-aqua-300/30 font-merriweather font-black not-italic">Lamort de Gail</h2>
        <p class="mt-3 mb-10">
            Hi, I'm Tancrède, an undergraduate computer science student at McGill University interested in everything 
            science and tech. I'm focused on computer science because I love the constant critical thinking and problem
            it involves, and because I'm fascinated by its countless applications and crossovers with offer fields.</p>
        <div class="flex flex-wrap gap-x-3 gap-y-2 justify-start items-center">
          <a class="contact" href="mailto: tancredelamortdegail@gmail.com">
            <svg class="size-5 sm:size-6" viewBox="2 2 20 20">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5l-8-5V6l8 5l8-5v2z"/>
            </svg>
            tancredelamortdegail@gmail.com
          </a>
          <a class="contact" href="https://github.com/tancredelg">
            <svg class="size-5 sm:size-6" viewBox="0 0 16 16">
              <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
            </svg>
            tancredelg
          </a>
          <a class="contact" href="https://www.linkedin.com/in/tancredelamortdegail">
            <svg class="size-5 sm:size-6" viewBox="1 1 22 22">
              <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
            </svg>
            tancredelamortdegail
          </a>
        </div>
      </div>
    </section>
    <section id="projects" class="from-purple-50 to-fuchsia-100 dark:from-aqua-850 dark:to-aqua-900">
      <div class="section-container">
        <h2 class="mb-4">Projects</h2>
        <div class="mb-3 w-fit flex-initial flex rounded-lg bg-black/15">
          <button class="tab-button font-black"><-</button>
          <div class="tab-button font-black">PROJ</div>
          <button class="tab-button font-black">-></button>
        </div>
        <div class="tab">
          <div class="flex flex-col h-full">
            <span class="mt-4 mb-1 font-bold">Project 1</span>
            WIP
          </div>
        </div>
        <div class="tab">
          <div class="flex flex-col h-full">
            <span class="mt-4 mb-1 font-bold">Project 2</span>
            WIP
          </div>
        </div>
        <div class="tab">
          <div class="flex flex-col h-full">
            <span class="mt-4 mb-1 font-bold">Project 3</span>
            WIP
          </div>
        </div>
        
<!--        <div class="projects-container">-->
<!--          <div class="card-project">-->
<!--            <h6 class="link"><a href="https://github.com/tancredelg">Project</a></h6>-->
<!--            <p>Project description</p>-->
<!--          </div>-->
<!--          <div class="card-project">-->
<!--            <h6 class="link"><a href="https://github.com/tancredelg">Project</a></h6>-->
<!--            <p>Project description</p>-->
<!--          </div>-->
<!--        </div>-->
      </div>
    </section>
    <section id="education" class="snap-end from-fuchsia-100 to-transparent dark:from-aqua-900 dark:to-aqua-950">
      <div class="section-container">
        <h2 class="mb-4">Education</h2>
        <div class="mb-3 w-fit flex-initial flex rounded-lg bg-black/15">
          <button class="tab-button">Undergraduate</button>
          <button class="tab-button">High School</button>
        </div>
        <div class="tab">
          <div class="flex flex-col h-full">
            <span>McGill University, 2022-2025</span>
            <span>Bachelor of Science, Honours Computer Science</span>
            <span class="mt-4 mb-1 font-bold">Extracurriculars</span>
            <div class="px-2 border-l-2 border-aqua-100/40 italic">
              <a href="https://mcgillrobotics.com/" target="_blank" class="link">McGill Robotics</a>,
              <a href="https://gamedevmcgill.ca/" target="_blank" class="link">GameDev McGill</a>,
              Table Tennis Club, Tennis Club, Ski Club.
            </div>
            <span class="mt-4 mb-1 font-bold">Courses</span>
            <div class="courselist">
                <span>Fall 2022</span>
                <a href="https://www.mcgill.ca/study/2022-2023/courses/chem-110">CHEM 110 General Chemistry 1</a>
                <a href="https://www.mcgill.ca/study/2022-2023/courses/comp-250">COMP 250 Introduction to Computer Science</a>
                <a href="https://www.mcgill.ca/study/2022-2023/courses/math-133">MATH 133 Linear Algebra and Geometry</a>
                <a href="https://www.mcgill.ca/study/2022-2023/courses/comp-141">MATH 141 Calculus 2</a>
                <span>Winter 2023</span>
                <a href="https://www.mcgill.ca/study/2022-2023/courses/comp-206">COMP 206 Introduction to Software Systems</a>
                <a href="https://www.mcgill.ca/study/2022-2023/courses/comp-273">COMP 273 Introduction to Computer Systems</a>
                <a href="https://www.mcgill.ca/study/2022-2023/courses/esys-104">ESYS 104 The Earth System</a>
                <a href="https://www.mcgill.ca/study/2022-2023/courses/math-223">MATH 223 Linear Algebra</a>
                <a href="https://www.mcgill.ca/study/2022-2023/courses/math-240">MATH 240 Discrete Structures</a>
                <span>Fall 2023</span>
                <a href="https://www.mcgill.ca/study/2023-2024/courses/comp-303">COMP 303 Software Design</a>
                <a href="https://www.mcgill.ca/study/2023-2024/courses/comp-310">COMP 310 Operating Systems</a>
                <a href="https://www.mcgill.ca/study/2023-2024/courses/comp-370">COMP 370 Introduction to Data Science</a>
                <a href="https://www.mcgill.ca/study/2023-2024/courses/math-222">MATH 222 Calculus 3</a>
                <a href="https://www.mcgill.ca/study/2023-2024/courses/math-323">MATH 323 Probability</a>
                <span>Winter 2024</span>
                <a href="https://www.mcgill.ca/study/2023-2024/courses/comp-252">COMP 252 Honours Algorithms and Data Structures</a>
                <a href="https://www.mcgill.ca/study/2023-2024/courses/comp-302">COMP 302 Programming Languages and Paradigms</a>
                <a href="https://www.mcgill.ca/study/2023-2024/courses/comp-551">COMP 551 Applied Machine Learning</a>
                <a href="https://www.mcgill.ca/study/2023-2024/courses/comp-559">COMP 559 Fundamentals of Computer Animation</a>
                <span>Fall 2024</span>
                <a href="https://www.mcgill.ca/study/2024-2025/courses/comp-350">COMP 350 Numerical Computing</a>
                <a href="https://www.mcgill.ca/study/2024-2025/courses/comp-360">COMP 360 Algorithm Design</a>
                <a href="https://www.mcgill.ca/study/2024-2025/courses/comp-462">COMP 462 Computational Biology Methods</a>
                <a href="https://www.mcgill.ca/study/2024-2025/courses/comp-512">COMP 512 Distributed Systems</a>
                <a href="https://www.mcgill.ca/study/2024-2025/courses/math-324">MATH 324 Statistics</a>
                <span>Winter 2025</span>
                <a href="https://www.mcgill.ca/study/2024-2025/courses/comp-330">COMP 330 Theory of Computation</a>
                <a href="https://www.mcgill.ca/study/2024-2025/courses/comp-400">COMP 400 Project in Computer Science</a>
                <a href="https://www.mcgill.ca/study/2024-2025/courses/comp-596">COMP 596 Cloud Computing</a>
                <a href="https://www.mcgill.ca/study/2024-2025/courses/math-340">MATH 340 Discrete Mathematics</a>
              </div>
          </div>
        </div>
        <div class="tab">
          <div class="flex flex-col h-full">
            <span>Epsom College, 2020-2022</span>
            <span>A-Levels</span>
            <span class="mt-4 italic">Entrance & Fine Art Scholarships, Art Award, Computer Science Award.</span>
            <span class="mt-4 mb-1 font-bold">Extracurriculars</span>
            <div class="px-2 border-l-2 border-aqua-100/40 italic">
              Tennis Team & Field Hockey Team.
            </div>
            <div class="mt-4 mb-1 font-bold">Courses</div>
            <div class="courselist">
              <a href="https://www.aqa.org.uk/subjects/computer-science/a-level/computer-science-7517/specification" target="_blank">
                AQA 7517 Computer Science
              </a>
              <a href="https://qualifications.pearson.com/content/dam/pdf/A%20Level/Mathematics/2017/specification-and-sample-assesment/a-level-l3-mathematics-specification-issue4.pdf" target="_blank">
                Pearson Edexcel 9MA0 Mathematics
              </a>
              <a href="https://www.aqa.org.uk/subjects/physics/a-level/physics-7408/specification" target="_blank">
                AQA 7408 Physics
              </a>
          </div>
          </div>
        </div>
      </div>
    </section>
  </main>
`
*/

const mainSections = document.querySelectorAll(".section-container");
const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => entry.target.style.opacity = Math.round(entry.intersectionRatio + 0.25))
  }, 
  { threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1] }
);
mainSections.forEach((el) => el.style.opacity = 0);
mainSections.forEach(el => sectionObserver.observe(el));

// const projectCards = document.querySelectorAll(".card-project");
// const cardObserver = new IntersectionObserver(entries => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 entry.target.style.opacity = "1";
//             } else {
//                 entry.target.style.opacity = "0.4";
//             }
//         })
//     },
//     { root: projectCards[0].parentElement, rootMargin: "0px -50%", threshold: [0, 0.2, 0.4, 0.6, 0.8, 1] }
// );
// projectCards.forEach(el => cardObserver.observe(el));

const projectTabButtons = document.querySelectorAll("#projects .tab-button");
const projectTabs = document.querySelectorAll("#projects .tab");
let maxTabHeight = Math.max(...Array.from(projectTabs).map(getElementHeight));
console.log(maxTabHeight);

projectTabs.forEach((el) => {
    // el.style.display = "none";
    el.style.height = maxTabHeight + "px";
    el.classList.remove("flex");
    el.classList.add("hidden");
});
let currentProjectTab = 0;
projectTabButtons[1].textContent = "Project " + (currentProjectTab + 1) + "/" + projectTabs.length;
projectTabButtons[0].onclick = () => {
    // projectTabs[currentProjectTab].style.display = "none";
    projectTabs[currentProjectTab].classList.remove("flex");
    projectTabs[currentProjectTab].classList.add("hidden");
    projectTabButtons[2].classList.remove("bg-aqua-50/5","drop-shadow-white-md", "dark:text-aqua-100");
    currentProjectTab = currentProjectTab <= 0 ? projectTabs.length - 1 : currentProjectTab - 1;
    // projectTabs[currentProjectTab].style.display = "block";
    projectTabs[currentProjectTab].classList.remove("hidden");
    projectTabs[currentProjectTab].classList.add("flex");
    projectTabButtons[0].classList.add("bg-aqua-50/5","drop-shadow-white-md", "dark:text-aqua-100");
    projectTabButtons[1].textContent = "Project " + (currentProjectTab + 1) + "/" + projectTabs.length;
};
projectTabButtons[2].onclick = () => {
    // projectTabs[currentProjectTab].style.display = "none";
    projectTabs[currentProjectTab].classList.remove("flex");
    projectTabs[currentProjectTab].classList.add("hidden");
    projectTabButtons[0].classList.remove("bg-aqua-50/5","drop-shadow-white-md", "dark:text-aqua-100");
    currentProjectTab = currentProjectTab >= projectTabs.length - 1 ? 0 : currentProjectTab + 1;
    // projectTabs[currentProjectTab].style.display = "block";
    projectTabs[currentProjectTab].classList.remove("hidden");
    projectTabs[currentProjectTab].classList.add("flex");
    projectTabButtons[2].classList.add("bg-aqua-50/5","drop-shadow-white-md", "dark:text-aqua-100");
    projectTabButtons[1].textContent = "Project " + (currentProjectTab + 1) + "/" + projectTabs.length;
};

// const projectNames = Array.from(projectTabs).map(el => el.querySelector("span").textContent);
// for (let i = 0; i < projectTabButtons.length; i++) {
//     projectTabs[i].style.display = "none";
//     projectTabs[i].style.height = maxTabHeight + "px";
//     projectTabButtons[i].textContent = projectNames[i];
//     projectTabButtons[i].onclick = () => {
//         for (let j = 0; j < projectTabs.length; j++) {
//             if (j === i) {
//                 projectTabs[j].style.display = "block";
//                 projectTabButtons[j].classList.add("bg-aqua-50/5","drop-shadow-white-md", "dark:text-aqua-100");
//             } else {
//                 projectTabs[j].style.display = "none";
//                 projectTabButtons[j].classList.remove("bg-aqua-50/5","drop-shadow-white-md", "dark:text-aqua-100");
//             }
//         }
//     }
// }
// projectTabs[0].style.display = "block";
projectTabs[0].classList.remove("hidden");
projectTabs[0].classList.add("flex");
projectTabButtons[0].classList.add("bg-aqua-50/5", "drop-shadow-white-md", "dark:text-aqua-100");

const educationTabButtons = document.querySelectorAll("#education .tab-button");
const educationTabs = document.querySelectorAll("#education .tab");
maxTabHeight = Math.max(...Array.from(educationTabs).map(getElementHeight));
console.log(maxTabHeight);
for (let i = 0; i < educationTabButtons.length; i++) {
    // educationTabs[i].style.display = "none";
    educationTabs[i].style.height = maxTabHeight + "px";
    educationTabs[i].classList.remove("flex");
    educationTabs[i].classList.add("hidden");
    educationTabButtons[i].onclick = () => {
        for (let j = 0; j < educationTabs.length; j++) {
            if (j === i) {
                // educationTabs[j].style.display = "flex";
                educationTabs[j].classList.remove("hidden");
                educationTabs[j].classList.add("flex");
                educationTabButtons[j].classList.add("bg-aqua-50/5","drop-shadow-white-md", "dark:text-aqua-100");
            } else {
                // educationTabs[j].style.display = "none";
                educationTabs[j].classList.remove("flex");
                educationTabs[j].classList.add("hidden");
                educationTabButtons[j].classList.remove("bg-aqua-50/5","drop-shadow-white-md", "dark:text-aqua-100");
            }
        }
    }
}
// educationTabs[0].style.display = "flex";
educationTabs[0].classList.remove("hidden");
educationTabs[0].classList.add("flex");
educationTabButtons[0].classList.add("bg-aqua-50/5", "drop-shadow-white-md", "dark:text-aqua-100");

function getElementHeight(el) { 
  var styles = window.getComputedStyle(el);
  var margin = parseFloat(styles.marginTop) + parseFloat(styles.marginBottom);
  return Math.ceil(el.offsetHeight + margin);
}