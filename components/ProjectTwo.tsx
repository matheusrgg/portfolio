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
                    img: '/logo-ibm.png',
                    description: 'Description 1 for Corporativa'
                },
                {
                    heading: 'Ernst & Young',
                    Data: '07/10/2022 - Até o momento',
                    img: '/logo-esy.png',
                    description: 'Description 2 for Corporativa'
                },
            ]
        },
        {
            title: 'Emprendedor',
            content: [
                {
                    heading: 'Ok Park',
                    Data: '07/10/2022 - Até o momento',
                    img: '',
                    description: 'Description 1 for Emprendedor'
                },
                {
                    heading: 'Metodo Consultoria',
                    Data: '07/10/2022 - Até o momento',
                    img: '',
                    description: 'Description 2 for Emprendedor'
                },
                {
                    heading: 'Enertu',
                    Data: '07/10/2022 - Até o momento',
                    img: '',
                    description: 'Description 2 for Emprendedor'
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
                    description: 'Description 1 for Pessoais'
                },
                {
                    heading: 'Heading 2',
                    Data: '07/10/2022 - Até o momento',
                    img: '',
                    description: 'Description 2 for Pessoais'
                },

            ]
        }
    ];

    return (



        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="my-10 text-center font-bold text-4xl">
                Projects
                <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
            </h1>
            <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg">
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
                        <div key={index} className="mt-2 my-8 flex ">
                            {/* ----------bloco imagem */}
                            <div>
                                <Image
                                    src={item.img}
                                    alt=""
                                    width={100}
                                    height={100}
                                    className="hidden md:block md:relative"
                                />
                            </div>
                            {/* ----------bloco text */}
                            <div className="ml-2 flex flex-col justify-center">
                                <h3 className="font-semibold">{item.heading}</h3>
                                <p className=" mb-2 text-neutral-600 dark:text-neutral-400">{item.Data} </p>
                                <p>{item.description}</p>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};


export default ProjectTwo
