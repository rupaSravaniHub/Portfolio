import mss from '../assets/miracle.jpg'
export const Experience = () => {
    const Bio = {
        name: "Rupa sravani sivangi",
        role:
            "Junior Technical Associative | Miracle Software Systems",
        duration: "Aug 2023 – Present",
        description:
            [
                "Developed and optimized full-stack apps with React.js, Spring Boot, MongoDB, and MySQL.",
                "Implemented integration workflows using Apache Camel, ActiveMQ, and REST APIs.",
                "Built a User & Role Management System with CRUD, pagination, and access control.",
                "Worked on real-time data processing and audit logging for integration scenarios.",
                "Improved UI/UX with responsive design using Tailwind CSS & Bootstrap."
            ],
        github: "https://github.com/rupaSravaniHub",
        resume:
            "https://drive.google.com/file/d/1txFKZD3LNIXMc329jD9c995AU8LItOXK/view?usp=drive_link",
        linkedin: "https://www.linkedin.com/in/rupa-sravani-sivangi-a612b6250/"
    };
    return (
        <div className='bg-black text-white py-5' id='Experience'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <h2 className='text-4xl font-bold text-center mb-5 py-5'>Experience</h2>
                <div className="flex flex-col justify-evenly sm:grid sm:grid-cols-1 md:grid-cols-3 gap-6">
                    <img className="w-32 h-31 object-cover rounded-full ml-5 mt-10" src={mss} alt="Miracle logo" />
                    <div className='flex flex-col mr-20 mt-10'>
                        <h3 className="text-2xl font-semibold text-white">{Bio.name}</h3>
                        <p className="text-xl text-gray-400">{Bio.role}</p>
                        <p className="text-gray-300 mt-2">{Bio.duration}</p>
                    </div>
                    <div className='flex flex-col'>
                        <ul className="list-disc pl-5 pr-5">
                            {Bio.description.map((data, index) => (
                                <li className='text-white' key={index}>{data}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}