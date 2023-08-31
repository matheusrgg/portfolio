"use client" // this is a client component
import Image from "next/image"

const Certificates = () => {
    const tabContent = [
        {
            title: 'Amazon Cloud Practitioner',
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

                <h1>Div com conteúdos</h1>



                <div
                    className="
                    flex
                 
                    rounded-lg
                     bg-white 
                     p-6 
                     shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]
                      dark:bg-neutral-700
                      
                      "
                >
                    <Image

                        src="/certificates/digitalhouselogo.png"
                        alt=""
                        width={325}
                        height={325}
                        className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"
                    />
                    <h5
                        className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                        Amazon Practioner
                    </h5>
                    <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                        Certification.
                    </p>

                </div>
            </div>
        </section>
    )
}

export default Certificates
