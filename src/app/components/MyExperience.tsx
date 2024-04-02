import React from 'react'


const Experience = [
    {
        key: 1,
        position: 'Frontend developer',
        company: 'TogetherED Corporation',
        location: 'Washington, USA',
        duration: 'January 2024 - Present',
        description: `Working remotely on various full stack projects`,
    },
    {
        key: 2,
        position: 'Full stack developer',
        company: 'Quazma Techno Solutions',
        location: 'Indore, MP ',
        duration: 'July 2023 - December 2023',
        description: `Working remotely on various full stack projects`,
    },
    {
        key: 3,
        position: 'MEAN Stack developer Intern',
        company: 'Brototype',
        location: 'Kochi, Kerala ',
        duration: 'Angust 2022 - July 2023',
        description: `Worked using Angular, Node js, Express js, Mongo DB`,
    },
    {
        key: 4,
        position: 'Freelance Developer',
        company: '',
        location: '',
        duration: 'November 2021 - August 2022',
        description: `Working remotely on various projects using HTML, CSS and Javascript`,
    }
]

const MyExperience = () => {
    return (
        <section className='relative isolate '>
            <div
                className="hidden md:flex absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
                aria-hidden="true"
            >
                <div
                    className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#ff8080] to-[#e54656] opacity-20"
                    style={{
                        clipPath:
                            'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
                    }}
                />
            </div>
            <div className='flex flex-col items-center gap-10'>
         
            
                <h1 className=" mt-20 text-6xl text-center p-10 font-extrabold  text-transparent bg-clip-text bg-gradient-to-l from-primary-400 to-secondary-600">My Work Experience</h1>
                {Experience.map(exp => (
                    <div key={exp.key} className='bg-[#181818] w-3/4 md:w-3/5 lg:w-2/6 rounded-lg p-10 transition ease-in delay-250 hover:-translate-y-2 hover:scale-110'>
                        <h1 className='p-3 text-2xl font-extrabold'>{exp.position}</h1>
                        <h3 className='px-3 text-xl font-bold'>{exp.company}</h3>
                        <h3 className='px-3 text-lg font-semibold'>{exp.location}</h3>
                        <h3 className='px-3 text-lg font-semibold'>{exp.duration}</h3>
                        <h3 className='p-3 '>{exp.description}</h3>
                    </div>
                ))}

            </div>
            <div
                className="hidden md:flex absolute right-[calc(50%-4rem)] bottom-10 -z-10 transform-gpu blur-3xl sm:right-[calc(50%-18rem)] lg:right-48 lg:bottom-[calc(50%-30rem)] xl:right-[calc(50%-24rem)]"
                aria-hidden="true"
            >
                <div
                    className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-l from-primary-400 to-secondary-600 opacity-10"
                    style={{
                        clipPath:
                            'polygon(73.6% 1.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
                    }}
                />
            </div>
   
        </section>
    )
}

export default MyExperience
