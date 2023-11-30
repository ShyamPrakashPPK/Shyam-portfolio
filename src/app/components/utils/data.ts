
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
        id: 3,
        title: 'Task manager',
        techStack:
            'NodeJs, Express, Mongoose, Angular,, HTML, CSS',
        imageUrl: 'images/taskmanager.png',
        href: 'https://github.com/ShyamPrakashPPK/Task_Manager',
    },
    {
        id: 4,
        title: 'Netflix clone',
        techStack: 'Angular, Html, Css, ',
        imageUrl: 'images/netflixclone.jpg',
        href: 'https://github.com/ShyamPrakashPPK/Netflix-Clone-Angular',
    },
];



