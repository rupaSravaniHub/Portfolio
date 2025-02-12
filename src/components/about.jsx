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
import git from '../assets/git.png'
export const About = () => {
    const education = [
        {
            id: 0,
            College: "Sri Vasavi Engineering college, Pedatadepalli, Tadepalligudem",
            date: "Aug 2019 - Apr 2023",
            grade: "8.11 CGPA",
            degree: "Bachelor of Technology - BTech, Electronics and Communication Engineering",
        },
        {
            id: 1,
            college: "Sri Pragathi junior college, Tadepalligudem",
            date: "Jun 2017 - Apr 2019",
            grade: "9.88 CGPA",
            degree: "M.P.C",
        },
        {
            id: 2,
            //   img: "https://firebasestorage.googleapis.com/v0/b/flexi-coding.appspot.com/o/methodist.png?alt=media&token=018a1b18-e2dd-4f34-8855-cff1b6b69fd3",
            school: "Vani public school",
            date: "Apr 2016 - Apr 2017",
            grade: "9.0 CGPA",
        },
    ];
    return (
        <div className='bg-black text-white py-10' id='About Me'>
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
                            <img src={git} alt='' className="w-10 h-10 object-contain" />
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
                {/* education details */}
                <div id="Education">
                    <div className="container mx-auto px-8 py-4  md:px-16 lg:px-24">
                        <h2 className="text-4xl font-bold text-center mb-10">Education</h2>
                        <div>
                            {education.map((edu) => (
                                <div key={edu.id} className="mb-10 ml-6">
                                    <h3 className="text-xl font-semibold">{edu.College || edu.college || edu.school}</h3>
                                    <p className="text-gray-400">{edu.degree}</p>
                                    <p className="text-gray-400">{edu.date}</p>
                                    <p className="text-yellow-400 font-semibold">{edu.grade}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}