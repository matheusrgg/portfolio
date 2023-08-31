import React from "react"
import Image from "next/image"

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "Node" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "MySql" },
  { skill: "Postgress" },
  { skill: "Angular" },
  { skill: "Wordpress" },
  { skill: "Karma & Jasmine" },
  { skill: "Php" },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          Sobre
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Venha me conhecer!
            </h1>
            <p>
              Olá, meu nome  é Matheus, sou um programador {" "}
              <span className="font-bold">{"programador autodidata"}</span>,
              formado em Adminstração pelo Mackenize e Desenvolvimento Web Full
              Stack pela Digital House.
            </p>
            <br />
            <p>
              Comecei a me interessar por desenvolvimento web no final de 2018 no
              último semestre da faculdade de negócios. Desde então venho tendo
              a oportunidade de trabalhar com ótimos programadores, designers ,
              gestores e executivos.
              Confira alguns projetos em que trabalhei clicando aqui.
            </p>
            <br />
            <p>
              No meu tempo livre gosto bastante de praticar exericios como
              jogar Tenis  e ler. Os meus livros favoritos são os livros são
              do Ken Follet, Mario Puzo E sCOTT Fitzgerald na área de TI gosto
              bastante dos livros Clean Code e  Eloquent Javascript.
            </p>
            <br />
            <p>

              Valorizo bastante um espaço dinâmico de trabalho que valoriza a
              diversidade e preza pela organização de código.
              Busco projetos que desafiem minha lógica de programação e
              desenvolver soluções escaláveis e de alta qualidade.
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold z-20"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            <Image
              src="/heroprogrammer.jpg"
              alt=""
              width={325}
              height={325}
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
