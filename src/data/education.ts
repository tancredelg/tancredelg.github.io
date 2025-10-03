export interface EducationProps {
    institution: {
        name: string // Name of the institution
        url: string // URL to the institution's website
        logo?: {
            src: string // Source URL of the image
            alt?: string // Alternative text for the image, optional
        }
    }
    degree: string // Degree title
    fromDate: string
    toDate: string // If ongoing => expected graduation date
    description: string
}

export const education: EducationProps[] = [
    {
        institution: {
            name: 'EPFL',
            url: 'https://www.epfl.ch',
            logo: {
                src: 'src/assets/epfl-logo-cropped.png',
                alt: 'EPFL Logo',
            },
        },
        degree: 'MSc - Robotics',
        fromDate: 'Sep 2025',
        toDate: 'Dec 2027 (expected)',
        description: `The next chapter! I've just started my Master's in Robotics at EPFL, specializing in mobile robotics and intelligent systems. I'm excited to be diving into core topics like model predictive control, reinforcement learning, and computer vision, and can't wait to tackle the hands-on research projects ahead.`,
    },
    {
        institution: {
            name: 'McGill University',
            url: 'https://www.mcgill.ca',
            logo: {
                src: 'src/assets/mcgill-logo-s.jpg',
                alt: 'McGill University Logo',
            },
        },
        degree: 'BSc - Honours Computer Science',
        fromDate: 'Aug 2022',
        toDate: 'May 2025',
        description: `I graduated with First-Class Honours (3.85 GPA), dipping my toes in various advanced topics like Machine Learning, Computer Animation, Computational Biology, and Distributed Systems. Outside of class, I was heavily involved in <a href="https://www.mcgillrobotics.ca" target="_blank">McGill Robotics</a>, <a href="https://gamedevmcgill.ca/" target="_blank">GameDev McGill</a>, and competed in hackathons like <a href="https://mchacks.ca/" target="_blank">McHacks</a> and <a href="https://www.linkedin.com/company/pharmahacks/about/" target="_blank">PharmaHacks</a>.`,
    },
    {
        institution: {
            name: 'Epsom College',
            url: 'https://www.epsomcollege.org.uk/',
            logo: {
                src: 'src/assets/epsom-college-logo-s.jpg',
                alt: 'Epsom College Logo',
            },
        },
        degree: 'A-Levels (CS, Math, Phys) & GCSEs',
        fromDate: 'Sep 2017',
        toDate: 'Jun 2022',
        description: `My secondary education in the UK, where I earned Art and Computer Science awards, laid the groundwork for my technical and creative interests. Beyond academics, I was active in the school's tennis and field hockey teams, and completed my Duke of Edinburgh's Award.`,
    },
]
