
export interface IProjectSectionCardData {
    id: number;
    imageUrl?: string;
    icon?: string;
    title: string;
    techStack: string;
    href?: string;
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
        techStack: 'React, Next.js, Node.js, MongoDB',
        imageUrl: 'images/freshmarket.png',
        href: 'https://www.thefreshmarketdubai.com/',
    },
    {
        id: 2,
        title: 'Sidco Foods (Dubai)',
        techStack: 'React, Node.js, Express.js, MongoDB',
        imageUrl: 'images/sidcofoods.png',
        href: 'https://www.sidcofoods.ae/',
    },
    {
        id: 3,
        title: 'Mattressland (Dubai)',
        techStack: 'React, Node.js, Express.js, MongoDB',
        imageUrl: 'images/mattressland.png',
        href: 'https://mattressland.ae/',
    },
    {
        id: 4,
        title: 'AlErshad Computer Group',
        techStack: 'React, Node.js, MongoDB',
        imageUrl: 'images/alershad.png',
        href: 'https://www.alershadonline.com/',
    },
    {
        id: 5,
        title: 'MamaMe (Iraq)',
        techStack: 'React, Node.js, MongoDB',
        imageUrl: 'images/mamame.png',
        href: 'https://www.mamame.iq/',
    },
    {
        id: 6,
        title: 'VPerfume (Dubai)',
        techStack: 'React, Node.js, Express.js, MongoDB',
        imageUrl: 'images/vperfume.png',
        href: 'https://www.vperfumes.com/',
    },
    {
        id: 7,
        title: 'Growday (TogetherEd SaaS)',
        techStack: 'Next.js, React, Tailwind CSS, Redux Toolkit',
        imageUrl: 'images/growday.png',
        href: '', // No live link provided
    },
    {
        id: 8,
        title: 'Quazma Web Platform',
        techStack: 'Next.js, Tailwind CSS',
        imageUrl: 'images/quazma.png',
        href: 'https://www.quazma.com/',
    },
    {
        id: 9,
        title: 'Photo Storage App',
        techStack: 'Next.js, React, Tailwind CSS, Supabase',
        imageUrl: 'images/photoapp.png',
        href: 'https://photo-store-nextjs-supabase-x6vj.vercel.app/',
    },
    {
        id: 10,
        title: 'EnteNews News App',
        techStack: 'Next.js, React, Tailwind CSS, Hacker News API',
        imageUrl: 'images/entenews.png',
        href: 'https://ente-news.vercel.app/',
    },
    {
        id: 11,
        title: 'Together Corporation Website',
        techStack: 'Next.js, React, Tailwind CSS',
        imageUrl: 'images/togethered.png',
        href: 'https://togethercorporationsite.vercel.app/',
    },
];



export const websitecards: WebsiteCardData[] = [
    {
        id: 1,
        title: 'Together Corporation Website',
        imageUrl: 'images/togethered.png',
        techStack: 'Next js, React, Tailwind css',
        href: 'https://togethercorporationsite.vercel.app/',
    },
    {
        id: 2,
        title: 'Bitnow',
        imageUrl: 'images/bitnow.png',
        techStack: 'Next js, React, Tailwind css',
        href: 'https://bitnowtask.vercel.app/',
    },

];


