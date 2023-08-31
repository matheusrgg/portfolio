import AboutSection from "@/components/AboutSection"
import Certificates from "@/components/Certificates"
import HeroSection from "@/components/HeroSection"
import ProjectTwo from "@/components/ProjectTwo"

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <HeroSection />
      <AboutSection />
      <Certificates />
      <ProjectTwo />
    </main>
  )
}
