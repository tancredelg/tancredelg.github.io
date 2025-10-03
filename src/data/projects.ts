export const categories = [
    { id: 'all', name: 'All' },
    { id: 'web-dev', name: 'Web Dev' },
    { id: 'game-dev', name: 'Game Dev' },
    { id: 'computer-graphics', name: 'Graphics' },
    { id: 'ai-ml', name: 'AI/ML' },
    { id: 'systems', name: 'Systems' },
]

type CategoryId = 'web-dev' | 'game-dev' | 'computer-graphics' | 'ai-ml' | 'systems'

export interface ProjectProps {
    title: string // Title of the project
    summary: string // Short summary of the project, shown on the project card
    description: string // Description of the project
    fromDate: string // Start date of the project, formatted as `Mon YYYY`
    toDate?: string // End date of the project, formatted as `Mon YYYY`, optional (for ongoing projects)
    categories: CategoryId[] // Categories the project belongs to, e.g., ['web-dev', 'ai-ml'] (at least one required)
    technologies: string[] // Technologies used in the project, e.g., ['js', 'react', 'tailwind', 'unreal']
    repoUrl?: string // URL to the project's source code repository, optional
    postUrl?: string // URL to a blog post about the project, optional
    liveUrl?: string // URL to the live demo of the project, optional
    coverMedia: number // Index of the media item to use as the cover image (0-based)
    media: {
        type: 'image' | 'video'
        src: string // Source URL of the media
        alt?: string // Alternative text for the media, optional
    }[] // Media associated with the project, can be images or videos
}

export const projects: ProjectProps[] = [
    {
        title: 'UE5 AI Playground',
        summary:
            'A hands-on Unreal Engine 5 project where I learned C++ by building a small shooter to explore input handling, AI, and animation systems. Implemented behavior trees, state machines, and NavMesh-based pathfinding to prototype intelligent enemies and fluid character animations.',
        description: `With some UE5 experience under my belt - but only using blueprints - I decided to learn the C++ side of Unreal Engine by creating a simple shooter game. This project was my playground for exploring various aspects of C++-oriented game development through UE5, from input handling to UI updates, to creating base classes for guns and AI characters. I also took the opportunity to learn about more of the engine's built-in systems, like behavior trees and animation state machines, both helpful tools for creating dynamic and engaging gameplay.

Aside from learning lots about the engine's C++ API while making the foundations of a shooter game, I got to use blend spaces in combination with nested animation state machines to create fluid character animations, and behavour trees to create intelligent AI characters that can chase, look for, or shoot at the player, or return to their posts (if the player escapes their line of sight for long enough), using a NavMesh for pathfinding under the hood.

This project exposed me further to the industry-grade game development possible with Unreal Engine, and gaining broader experience with the engine - including its C++ API - leaves me equipped and excited to tackle bigger game dev amibitions in the future.`,
        fromDate: 'Feb 2025',
        toDate: 'Mar 2025',
        categories: ['game-dev'],
        technologies: ['unreal', 'cpp'],
        coverMedia: 3,
        media: [
            {
                type: 'image',
                src: '/images/projects/SS - multiple enemies fight.jpg',
                alt: 'Fighting multiple enemies in the game',
            },
            {
                type: 'image',
                src: '/images/projects/SS - jumping shot.jpg',
                alt: 'Shooting while jumping',
            },
            {
                type: 'image',
                src: '/images/projects/SS - lose screen.jpg',
                alt: 'Game over screen',
            },
            {
                type: 'image',
                src: '/images/projects/SS - behaviour tree cropped.png',
                alt: 'Unreal Engine behavior tree for AI',
            },
            {
                type: 'image',
                src: '/images/projects/SS - anim state machines labelled.png',
                alt: 'Unreal Engine animation state machine',
            },
            {
                type: 'video',
                src: '/images/projects/SS - behaviour demo.mp4',
                alt: 'Demonstration of AI behavior',
            },
        ],
    },
    {
        title: 'Help Help (McHacks 12)',
        summary:
            'Hackathon web app for interview practice that records responses, transcribes speech with Whisper, and uses GPT-4 to generate feedback on clarity and professionalism. Includes webcam-based eye-contact tracking and metrics like speaking speed and word-density to give actionable practice insights.',
        description: `At McHacks 12, I worked in a team of 4 over 24h to create a web app that helps job-seekers practice for interviews. The app gives you a random question from one of three categories, and lets users record themselves responding to the question, during which a css-animated pair of eyes watch you to simulate the feeling of being watched during an interview. Once the user stops recording, the response is submitted to OpenAI's Whisper API for transcription of the audio into text, and a summary of the response is displayed to the user, providing key metrics like the size of the response, the speed at which they spoke, and the amount of eye contact made with the webcam, and, most importantly, a paragraph generated from OpenAI's GPT-4 API giving feedback on the language used, with a focus on themes like professionallism, conciseness, and clarity. We also chose to calculate word density, and highlight the overly 'dense' words in the response, as a means of pointing out potentially excessive repetition (e.g. 'like ... like ... like'). This feature ended up looking pretty cool, however we would have liked to include a stopword list to filter out words that are ok to repeat, such as 'the' or 'and', in order to avoid highlighting them.

The app has a simple Flask backend that sends API requests for the speech-to-text conversion and then feedback generation, handles the inference of the vision model that tracks the user's eyes, and calculates some relevant metrics. The data is then sent back to the frontend on the summary page. The frontend is simple HTML & JavaScript (the latter mainly to record audio), and we opted for TailwindCSS for styling the UI, which helped in designing a UI.`,
        fromDate: 'Jan 2025',
        categories: ['web-dev', 'ai-ml'],
        technologies: ['python', 'flask', 'js', 'openai', 'opencv', 'tailwind'],
        repoUrl: 'https://github.com/LaurenS419/helphelp',
        postUrl: 'https://devpost.com/software/interview-practice-4w65a2',
        coverMedia: 3,
        media: [
            {
                type: 'image',
                src: '/images/projects/HH - landing.png',
                alt: 'Landing page of the Help Help app',
            },
            {
                type: 'image',
                src: '/images/projects/HH - start recording.png',
                alt: 'Recording interface with animated eyes',
            },
            {
                type: 'image',
                src: '/images/projects/HH - stop recording.png',
                alt: 'Interface after stopping the recording',
            },
            {
                type: 'image',
                src: '/images/projects/HH - response summary.png',
                alt: 'Summary page with feedback and metrics',
            },
        ],
    },
    {
        title: 'McGill Degree Planner',
        summary:
            'A Flask + SQLite single-page planner to let McGill students map courses across terms and track degree progress. Uses htmx for dynamic, server-driven UI updates and a scraped course dataset to simplify course selection and graduation tracking.',
        description: `This project is a degree planner for McGill students. It's a single-page web app that helps students plan which courses to take when and track their progress towards completing their degree.

The project is built with Flask and SQLite on the backend, using htmx to dynamically update the frontend, which itself is built using plain old HTML, CSS and JavaScript (though I might bring in TailwindCSS for the styling, like I did for this website). I have it hosted on Vercel and it's currently open to the public for beta testing, so feel free to check it out and let me know what you think!

The SQLite backend is a simple database storing courses and course sections, which I built by scraping course data from the McGill course website using Python's beautifulsoup4 library.`,
        fromDate: 'Nov 2024',
        toDate: 'Dec 2024',
        categories: ['web-dev'],
        technologies: ['python', 'flask', 'sqlite', 'htmx', 'js'],
        repoUrl: 'https://github.com/tancredelg/mcgill-degree-planner',
        liveUrl: 'https://mcgill-degree-planner.vercel.app',
        coverMedia: 2,
        media: [
            {
                type: 'image',
                src: '/images/projects/MDP - term select.png',
                alt: 'Term selection interface',
            },
            {
                type: 'image',
                src: '/images/projects/MDP - course add.png',
                alt: 'Adding a course to the planner',
            },
            {
                type: 'image',
                src: '/images/projects/MDP - course remove NEW.png',
                alt: 'Removing a course from the planner',
            },
            {
                type: 'image',
                src: '/images/projects/MDP - course set grade.png',
                alt: 'Setting a grade for a course',
            },
        ],
    },
    {
        title: 'Distributed Computing Platform',
        summary:
            'Course project implementing a manager-worker distributed system using Apache Zookeeper to coordinate task distribution and worker availability. Built an availability-based load balancer and non-blocking manager threads to reliably assign tasks and collect results at scale.',
        description: `For one of the projects of McGill's Distributed Systems course ([COMP 512](https://www.mcgill.ca/study/2024-2025/courses/comp-512)), we had to work in teams of 2 to build a distributed computing platform with Apache Zookeeper. The objective was to have a 'manager' server that would receive tasks from clients and distribute them to a pool of 'worker' servers, which would then execute the tasks and return the results to the manager and then to the client.

There was a little bit of flexibility in how we could implement the system, which allowed us to get creative with the design, and put more thought into the architecture of the system, which was a great learning experience.

In our implementation, the manager had 2 threads: one to receive tasks from clients and one to distribute tasks to workers - a clean and effective way to achieve a non-blocking manager as required by the assignment. For the distribution of tasks, we developed an availability-based load balancing algorithm that would assign tasks to the next available worker in a round-robin fashion.

By demo time, we had a fully functional system that could handle plenty of clients and workers, and passing all the tests. I learned so much about distributed systems in this course and its assignments, ending really nicely with some case studies on the Google File System & Hadoop Distributed File System, the MapReduce programming model, and Spark. I'm glad I took this course, and recommend it to any McGill students looking for a COMP 500 course.`,
        fromDate: 'Nov 2024',
        categories: ['systems'],
        technologies: ['java', 'zookeeper'],
        repoUrl: 'https://github.com/tancredelg/comp512-p3',
        coverMedia: 1,
        media: [
            {
                type: 'image',
                src: '/images/projects/DCP - full view 1.png',
                alt: 'Full system view with manager, workers, and clients',
            },
            {
                type: 'image',
                src: '/images/projects/DCP - manager cropped.png',
                alt: 'Log output from the manager server',
            },
            {
                type: 'image',
                src: '/images/projects/DCP - worker logs 1.png',
                alt: 'Log output from a worker server',
            },
            {
                type: 'image',
                src: '/images/projects/DCP - worker logs 2.png',
                alt: 'Log output from another worker server',
            },
        ],
    },
    {
        title: 'Cartographe',
        summary:
            'A geography quiz game pipeline that generates accurate mesh-based maps from Natural Earth data and builds interactive Unity quizzes. The project includes a multiprocessing Python mesh generator and tooling to author and share geography quizzes with precise GIS data.',
        description: `Although more on the backburner, I'm working on a geography game for people to create and share quizzes of the world's countries, cities, and other geographical features. The game leverages precise, public GIS data ([Natural Earth](https://www.naturalearthdata.com/)) to generate mesh-based objects in Unity, providing an accurate and interactive representation of the world.

I started the project with creating a multi-process mesh-generation pipeline using a Python implementation of Triangle, distributed via Python's multiprocessing library to process Natural Earth's hundreds of highly precise country and territory boundaries. *See image 4 for the mesh generated for Greece.* With the mesh data generated, I can then create a very accurate and interactive map of the world in Unity.

The aim of the game is for users to create their own quizzes by selecting specific countries, cities, etc, and sharing the quiz with the public, allowing for a collaborative and educational experience. The game aims to make learning geography fun and engaging by combining accurate data with interactive gameplay.`,
        fromDate: 'May 2024',
        categories: ['game-dev', 'computer-graphics'],
        technologies: ['unity', 'python'],
        repoUrl: 'https://github.com/tancredelg/map-quiz-game',
        coverMedia: 1,
        media: [
            {
                type: 'image',
                src: '/images/projects/Cartographe - France hovered (cities hidden).png',
                alt: 'Map showing France highlighted',
            },
            {
                type: 'image',
                src: '/images/projects/Cartographe - Singapore hovered (cities rank 0-3).png',
                alt: 'Map showing Singapore with city ranks',
            },
            {
                type: 'image',
                src: '/images/projects/Cartographe - Panama City hovered (all cities).png',
                alt: 'Map showing Panama City',
            },
            {
                type: 'image',
                src: '/images/projects/Cartographe - Greece mesh.png',
                alt: 'Generated 3D mesh for Greece',
            },
        ],
    },
    {
        title: '2D Fluid Simulation',
        summary:
            'A vectorized 2D Eulerian fluid solver implemented for a computer animation course, following Jos Stam’s real-time fluid method. Focused on stable advection, diffusion, projection steps and performance improvements via numpy vectorization.',
        description: `My favourite assignment from McGill's Computer Animation course ([COMP 559](https://www.mcgill.ca/study/2023-2024/courses/comp-559)) was this 2D fluid simulation, featuring a grid-based Eulerian fluid solver based on Jos Stam's 2003 paper, Real-Time Fluid Dynamics for Games.

Admittedly, the simulation was a pain to implement, with non-trivial advection, diffusion, and projection steps starring Gauss-Seidel solvers, along with implementing boundary conditions. At least the rendering was already set up for us, as this was a course on computer animation, not computer graphics.

After finally achieving a working simulation, vectorizing the code via numpy made the whole thing run way faster, and the results were pretty satisfying.`,
        fromDate: 'Apr 2024',
        toDate: 'Apr 2024',
        categories: ['computer-graphics'],
        technologies: ['python', 'moderngl'],
        coverMedia: 0,
        media: [
            {
                type: 'image',
                src: '/images/projects/EFS - screenshot cropped.png',
                alt: 'Screenshot of the fluid simulation',
            },
            {
                type: 'video',
                src: '/images/projects/EFS - sink source compressed.mp4',
                alt: 'Video of the fluid simulation with a sink and source',
            },
        ],
    },
    {
        title: 'Mars Marine',
        summary:
            'A top-down wave-based Unreal Engine game made to practise level design, AI blueprints, and gameplay loop mechanics. Players survive waves of enemies, collect pickups, and manage HUD elements while AI-driven enemies use NavMesh and blueprint logic to chase and attack.',
        description: `In efforts to keep my game development skills sharp and up-to-date, I decided to hop on the Unreal Engine 5 hype train not long after its release, making a few small games to learn the core parts of the engine, like the level editor, blueprints, animation system, and UI system.

One of these games was Mars Marine, a top down, wave-based shooter where the player has to survive waves of alien enemies trying to kill them. The player can run around, shoot the aliens and collect pickups (e.g. health packs), all with the goal of surviving as many waves as possible. There's also UI in the form of a HUD, displaying the player's health, number of kills, and a wave counter.

Enemies (aliens) spawn in larger and larger numbers each wave, and will chase the player using built-in AI blueprint nodes and a NavMesh. The player is also forced to stay within a bounded play area and fight the enemies.

Learning UE5 has definitely been intense compared to Unity, but exploring such a powerful engine is definitely worth it, giving me a better sense of the game development landscape and the tools available to developers in the industry.`,
        fromDate: 'Aug 2022',
        categories: ['game-dev'],
        technologies: ['unreal'],
        coverMedia: 0,
        media: [
            {
                type: 'image',
                src: '/images/projects/MM - health pack.png',
                alt: 'Player collecting a health pack',
            },
            {
                type: 'image',
                src: '/images/projects/MM - return to play area.png',
                alt: 'Warning message to return to the play area',
            },
            { type: 'image', src: '/images/projects/MM - dead.png', alt: 'Player death screen' },
        ],
    },
    {
        title: 'Storm the Stronghold',
        summary:
            'A procedurally-generated 2D roguelike built in Unity with handcrafted level generation, A* pathfinding, and a persistent save system. Features increasing difficulty, a skill tree, and varied enemy behaviours to create replayable dungeon runs.',
        description: `A Unity game I developped back during my A-Levels, Storm the Stronghold is 2D top-down rogue-like, where the objective is to clear as many strongholds as possible before dying.

I hand-crafted a procedural level generation system that creates strongholds with forever-increasing numbers of rooms, enemies, and loot, each time uniquely layed out. Getting out of a stronghold requires finding the exit portal, which is designed to be in one of the furthest rooms from the one the player starts in. Rooms contain loot in the form of weapons, guarded by enemies of different types (melee & ranged), who will chase the player in swarms using my own implementation of the A* pathfinding algorithm.

The game also features a skill tree and leveling system, where players can spend points earned by clearing strongholds to unlock new abilities and improve their stats. It also has a local save system that allows players save and load games and have game settings persist between sessions, serializing the game state and settings to json files.`,
        fromDate: 'Sep 2021',
        toDate: 'Mar 2022',
        categories: ['game-dev'],
        technologies: ['unity'],
        repoUrl: 'https://github.com/tancredelg/storm-the-stronghold',
        coverMedia: 2,
        media: [
            {
                type: 'image',
                src: '/images/projects/STS - mid game fighting enemies with sword.png',
                alt: 'Player fighting enemies with a sword',
            },
            {
                type: 'image',
                src: '/images/projects/STS - in game entering portal room.png',
                alt: 'Player entering a portal room',
            },
            {
                type: 'image',
                src: '/images/projects/STS - in game shooting arrow.png',
                alt: 'Player shooting an arrow',
            },
            {
                type: 'image',
                src: '/images/projects/STS - skill tree.png',
                alt: 'The in-game skill tree',
            },
            {
                type: 'image',
                src: '/images/projects/STS - death screen.png',
                alt: 'The game over screen',
            },
            {
                type: 'image',
                src: '/images/projects/STS - load save screen.png',
                alt: 'The load game screen',
            },
            {
                type: 'video',
                src: '/images/projects/STS - tests video compressed.mp4',
                alt: 'Gameplay video montage',
            },
        ],
    },
    {
        title: 'Dungeon Escape',
        summary:
            'A Unity platformer where players outrun rising water and navigate hazards while collecting coins; includes collision/tilemap systems and reloadable weapons. Built to explore physics, collision layers, and responsive level design for platforming challenges.',
        description: `Dungeon Escape is a platformer I made in Unity where the player has to complete a bunch of levels by reaching the exit before the water rises and drowns them. On the way, the player has to avoid falling into spike pits or getting killed by the enemies that roam the dungeon. These enemies can be killed with a reloadable semi-automatic rifle equipped with an aiming laser. Also, the player has a second objective in collecting the coins throughout the level, which can be reached with jumps, double jumps and ladders.

Making this game taught me lots about grids and tilemaps, collision types and collision layers, animations and animation controllers/graphs, and some basic enemy behaviours.`,
        fromDate: 'Apr 2021',
        categories: ['game-dev'],
        technologies: ['unity'],
        coverMedia: 2,
        media: [
            {
                type: 'image',
                src: '/images/projects/DE - menu screen.png',
                alt: 'Main menu screen',
            },
            {
                type: 'image',
                src: '/images/projects/DE - jump shot.png',
                alt: 'Player shooting while jumping',
            },
            {
                type: 'image',
                src: '/images/projects/DE - rising water.png',
                alt: 'Water level rising in the dungeon',
            },
            {
                type: 'image',
                src: '/images/projects/DE - running in tunnel.png',
                alt: 'Player running through a tunnel',
            },
            { type: 'image', src: '/images/projects/DE - game over.png', alt: 'Game over screen' },
            {
                type: 'image',
                src: '/images/projects/DE - end screen.png',
                alt: 'Level completion screen',
            },
        ],
    },
    {
        title: 'Glitch Garden',
        summary:
            'A quick Plants vs Zombies-style tower defence in Unity, featuring lane-based gameplay, resource economy, and cross-scene persistence. Built to learn animations, UI, and game state management while prototyping enemy waves and plant mechanics.',
        description: `Glitch Garden is a quick clone of Plants vs Zombies, with the same lane-based tower defense structure. There is a basic economy system via stars (suns in PvZ) that are generated by star-making plants, and spent on planting new plants to build up your defense. This defense includes two different projectile shooters as well as a gravestone acting as a shield/wall against the enemies. The enemies are spawned from the right side of the screen, one type which moves slowly but has a lot of health, and another type which moves quickly but has less health, and can jump over gravestones.

This was a great project for learning about all sorts of things in the Unity game engine during COVID-19 lockdowns, including cross-scene persistence, animations, and the Unity UI system.`,
        fromDate: 'Jan 2021',
        categories: ['game-dev'],
        technologies: ['unity'],
        coverMedia: 0,
        media: [
            {
                type: 'image',
                src: '/images/projects/GG - mid level.png',
                alt: 'Mid-game screenshot of a level',
            },
            {
                type: 'image',
                src: '/images/projects/GG - level complete.png',
                alt: 'Level complete screen',
            },
            { type: 'image', src: '/images/projects/GG - game over.png', alt: 'Game over screen' },
        ],
    },
]
