import Image from 'next/image'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import MyExperience from './components/MyExperience'
import EmailSection from './components/EmailSection'
import ProjectCardSection from './components/ProjectCardSection'

import { projectCard } from './components/utils/data'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar/>
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <ProjectCardSection title="Projects" data={projectCard} />
        <MyExperience />
        <EmailSection/>
        </div>
    </main>
  )
}
