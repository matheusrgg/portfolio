"use client" // this is a client component
import Image from "next/image"

const Certificates = () => {
    const certificates = [
        {
            title: 'Amazon Cloud Practitioner',
            durantion: '',
            description: 'Curso da Amazon para testar os conhecimentos dos serviços e Produtos da AWS',
            logo: '',
        },
        {
            title: 'Digital House - Fullstack',
            durantion: '',
            description: 'Curso da Amazon para testar os conhecimentos dos serviços e Produtos da AWS',
            logo: '',
        },
        {
            title: 'Mackenzie - Adminstração de Empresas',
            durantion: '',
            description: 'Curso da Amazon para testar os conhecimentos dos serviços e Produtos da AWS',
            logo: '',
        },
        {
            title: 'RocketSeat - Ignite Node',
            durantion: '',
            description: 'Curso da Amazon para testar os conhecimentos dos serviços e Produtos da AWS',
            logo: '',
        },
        {
            title: 'Loiane - Angular',
            durantion: '',
            description: 'Curso da Amazon para testar os conhecimentos dos serviços e Produtos da AWS',
            logo: '',
        },
        {
            title: 'Toefle',
            durantion: '',
            description: 'Curso da Amazon para testar os conhecimentos dos serviços e Produtos da AWS',
            logo: '',
        },
        {
            title: 'Scrum Fundamentals',
            durantion: '',
            description: 'Curso da Amazon para testar os conhecimentos dos serviços e Produtos da AWS',
            logo: '',
        },
    ]
    return (
        <section id="certificates">
            <div className=" min-h-screen" id="projects">
                <h1 className="text-center font-bold text-4xl">
                    Certificados
                    <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
                </h1>

                <div className="grid grid-cols-3 gap-4 p-5 bg-lightgrey">
                    {
                        certificates.map((item, index) => (
                            <div key={index} className="  flex rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                                <Image src="/certificates/digitalhouselogo.png" alt="" width={150} height={75} className="flex-shrink-0" />
                                <div className="flex flex-col justify-center ml-2">
                                    <h5 className="mb-2 font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                                        {item.title}
                                    </h5>
                                    <p className=" mb-2 text-sm text-neutral-600 dark:text-neutral-400">20/08/2021 -22/09/2023 </p>

                                </div>
                            </div>
                        ))
                    }




                </div>









            </div>
        </section>
    )
}

export default Certificates
