import reactImg from '../assets/react.svg'
import h from '../assets/html1.png'
import c from '../assets/css.png'
import b from '../assets/bs.jpg'
import tc from '../assets/tailwind.png'
import js from '../assets/js.png'
import mg from '../assets/mongo.jpg'
import sb from '../assets/spb.png'
import ms from '../assets/msql.png'
import j from '../assets/java.png'
import ac from '../assets/camel.jpg'
export const About = () => {
    return (
        <div className='bg-black text-white py-10' id='about'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <h2 className='text-4xl font-bold text-center mb-5'>About Me</h2>

                <div className='flex justify-between md:space-x-30'>
                    <div className="flex flex-col space-y-2 py-10">
                        <div className='flex flex-row space-x-10 py-4'>
                            <img src={h} alt='' className="w-10 h-10 object-contain" />
                            <img src={c} alt='' className="w-10 h-10 object-contain" />
                            <img src={b} alt='' className="w-10 h-10 object-contain" />
                        </div>
                        <div className='flex flex-row space-x-10 py-4'>
                            <img src={tc} alt='' className="w-10 h-10 object-contain" />
                            <img src={js} alt='' className="w-10 h-10 object-contain" />
                            <img src={reactImg} alt='' className="w-10 h-10 object-contain" />
                        </div>
                        <div className='flex flex-row space-x-10 py-4'>
                            <img src={mg} alt='' className="w-10 h-10 object-contain" />
                            <img src={ms} alt='' className="w-10 h-10 object-contain" />
                            <img src={j} alt='' className="w-10 h-10 object-contain" />
                        </div>
                        <div className='flex flex-row space-x-10 py-4'>
                            <img src={sb} alt='' className="w-10 h-10 object-contain" />
                            <img src={ac} alt='' className="w-10 h-10 object-contain" />
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <p className='mt-20 px-20'>
                            I am a passionate full-stack developer with a focus on building
                            modern and responsive web applications. With a strong foundation
                            in both frontend and backend technologies, I strive to create
                            seamless and efficient user experiences.
                        </p>
                        <div className='mt-20 flex justify-center text-center space-x-20'>
                            <div>
                                <h3 className='text-3xl font-bold'>
                                    1.6+
                                </h3>
                                <p>Years experience</p>
                            </div>
                            <div>
                                <h3 className='text-3xl font-bold'>
                                    6+
                                </h3>
                                <p>Projects</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}