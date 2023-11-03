import React from 'react'


const Experience = [
    {
        key: 1,
        position: 'Full stack developer',
        company: 'Quazma Techno Solutions',
        location: 'Indore, MP ',
        duration: 'July 2023 - Present',
        description: `Working remotely on various full stack projects`,
    },
    {
        key: 2,
        position: 'MEAN Stack developer Intern',
        company: 'Brototype',
        location: 'Kochi, Kerala ',
        duration: 'Angust 2022 - July 2023',
        description: `Worked using Angular, Node js, Express js, Mongo DB`,
    },
    {
        key: 3,
        position: 'Freelance Developer',
        company: '',
        location: '',
        duration: 'November 2021 - August 2022',
        description: `Working remotely on various projects using HTML, CSS and Javascript`,
    }
]

const MyExperience = () => {
    return (
        <section>
            <div className='flex flex-col items-center gap-10'>
                <h1 className="mt-20 text-6xl text-center p-10 font-extrabold  text-transparent bg-clip-text bg-gradient-to-l from-primary-400 to-secondary-600">My Work Experience</h1>
                {Experience.map(exp => (
                    <div key={exp.key} className='bg-[#181818] w-96 rounded-lg p-10'>
                        <h1 className='p-3 text-2xl font-extrabold'>{exp.position}</h1>
                        <h3 className='px-3 text-xl font-bold'>{exp.company}</h3>
                        <h3 className='px-3 text-lg font-semibold'>{exp.location}</h3>
                        <h3 className='px-3 text-lg font-semibold'>{exp.duration}</h3>
                        <h3 className='p-3 '>{exp.description}</h3>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default MyExperience
