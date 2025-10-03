export interface TechProps {
    title: string
    url: string
    logo: {
        type: 'imgpath' | 'html'
        value: string
    }
}

export const technologies: Record<string, TechProps> = {
    python: {
        title: 'Python',
        url: 'https://www.python.org/',
        logo: { type: 'imgpath', value: '/src/assets/python-logo-only-cropped.png' },
    },
    java: {
        title: 'Java',
        url: 'https://www.java.com/',
        logo: { type: 'imgpath', value: '/src/assets/java-logo-small.svg' },
    },
    cpp: {
        title: 'C++',
        url: 'https://isocpp.org/',
        logo: { type: 'imgpath', value: '/src/assets/c++-logo.svg' },
    },
    js: {
        title: 'JavaScript',
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        logo: { type: 'imgpath', value: '/src/assets/js-logo.svg' },
    },
    ts: {
        title: 'TypeScript',
        url: 'https://www.typescriptlang.org/',
        logo: { type: 'imgpath', value: '/src/assets/typescript-logo.svg' },
    },
    unreal: {
        title: 'Unreal Engine',
        url: 'https://www.unrealengine.com/',
        logo: { type: 'imgpath', value: '/src/assets/unreal-engine-logo.svg' },
    },
    unity: {
        title: 'Unity',
        url: 'https://unity.com/',
        logo: { type: 'imgpath', value: '/src/assets/unity-logo.svg' },
    },
    flask: {
        title: 'Flask',
        url: 'https://flask.palletsprojects.com/',
        logo: { type: 'imgpath', value: '/src/assets/flask-logo-cropped.png' },
    },
    htmx: {
        title: 'htmx',
        url: 'https://htmx.org/',
        logo: {
            type: 'html',
            value: `
            <div class="font-bold h-full flex items-center justify-center" style="font-size: 110%;">
                &lt;<span class="text-blue-400">/</span>&gt; htm<span class="text-blue-400">x</span>
            </div>
            `,
        },
    },
    sqlite: {
        title: 'SQLite',
        url: 'https://sqlite.org/',
        logo: { type: 'imgpath', value: '/src/assets/sqlite-logo.svg' },
    },
    tailwind: {
        title: 'Tailwind CSS',
        url: 'https://tailwindcss.com/',
        logo: { type: 'imgpath', value: '/src/assets/tailwindcss-mark.d52e9897.svg' },
    },
    zookeeper: {
        title: 'Apache ZooKeeper',
        url: 'https://zookeeper.apache.org/',
        logo: { type: 'imgpath', value: '/src/assets/apache-zookeeper-logo.png' },
    },
    openai: {
        title: 'OpenAI',
        url: 'https://openai.com/api/',
        logo: { type: 'imgpath', value: '/src/assets/OpenAI-white-monoblossom.svg' },
    },
    opencv: {
        title: 'OpenCV',
        url: 'https://opencv.org/',
        logo: { type: 'imgpath', value: '/src/assets/opencv-logo.webp' },
    },
    moderngl: {
        title: 'ModernGL',
        url: 'https://moderngl.readthedocs.io/',
        logo: { type: 'imgpath', value: '/src/assets/moderngl-logo.png' },
    },
}

/*
'python': '/src/assets/python-logo-only-cropped.png',
'java': '/src/assets/java-logo-small.svg',
'c++': '/src/assets/c++-logo.svg',
'javascript': '/src/assets/js-logo.svg',
'unreal-engine': '/src/assets/unreal-engine-logo.svg',
'unity': '/src/assets/unity-logo.svg',
'flask': '/src/assets/flask-logo-cropped.png',
'htmx': '/src/assets/htmx-logo.png',
'sqlite': '/src/assets/sqlite-logo.svg',
'tailwindcss': '/src/assets/tailwindcss-mark.d52e9897.svg',
'apache-zookeeper': '/src/assets/apache-zookeeper-logo.png',
'opencv': '/src/assets/opencv-logo.webp',
'moderngl': '/src/assets/moderngl-logo.png',
*/
