"use client"

import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"
import React, { useState } from 'react';


const ProjectTwo = () => {
    const [activeTab, setActiveTab] = useState(0);

    const tabContent = [
        {
            title: 'Corporativa',
            content: [
                {
                    heading: 'IBM',
                    Data: '07/10/2022 - Até o momento',
                    img: '/projects/logo-ibm.png',
                    description: 'Trabalhei na área de consultoria, como desenvolvedor Frontend alocado em um banco, aqui diferente da outra empresa tive a oportunidade de colocar minhas soft skills mais em prática acredito que pode ser por que a equipe é maior e o trabalho é presencial, tirei diversas certificações cheguei a fazer apresentações para mais de 50 pessoas sobre a iniciativa de onbaording . Usei as seguintes tecnologias Angular, GraphQL, Typescript, SonarQube, Jasmine, Karmine',
                    tecnologia: 'Angular, Typescript e GraphQL'
                },
                {
                    heading: 'Ernst & Young',
                    Data: '07/10/2022 - Até o momento',
                    img: '/projects/logo-esy.png',
                    description: 'Tive a oportunidade de trabalhar com na área de consultoria,como desenvolvedor Frontend  fui alocado em uma empresa de energia, onde desenvolvemos uma aplicação web, usando as seguintes tecnologias Angular, Typescript, Integrações de Api`s, Teste Unitário, Jasmine e Karma, Componentes Responsivos, Ionic, SonarQube, Sonar Scanner, OAuth2.0, JWT, SASS, Teste de Integração. Lembrei que tive a oportunidade tb de fazer uma apresentação da plataforma para o cliente',
                    tecnologia: 'Angular, Typescript, IONIC'
                },
            ]
        },
        {
            title: 'Emprendedor',
            content: [
                {
                    heading: 'Ok Park',
                    Data: '05/12/2019',
                    img: '/projects/logookpark.png',
                    description: 'Meu primeiro freela, tive a oportunidade de fazer um site para a empresa de estacionamento do meu tio, usando html, javascript e bootstrap! Foi muito bacana pq eu criei todo o design do site. Hoje olhando vejo q mudaria bastante coisa, más foi um ótimo começo.',
                    tecnologia: 'HTML e Bootstrap'
                },
                {
                    heading: 'Metodo Consultoria',
                    Data: '05/03/2021 - 10/05/2021',
                    img: '/projects/metodoconsultoria.png',
                    description: 'Foi uma plataforma web que fiz em Php e Wordpress para uma empresa de Treinamento ele tb foi totalmente customiza, elaboramos logo, icone , imagens e paleta de cores, totalmente novos. ALém disso com alguns plugins do wordpress fizemos algumas atividade para treinamento dinämico, ficou bem legal!',
                    tecnologia: 'Wordpress, MySQL e Php'
                },
                {
                    heading: 'Enertu',
                    Data: '17/08/2023 - Até o momento',
                    img: '/projects/logo.svg',
                    description: 'Um projeto que comecei a trabalhar recentemente sobre gestão compartilhada de energia usando placa solar , tipo um buscapé com anúncios, bem interesssante.',
                    tecnologia: 'React, Next e Node'
                },

            ]
        },
        {
            title: 'Pessoais',
            content: [
                {
                    heading: 'Calculadora CDI',
                    Data: '07/10/2022 - Até o momento',
                    img: '',
                    description: 'Description 1 for Pessoais',
                    tecnologia: 'React, Next e Node'
                },
                {
                    heading: 'Heading 2',
                    Data: '07/10/2022 - Até o momento',
                    img: '',
                    description: 'Description 2 for Pessoais',
                    tecnologia: 'React, Next e Node'
                },

            ]
        }
    ];

    return (



        <div className="flex flex-col items-center justify-center min-h-screen" id="projects">
            <h1 className="my-10 text-center font-bold text-4xl">
                Projects
                <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
            </h1>
            <div className="w-full  bg-white p-6 rounded-lg shadow-lg">
                <div className="flex">
                    {tabContent.map((tab, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveTab(index)}
                            className={`flex-1 px-4 py-2 text-center ${activeTab === index ? 'bg-blue-500 text-white' : 'bg-gray-300'
                                }`}
                        >
                            {tab.title}
                        </button>
                    ))}
                </div>
                <div className="mt-4">

                    <h2 className="text-xl font-semibold my-8">{tabContent[activeTab].title}</h2>

                    {tabContent[activeTab].content.map((item, index) => (
                        <div key={index} className="mt-2 my-8 flex items-center justify-center"> {/* Center content vertically and horizontally */}

                            {/* ----------bloco imagem */}
                            <div className="w-32">
                                <Image
                                    src={item.img}
                                    alt=""
                                    width={100}
                                    height={100}
                                    className="hidden md:block md:relative mx-auto" // Center image horizontally
                                />
                            </div>

                            {/* ----------bloco text */}
                            <div className="ml-2 flex-auto w-64 flex-col justify-center">
                                <h3 className="font-semibold">{item.heading}</h3>
                                <p className="mb-2 text-neutral-600 dark:text-neutral-400">{item.Data} </p>
                                <p>{item.description}</p>
                                <p>{item.tecnologia}</p>
                            </div>

                        </div>
                    ))}

                </div>


            </div>
        </div>
    );
};


export default ProjectTwo
