import schedule from '../assets/airport_ui.png';
import { FaArrowRight } from "react-icons/fa6";

function Monitor() {
    return (
        <section className="max-w-7xl mx-auto px-4 py-6 md:py-24">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24">
                
                {/* Left Image */}
                <div className="w-full md:w-1/2">
                    <img src={schedule} alt="Project schedule" className="rounded-lg shadow-lg" />
                </div>

                {/* Right Content */}
                <div className="md:w-1/2 w-full">
                    <p className='text-green-500 font-semibold'>Monitor</p>
                    <h2 className='text-3xl md:text-4xl font-bold text-neutral-900 mt-4 mb-6 md:w-4/5'>
                        Introducing best <br/> Frontend  project
                    </h2>
                    <p className='text-gray-600 mb-8'>
                       Developed an interactive airport gate navigation system using React.js, providing users with a visual interface to explore airport terminals and gate locations.Implemented dynamic UI components for terminal and gate selection, ensuring responsive design and smooth user experience.Utilized React Router and state management to enable seamless navigation between different sections of the airport.Focused on modular component structure and clean UI/UX design to enhance usability and scalability.                    </p>

                    {/* Button Moved Downside */}
                    <a 
                        href="https://github.com/imanthanpatel/airport-ui" 
                        className='text-blue-500 font-semibold flex items-center gap-2 hover:gap-4 mt-4'
                    >Learn more about monitoring <FaArrowRight className='size-8' />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Monitor;
