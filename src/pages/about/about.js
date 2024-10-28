import '../../style.css'

document.querySelector('#app').innerHTML = `
  <header>
    <nav class="header-nav">
      <div class="animate-slide-in-left">
        <h1 class="page-title">about me</h1>
      </div>
      <div class="animate-slide-in-right">
        <ul class="flex flex-col text-base lg:text-lg text-end">
          <li><a class="nav-link" href="/">home</a></li>
          <li><a class="nav-link" href="/src/pages/projects/">projects</a></li>
          <li><a class="nav-link" href="/src/pages/education/">education</a></li>
          <li><a class="nav-link" href="/src/pages/about/">about me</a></li>    
        </ul>
      </div>
    </nav>
  </header>
  <main>
    <section class="">
      <h2 class="font-bold px-3 py-2 sm:px-4 sm:py-3 lg:px-5 lg:py-4">Section 1</h2>
      <div class="rounded-responsive bg-darker px-3 py-2 sm:px-4 sm:py-3 lg:px-5 lg:py-4">
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin porttitor, nisi ut tempor pulvinar, lectus diam efficitur ante, eget commodo mauris lacus at ante. Ut hendrerit ante est, vel dignissim eros vehicula nec. Quisque luctus, felis id accumsan interdum, eros est molestie nibh, ut mollis magna orci ut nisi. Pellentesque dignissim accumsan enim. Proin sollicitudin magna in velit blandit malesuada. Cras hendrerit dictum metus non varius. Morbi aliquet mauris interdum, gravida neque ornare, scelerisque neque. Cras ultrices, turpis in sodales tristique, purus elit facilisis tellus, at cursus lacus libero vel risus. In non ultricies quam. Donec eros dui, consequat nec nulla et, luctus facilisis justo. Nullam commodo purus mi, id blandit tortor tincidunt a. Sed tincidunt volutpat condimentum. Morbi porta porttitor ultricies. Aliquam purus massa, venenatis quis quam euismod, porttitor malesuada ex. Aliquam non pharetra felis, sit amet varius nisl.
        </p>
        <p>
          Mauris elementum ut magna non pharetra. Aenean lobortis aliquam nisl et volutpat. Integer vitae ullamcorper purus. Pellentesque diam nisl, consectetur ut pellentesque id, placerat semper lectus. Ut viverra odio vel felis ultricies, ac lobortis augue venenatis. Duis ac metus a mi consectetur congue at at eros. Duis rutrum laoreet neque ut luctus. Curabitur interdum finibus ex quis dictum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sed arcu in velit vulputate tempor ut ac nisl. Duis suscipit nibh eu fermentum finibus. Sed ac sapien nec orci cursus lacinia. Nulla facilisi.
        </p>
      </div>
    </section>
    <section class="mt-5 space-y-5">
      <h2 class="text-xl font-bold px-3 pt-2 sm:px-4 sm:pt-3 lg:px-5 lg:pt-4">Section 2</h2>
      <div class="rounded-responsive bg-darker px-3 py-2 sm:px-4 sm:py-3 lg:px-5 lg:py-4"
        <p>
          Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus eget purus orci. Suspendisse quis ligula diam. Proin molestie lorem et suscipit tincidunt. Proin a iaculis arcu. Aenean non pellentesque sapien, vel luctus neque. Curabitur vestibulum velit finibus nisi auctor pellentesque. Proin et tempus felis. Aenean dolor turpis, aliquet in turpis ut, ultrices dignissim felis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam libero ligula, venenatis at massa in, eleifend convallis turpis. Maecenas dictum, tellus maximus ullamcorper porta, ligula erat iaculis augue, ut feugiat erat lectus ut neque.
        </p>
        <p>
          Curabitur varius nisi non eros aliquam, in laoreet arcu scelerisque. Ut eget ante lobortis, bibendum felis ut, vehicula mi. Donec sed erat faucibus, consectetur est nec, dignissim urna. Donec id tempor ligula. Integer tincidunt nibh eget leo consectetur, at tempor eros imperdiet. Nam pulvinar elementum dolor at malesuada. Nunc lobortis sem et arcu eleifend rutrum. In nec cursus magna, ut sagittis nibh. Vivamus sagittis, velit sit amet dapibus iaculis, elit leo ultricies purus, molestie faucibus nunc est et urna. Donec posuere vel turpis rhoncus pretium. Integer at vestibulum diam, a tempor dui. Duis tincidunt nec felis a hendrerit. Integer sit amet neque neque. Etiam tincidunt elit diam, non euismod est auctor in. Fusce sollicitudin, erat a consequat consequat, ante nisi consectetur ligula, a bibendum ipsum tellus eget arcu.
        </p>
        <p>
        Curabitur ac dictum dolor. Praesent hendrerit ac nulla ut auctor. Aliquam eget fermentum arcu. Curabitur mattis enim pretium tincidunt pulvinar. Morbi magna tellus, euismod id imperdiet eget, tincidunt sed justo. In sagittis imperdiet neque, eu vehicula eros eleifend et. Sed at massa vestibulum, rutrum lectus ut, efficitur risus.
      </p>
      </div>
    </section>
  </main>
`
