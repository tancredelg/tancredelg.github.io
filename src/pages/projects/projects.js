import '../../style.css'

document.querySelector('#app').innerHTML = `
  <header>
    <nav class="header-nav">
      <div class="animate-slide-in-left">
        <h1 class="page-title">projects</h1>
      </div>
      <div class="animate-slide-in-right">
        <ul class="flex flex-col text-base sm:text-lg text-end">
          <li><a class="nav-link" href="/">home</a></li>
          <li><a class="nav-link" href="/src/pages/projects/">projects</a></li>
          <li><a class="nav-link" href="/src/pages/education/">education</a></li>
          <li><a class="nav-link" href="/src/pages/about/">about me</a></li>    
        </ul>
      </div>
    </nav>
  </header>
  <main>
    <div>
      <p>Hi, my name is Tancrede.</p>
    </div>
  </main>
`
