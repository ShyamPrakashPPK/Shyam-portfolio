
export interface IProjectSectionCardData {
    id: number;
    imageUrl?: string;
    icon?: string;
    title: string;
    techStack: string;
    href?: string;
}

export const projectCard: IProjectSectionCardData[] = [
    {
        id: 1,
        title: 'KickIt - Ecommerce website',
        techStack: 'Handlebars, Nodejs, Express js, HTML5, CSS3',
        imageUrl: 'images/kickit.png',
        href: 'https://github.com/ShyamPrakashPPK/KickIt',
    },
    {
        id: 2,
        title: 'Study Group',
        techStack:
            'MEAN stack, Angular, Node js, Express js, Tailwind css',
        imageUrl: 'images/studygroup.png',
        href: 'https://github.com/ShyamPrakashPPK/StudyGroup-FrontEnd',
    },
    {
        id: 5,
        title: 'Photo Storage App',
        techStack: 'Next js, React, Tailwind css, Supabase',
        imageUrl: 'images/photoapp.png',
        href: 'https://photo-store-nextjs-supabase-x6vj.vercel.app/',
    },
    {
        id: 6,
        title: 'EnteNews News App',
        techStack: 'Next js, React, Tailwind css, Hacker News API',
        imageUrl: 'images/entenews.png',
        href: 'https://ente-news.vercel.app/',
    },
 

];



