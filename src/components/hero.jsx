import profile from '../assets/rsivangiProfile.jpg'
export const Hero = () => {
    return (
        <div className='bg-black text-white text-center py-16' id='hero'>
            <img src={profile} alt="ProfilePic" className='mx-auto mb-8 w-48 h-48 rounded-full object-cover 
            transform transition-transform duration-300 hover:scale-105'/>
            <h1 className='text-4xl font-bold'>
                Iam {" "}
                <span className='text-transparent bg-clip-text bg-gradient-to-r 
                from-green-400 to-blue-500'>Rupa Sravani Sivangi</span>
                ,Full-Stack Passionate
            </h1>
            <p className='mt-4 text-lg text-gray-300'>
                I specialize in both Frontend and backend technologies.
            </p>
            <div className='mt-8 space-x-4'>
                <a href="#Contact">
                    <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
    transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
                        Contact With Me
                    </button>
                </a>

                <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">Resume</button>
            </div>
        </div>
    )
}