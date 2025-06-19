import schedule from '../assets/stats.webp';
import { FaArrowRight } from "react-icons/fa6";

function Project() {
    return (
        <section className="max-w-7xl mx-auto px-4 py-6 md:py-24">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24">
                
                {/* Left Image */}
                <div className="w-full md:w-1/2">
                    <img src={schedule} alt="Project schedule" className="rounded-lg shadow-lg" />
                </div>

                {/* Right Content */}
                <div className="md:w-1/2 w-full">
                    <p className='text-orange-500 font-semibold'>Explore</p>
                    <h2 className='text-3xl md:text-4xl font-bold text-neutral-900 mt-4 mb-6'>
                        Explore My Projects
                    </h2>
                    <p className='text-gray-600 mb-8'>
                        Discover a collection of frontend solutions built to solve real problems. From responsive layouts to dynamic user interactions, each project reflects a deep understanding of modern web development.
                    </p>

                    {/* Button Moved Downside */}
                    <a 
                        href="https://github.com/imanthanpatel" 
                        className='text-blue-500 font-semibold flex items-center gap-2 hover:gap-4 mt-4'
                    >
                        Explore <FaArrowRight className='size-8' />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Project;
