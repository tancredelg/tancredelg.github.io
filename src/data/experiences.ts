export interface ExperienceProps {
    company: {
        name: string
        url: string // URL to the company/organization's website
        logo?: {
            src: string // Source URL of the image
            alt?: string // Alternative text for the image, optional
        }
    }
    positions: {
        title: string // Title of the role/position
        description: string
        fromDate: string // Start date of the position, formatted as `Mon YYYY`
        toDate?: string // End date of the position, formatted as `Mon YYYY`, optional (for ongoing positions)
        technologies?: string[] // Technologies used in the position, e.g., ['js', 'react', 'tailwind', 'unreal']
    }[]
}

export const experiences: ExperienceProps[] = [
    {
        company: {
            name: 'McGill Robotics',
            url: 'https://mcgillrobotics.com',
            logo: {
                src: 'src/assets/mcgill-robotics-logo.png',
                alt: 'McGill Robotics Logo',
            },
        },
        positions: [
            {
                title: 'AUV Software Engineer',
                description: `As part of the AUV (Autonomous Underwater Vehicle) team, I refactored our Docker-containerized Unity simulation, reducing frame times by ~50%. I also initiated a documentation overhaul for better onboarding and contributed to migrating our project from ROS 1 to ROS 2.`,
                fromDate: 'Sep 2024',
                toDate: 'Jun 2025',
            },
        ],
    },
    {
        company: {
            name: 'McGill Computational Genomics Lab',
            url: 'https://cs.mcgill.ca/~blanchem',
        },
        positions: [
            {
                title: 'Honours Research Project',
                description: `Investigated generative Flow Matching models, focusing on Acceleration Flow Matching (AFM) implemented in PyTorch. I analyzed its advantages over standard Flow Matching through comparative experiments and authored a report on the methodology, results, and potential applications.`,
                fromDate: 'Jan 2025',
                toDate: 'Apr 2025',
            },
        ],
    },
]
