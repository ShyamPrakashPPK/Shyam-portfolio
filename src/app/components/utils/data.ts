
export interface IProjectSectionCardData {
    id: number;
    imageUrl?: string;
    icon?: string;
    title: string;
    techStack: string;
    href?: string;
    githubLink?: string;
    description?: string;
    type: 'personal' | 'client';
}


export interface WebsiteCardData {
    id: number;
    imageUrl?: string;
    title: string;
    techStack: string;
    href?: string;
}





export const projectCard: IProjectSectionCardData[] = [
    {
        id: 0,
        title: 'Iprocure AI',
        techStack: 'React, Next.js, Node.js, MongoDB, Express js',
        imageUrl: '/images/projects/iprocure.png',
        href: 'https://agentic.iprocure.ai/',
        description: 'Iprocure AI is an AI agentic platform for procurement in UAE. It has both agentic and non-agentic features. for listing products, searching for products, and bidding for products.',
        type: 'client',
    },
    {
        id: 1,
        title: 'The Fresh Market (Dubai)',
        techStack: 'React, Next.js, Node.js, MongoDB, Express js',
        imageUrl: '/images/freshmarket.png',
        href: 'https://www.thefreshmarketdubai.com/',
        description: 'The Fresh Market is a website for a grocery store in Dubai. It is a simple website that allows the user to view the products and add them to the cart. It is a responsive website that is designed to be used on any device.',
        type: 'client',
    },
    {
        id: 2,
        title: 'Dizad',
        techStack: 'Next js, React, Node.js, Express.js, MongoDB',
        imageUrl: '/images/dzd.png',
        href: 'https://dzd-01-dev.dev.storedada.net/ar',
        description: 'Sidco Foods is a website for a food store in Dubai. It is a simple website that allows the user to view the products and add them to the cart. It is a responsive website that is designed to be used on any device.',
        type: 'client',
    },
    {
        id: 3,
        title: 'Sidco Foods (Dubai)',
        techStack: 'React, Node.js, Express.js, MongoDB',
        imageUrl: '/images/sidcofoods.png',
        href: 'https://sidco-01-dev.dev.storedada.net/ar',
        description: 'Sidco Foods is a website for a food store in Dubai. It is a simple website that allows the user to view the products and add them to the cart. It is a responsive website that is designed to be used on any device.',
        type: 'client',
    },
    {
        id: 4,
        title: 'Mattressland (Dubai)',
        techStack: 'React, Node.js, Express.js, MongoDB',
        imageUrl: '/images/mattressland.png',
        href: 'https://mattressland.ae/',
        description: 'Mattressland is a website for a mattress store in Dubai. It is a simple website that allows the user to view the products and add them to the cart. It is a responsive website that is designed to be used on any device.',
        type: 'client',
    },
    {
        id: 5,
        title: 'AlErshad Computer Group',
        techStack: 'Next js, Express js, React, Node.js, MongoDB',
        imageUrl: '/images/alershad.png',
        href: 'https://www.alershadonline.com/',
        description: 'AlErshad Computer Group is a website for a computer store in Dubai. It is a simple website that allows the user to view the products and add them to the cart. It is a responsive website that is designed to be used on any device.',
        type: 'client',
    },
    {
        id: 6,
        title: 'MamaMe (Iraq)',
        techStack: 'Next js, React, Node.js, MongoDB',
        imageUrl: '/images/mamame.png',
        href: 'https://www.mamame.iq/',
        description: 'MamaMe is a website for a baby store in Iraq. It is a simple website that allows the user to view the products and add them to the cart. It is a responsive website that is designed to be used on any device.',
        type: 'client',
    },
    {
        id: 7,
        title: 'VPerfume (Dubai)',
        techStack: 'React, Node.js, Express.js, MongoDB',
        imageUrl: '/images/vperfume.png',
        href: 'https://www.vperfumes.com/',
        description: 'VPerfume is a website for a perfume store in Dubai. It is a simple website that allows the user to view the products and add them to the cart. It is a responsive website that is designed to be used on any device.',
        type: 'client',
    },
    {
        id: 8,
        title: 'Eunoiraw Wellness',
        techStack: 'Next.js, React, Tailwind CSS',
        imageUrl: '/images/projects/eunoirawellness.png',
        href: 'https://www.eunoirawellness.com/',
        description: 'Eunoiraw Wellness is a website for a wellness center in Kerala, India. It is a simple website that allows the user to view the services and book an appointment. It is a responsive website that is designed to be used on any device.',
        type: 'client',
    },
    {
        id: 9,
        title: 'Upvox Creative',
        techStack: 'Next.js, React, Tailwind CSS',
        imageUrl: '/images/projects/upvox.png',
        href: 'https://www.upvoxcreative.com/',
        description: 'Upvox Creative is a website for a creative agency in Kerala. It is a simple website that allows the user to view the services and contact the agency. It is a responsive website that is designed to be used on any device.',
        type: 'client',
    },
    {
        id: 10,
        title: 'Aureon Relocations, Dubai',
        techStack: 'Next.js, Tailwind CSS',
        imageUrl: '/images/projects/aureon.png',
        href: 'https://www.aureonrelocations.com/',
        description: 'Aureon Relocations is a website for a relocation company in Dubai. It is a simple website that allows the user to view the services and contact the company. It is a responsive website that is designed to be used on any device.',
        type: 'client',
    },
    {
        id: 11,
        title: 'EnteNews Notes App',
        techStack: 'Next.js, React, Tailwind CSS, Node js, Express js',
        imageUrl: '/images/entenotes.png',
        href: 'https://entenotes.vercel.app/',
        githubLink: 'https://github.com/ahmed-el-hady/ente-news',
        description: 'Ente notes helps you to create your persona notes and collab with friends',
        type: 'personal',
    },
    {
        id: 12,
        title: 'EnteNews News App',
        techStack: 'Next.js, React, Tailwind CSS, Hacker News API',
        imageUrl: '/images/entenews.png',
        href: 'https://ente-news.vercel.app/',
        githubLink: 'https://github.com/ahmed-el-hady/ente-news',
        description: 'EnteNews is a website for a news app in Dubai. It is a simple website that allows the user to view the products and add them to the cart. It is a responsive website that is designed to be used on any device.',
        type: 'personal',
    },
    {
        id: 13,
        title: 'Quazma Web Platform',
        techStack: 'Next.js, Tailwind CSS',
        imageUrl: '/images/quazma.png',
        href: 'https://www.quazma.com/',
        description: 'Quazma is a website for a web platform in Dubai. It is a simple website that allows the user to view the products and add them to the cart. It is a responsive website that is designed to be used on any device.',
        type: 'client',
    },
    {
        id: 14,
        title: 'Together Corporation Website',
        techStack: 'Next.js, React, Tailwind CSS',
        imageUrl: '/images/togethered.png',
        href: 'https://togethercorporationsite.vercel.app/',
        githubLink: 'https://github.com/ahmed-el-hady/together-corporation-site',
        description: 'Together Corporation Website is a website for a corporation in Dubai. It is a simple website that allows the user to view the products and add them to the cart. It is a responsive website that is designed to be used on any device.',
        type: 'client',
    },
];







export const Experience = [
    {
        key: 0,
        position: 'Full Stack Lead Developer',
        company: 'Zedexel',
        location: 'UAE (Remote)',
        duration: 'August 2025 – Present',
        description: `Lead end to end development of Multiple ERP and CRM systems for clients in UAE and IndiaTechnologies: React, Next.js, Node.js, Express.js, MongoDB.`,
    },
    {
        key: 1,
        position: 'Full-stack Developer',
        company: 'Webcastle Media',
        location: 'Kochi, Kerala',
        duration: 'July 2024 – July 2025',
        description: `Working on our ecommerce service product used by over 10 clients with 2000+ vendors, 9000+ products, and 100k+ users. Technologies: React, Next.js, Angular, Redux, Node.js, Express.js, MongoDB.`,
    },
    {
        key: 2,
        position: 'Frontend Developer',
        company: 'TogetherEd',
        location: 'Washington DC, USA (Remote)',
        duration: 'February 2024 – July 2024',
        description: `Worked on Growday, a SaaS platform. Contributed to React and Next.js projects using Tailwind CSS, Node.js, APIs, and Vercel.`,
    },
    {
        key: 3,
        position: 'Full Stack Developer',
        company: 'Quazma Techno Solutions',
        location: 'Indore, MP, India (Remote)',
        duration: 'July 2023 – January 2024',
        description: `Built modular SPAs with Angular and React. Ensured responsive UI and integrated Vercel deployment. Stack included Angular, Next.js, Tailwind CSS, Node.js.`,
    },
    {
        key: 4,
        position: 'Full Stack Developer Intern',
        company: 'Brototype',
        location: 'Kochi, Kerala',
        duration: 'August 2022 – July 2023',
        description: `Developed Angular-based SPAs using the MEAN stack. Took ownership of projects and applied responsive design principles.`,
    }
];