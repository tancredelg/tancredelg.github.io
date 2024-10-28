import './style.css'

document.querySelector('#app').innerHTML = `
  <header class="fixed top-0 z-40 py-3 w-screen">
    <nav class="w-responsive flex justify-between items-center">
      <h6 class="-mt-1.5 text-aqua-100/80">
        <a href="#landing">⌂</a>
      </h6>
      <div class="flex gap-4 sm:gap-5 xl:gap-7">
        <a href="#about" class="link-nav">About</a>
        <a href="#projects" class="link-nav">Projects</a>
        <a href="#contact" class="link-nav">Contact</a>
      </div>
    </nav>
  </header>
  <main>
    <section id="landing" class="from-purple-200 to-purple-100 dark:from-aqua-800 dark:to-aqua-850">
      <div class="section-container">
<!--        <h2 class="font-normal text-slate-900/40 dark:text-purple-100/30"> { </h2>-->
<!--        <div class="py-5 font-jetbrains-mono text-center">-->
<!--          <p class="leading-none text-[17vw] sm:text-[7rem] xl:text-[9rem] font-extrabold-->
<!--           text-purple-800/80 dark:text-purple-400">Tancrede</p>-->
<!--          <p class="leading-none text-[8vw] sm:text-6xl xl:text-7xl-->
<!--           text-slate-900/75 dark:text-purple-100">Lamort de Gail</p>-->
<!--        </div>-->
<!--        <h2 class="font-normal text-slate-900/40 dark:text-purple-100/30 text-end"> } </h2>-->
        <h1 class="font-merriweather font-thin leading-[0.6]">Tancrede</h1>
        <h2 class="text-aqua-300/80 font-merriweather font-black not-italic">Lamort de Gail</h2>
        <p class="mt-3 mb-10">Hi my name is Tancrede. I'm an undergraduate CS student at McGill University, blah blah blah...</p>
        <div class="flex flex-wrap gap-x-3 gap-y-2 justify-start items-center">
          <a class="link-contact" href="mailto: tancredelamortdegail@gmail.com">
            <svg class="size-5 sm:size-6" viewBox="2 2 20 20">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5l-8-5V6l8 5l8-5v2z"/>
            </svg>
            tancredelamortdegail@gmail.com
          </a>
          <a class="link-contact" href="https://github.com/tancredelg">
            <svg class="size-5 sm:size-6" viewBox="0 0 16 16">
              <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
            </svg>
            tancredelg
          </a>
          <a class="link-contact" href="https://www.linkedin.com/in/tancredelamortdegail">
            <svg class="size-5 sm:size-6" viewBox="1 1 22 22">
              <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
            </svg>
            tancredelamortdegail
          </a>
        </div>
      </div>
    </section>
    <section id="about" class="from-purple-100 to-purple-50 dark:from-aqua-850 dark:to-aqua-900">
      <div class="section-container">
        <h1>About</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin porttitor, nisi ut tempor pulvinar, lectus diam efficitur ante, eget commodo mauris lacus at ante. Ut hendrerit ante est, vel dignissim eros vehicula nec. Quisque luctus, felis id accumsan interdum, eros est molestie nibh, ut mollis magna orci ut nisi. Pellentesque dignissim accumsan enim. Proin sollicitudin magna in velit blandit malesuada. Cras hendrerit dictum metus non varius. Morbi aliquet mauris interdum, gravida neque ornare, scelerisque neque. Cras ultrices, turpis in sodales tristique, purus elit facilisis tellus, at cursus lacus libero vel risus. In non ultricies quam. Donec eros dui, consequat nec nulla et, luctus facilisis justo. Nullam commodo purus mi, id blandit tortor tincidunt a. Sed tincidunt volutpat condimentum. Morbi porta porttitor ultricies. Aliquam purus massa, venenatis quis quam euismod, porttitor malesuada ex. Aliquam non pharetra felis, sit amet varius nisl.
        </p>
      </div>
    </section>
    <section id="projects" class="from-purple-50 to-fuchsia-100 dark:from-aqua-900 dark:to-aqua-950">
      <div class="section-container">
        <h1>Projects</h1>
        <div class="projects-container">
          <div class="card-project">
            <h6 class="link"><a href="https://github.com/tancredelg">Project</a></h6>
            <p>Project description</p>
          </div>
          <div class="card-project">
            <h6 class="link"><a href="https://github.com/tancredelg">Project</a></h6>
            <p>Project description</p>
          </div>
          <div class="card-project">
            <h6 class="link"><a href="https://github.com/tancredelg">Project</a></h6>
            <p>Project description</p>
          </div>
          <div class="card-project">
            <h6 class="link"><a href="https://github.com/tancredelg">Project</a></h6>
            <p>Project description</p>
          </div>
        </div>
      </div>
    </section>
    <section id="contact" class="snap-end from-fuchsia-100 to-transparent dark:from-aqua-950 dark:to-black">
      <div class="section-container">
        <h1>Contact</h1>
        <div class="flex flex-wrap gap-x-3 gap-y-2 justify-start items-center">
          <a class="link-contact" href="mailto: tancredelamortdegail@gmail.com">
            <svg class="size-5 sm:size-6" viewBox="2 2 20 20">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5l-8-5V6l8 5l8-5v2z"/>
            </svg>
            tancredelamortdegail@gmail.com
          </a>
          <a class="link-contact" href="https://github.com/tancredelg">
            <svg class="size-5 sm:size-6" viewBox="0 0 16 16">
              <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
            </svg>
            tancredelg
          </a>
          <a class="link-contact" href="https://www.linkedin.com/in/tancredelamortdegail">
            <svg class="size-5 sm:size-6" viewBox="1 1 22 22">
              <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
            </svg>
            tancredelamortdegail
          </a>
        </div>
      </div>
    </section>
  </main>
`


const mainSections = document.querySelectorAll(".section-container");
const projectCards = document.querySelectorAll(".card-project")

const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => entry.target.style.opacity = entry.intersectionRatio)
  }, 
  { root: null, threshold: [0, 0.2, 0.4, 0.6, 0.8, 1] }
);

const cardObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.classList.add("rounded-[2rem]");
      } else {
        entry.target.style.opacity = "0.2";
        entry.target.classList.remove("rounded-[2rem]");
      }
    })
  }, 
  { root: projectCards[0].parentElement, rootMargin: "0px -50%", threshold: [0, 0.2, 0.4, 0.6, 0.8, 1] }
);

mainSections.forEach(el => sectionObserver.observe(el));
projectCards.forEach(el => cardObserver.observe(el));

