import ll from '../assets/linkedin.png'
import nk from '../assets/naukri.png'
import git from '../assets/git.png'
export const Contact = () => {
    return (
        <div className='bg-black text-white py-10' id='Contact'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <div class="lg:w-1/2 md:w-2/3 mx-auto">
                    <div class="flex flex-wrap -m-2">
                        <div class="p-2 w-1/2">
                            <div class="relative">
                                <label for="name" class="leading-7 text-sm text-white-600">Name</label>
                                <input type="text" id="name" name="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>
                        <div class="p-2 w-1/2">
                            <div class="relative">
                                <label for="email" class="leading-7 text-sm text-white-600">Email</label>
                                <input type="email" id="email" name="email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>
                        <div class="p-2 w-full">
                            <div class="relative">
                                <label for="message" class="leading-7 text-sm text-white-600">Message</label>
                                <textarea id="message" name="message" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                            </div>
                        </div>
                        <div class="p-2 w-full">
                            <button class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mt-10 space-x-6">
                    <a href="https://www.linkedin.com/in/rupa-sravani-sivangi-a612b6250/" target="_blank" rel="noopener noreferrer">
                        <img src={ll} alt="LinkedIn" className="w-10 h-10 rounded-full" />
                    </a>
                    <a href="https://www.naukri.com/mnjuser/homepage" target="_blank" rel="noopener noreferrer">
                        <img src={nk} alt="Naukri" className="w-10 h-10 rounded-full" />
                    </a>
                    <a href="https://github.com/rupaSravaniHub" target="_blank" rel="noopener noreferrer">
                        <img src={git} alt="Naukri" className="w-10 h-10 rounded-full" />
                    </a>
                </div>

            </div></div>
    )
}