"use client" // this is a client component
import React from "react"
import Image from "next/image"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"
import { AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai"

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <Image
            src="/foto-perfil.jpeg"
            alt=""
            width={325}
            height={325}
            className="rounded-full shadow-2xl"
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">Olá, sou o Matheus!</h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            Um{" "}
            <span className="font-semibold text-teal-600">
              Desenvolvedor Full Stack{" "}
            </span>

            que trabalha para criar softwares inovadores que desafiem a minha lógica de programação.
          </p>
          <div className="my-10 flex flex-row ">
            <a href="https://github.com/matheusrgg" rel="noreferrer" target="_blank">
              <AiOutlineGithub
                className="mr-4 hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
                size={30}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/matheusrgg/"
              rel="noreferrer"
              target="_blank"
            >
              <AiOutlineLinkedin
                className="mx-4 hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
                size={30}
              />
            </a>
            <a
              href="https://www.instagram.com/projetonaweb/"
              rel="noreferrer"
              target="_blank"
            >
              <AiOutlineInstagram
                className="mx-4 hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
                size={30}
              />
            </a>
          </div>
          <Link
            to="projects"
            className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Projetos
          </Link>
        </div>
      </div>
      {/* <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div> */}
    </section>
  )
}

export default HeroSection
