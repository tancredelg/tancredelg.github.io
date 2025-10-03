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
        logo: { type: 'imgpath', value: '/images/python-logo-only-cropped.png' },
    },
    java: {
        title: 'Java',
        url: 'https://www.java.com/',
        logo: { type: 'imgpath', value: '/images/java-logo-small.svg' },
    },
    cpp: {
        title: 'C++',
        url: 'https://isocpp.org/',
        logo: { type: 'imgpath', value: '/images/c++-logo.svg' },
    },
    js: {
        title: 'JavaScript',
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        logo: { type: 'imgpath', value: '/images/js-logo.svg' },
    },
    ts: {
        title: 'TypeScript',
        url: 'https://www.typescriptlang.org/',
        logo: { type: 'imgpath', value: '/images/typescript-logo.svg' },
    },
    unreal: {
        title: 'Unreal Engine',
        url: 'https://www.unrealengine.com/',
        logo: { type: 'imgpath', value: '/images/unreal-engine-logo.svg' },
    },
    unity: {
        title: 'Unity',
        url: 'https://unity.com/',
        logo: { type: 'imgpath', value: '/images/unity-logo.svg' },
    },
    flask: {
        title: 'Flask',
        url: 'https://flask.palletsprojects.com/',
        logo: { type: 'imgpath', value: '/images/flask-logo-cropped.png' },
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
        logo: { type: 'imgpath', value: '/images/sqlite-logo.svg' },
    },
    tailwind: {
        title: 'Tailwind CSS',
        url: 'https://tailwindcss.com/',
        logo: { type: 'imgpath', value: '/images/tailwindcss-mark.d52e9897.svg' },
    },
    zookeeper: {
        title: 'Apache ZooKeeper',
        url: 'https://zookeeper.apache.org/',
        logo: { type: 'imgpath', value: '/images/apache-zookeeper-logo.png' },
    },
    openai: {
        title: 'OpenAI',
        url: 'https://openai.com/api/',
        logo: { type: 'imgpath', value: '/images/OpenAI-white-monoblossom.svg' },
    },
    opencv: {
        title: 'OpenCV',
        url: 'https://opencv.org/',
        logo: { type: 'imgpath', value: '/images/opencv-logo.webp' },
    },
    moderngl: {
        title: 'ModernGL',
        url: 'https://moderngl.readthedocs.io/',
        logo: { type: 'imgpath', value: '/images/moderngl-logo.png' },
    },
}

/*
'python': '/images/python-logo-only-cropped.png',
'java': '/images/java-logo-small.svg',
'c++': '/images/c++-logo.svg',
'javascript': '/images/js-logo.svg',
'unreal-engine': '/images/unreal-engine-logo.svg',
'unity': '/images/unity-logo.svg',
'flask': '/images/flask-logo-cropped.png',
'htmx': '/images/htmx-logo.png',
'sqlite': '/images/sqlite-logo.svg',
'tailwindcss': '/images/tailwindcss-mark.d52e9897.svg',
'apache-zookeeper': '/images/apache-zookeeper-logo.png',
'opencv': '/images/opencv-logo.webp',
'moderngl': '/images/moderngl-logo.png',
*/
