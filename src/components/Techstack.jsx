import HTML from '../assets/html.png';
import CSS from '../assets/css.jpeg';
import JS from '../assets/js.png';
import ReactLogo from '../assets/react.png'; // Renamed to avoid conflict with React itself
import Node from '../assets/node.png';
import Git from '../assets/git.png';

function Techstack() {
    const logos = [HTML, CSS, JS, ReactLogo, Node, Git];

    return (
        <div className="w-full container mx-auto py-20 px-4 sm:px-6 lg:px-8">
            <div className='w-[300px] shrink-0 px-8 text-gray-600 border-l-4 border-blue-500 bg-white py-2 z-10 sm:text-base text-xl font-semibold text-left mb-8'>
                Familiar TechStack
            </div>

            <div className="relative overflow-hidden w-full">
                <div className="flex animate-marquee whitespace-nowrap">
                    {[...logos, ...logos].map((logo, index) => (
                        <img
                            key={index}
                            src={logo}
                            alt="TechStack"
                            className="mx-12 h-8 w-36 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Techstack;
