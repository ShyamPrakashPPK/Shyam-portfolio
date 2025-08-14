
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
        title: 'Quazma Web Platform',
        techStack: 'Next.js, Tailwind CSS',
        imageUrl: '/images/quazma.png',
        href: 'https://www.quazma.com/',
        description: 'Quazma is a website for a web platform in Dubai. It is a simple website that allows the user to view the products and add them to the cart. It is a responsive website that is designed to be used on any device.',
        type: 'client',
    },
    {
        id: 9,
        title: 'Photo Storage App',
        techStack: 'Next.js, React, Tailwind CSS, Supabase',
        imageUrl: '/images/photoapp.png',
        href: 'https://photo-store-nextjs-supabase-x6vj.vercel.app/',
        githubLink: 'https://github.com/ahmed-el-hady/photo-store-nextjs-supabase',
        description: 'Photo Storage App is a website for a photo storage app in Dubai. It is a simple website that allows the user to view the products and add them to the cart. It is a responsive website that is designed to be used on any device.',
        type: 'personal',
    },
    {
        id: 10,
        title: 'EnteNews Notes App',
        techStack: 'Next.js, React, Tailwind CSS, Node js, Express js',
        imageUrl: '/images/entenotes.png',
        href: 'https://entenotes.vercel.app/',
        githubLink: 'https://github.com/ahmed-el-hady/ente-news',
        description: 'Ente notes helps you to create your persona notes and collab with friends',
        type: 'personal',
    },
    {
        id: 11,
        title: 'EnteNews News App',
        techStack: 'Next.js, React, Tailwind CSS, Hacker News API',
        imageUrl: '/images/entenews.png',
        href: 'https://ente-news.vercel.app/',
        githubLink: 'https://github.com/ahmed-el-hady/ente-news',
        description: 'EnteNews is a website for a news app in Dubai. It is a simple website that allows the user to view the products and add them to the cart. It is a responsive website that is designed to be used on any device.',
        type: 'personal',
    },
    {
        id: 12,
        title: 'Together Corporation Website',
        techStack: 'Next.js, React, Tailwind CSS',
        imageUrl: '/images/togethered.png',
        href: 'https://togethercorporationsite.vercel.app/',
        githubLink: 'https://github.com/ahmed-el-hady/together-corporation-site',
        description: 'Together Corporation Website is a website for a corporation in Dubai. It is a simple website that allows the user to view the products and add them to the cart. It is a responsive website that is designed to be used on any device.',
        type: 'client',
    },
];





