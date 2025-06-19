import HTML from '../assets/html.png';
import CSS from '../assets/css.jpeg';
import JS from '../assets/js.png';
import React from '../assets/react.png';
import Node from '../assets/node.png';
import Git from '../assets/git.png'
// import { jsx } from 'react/jsx-runtime';

function Techstack(){

    const logos =[HTML,CSS,JS,React,Node,Git];
    return(
        <div className=" w-full container gap-8 mx-auto py-20 px-4 sm:px-6 lg:px-8 flex sm:flex-row flex-col sm:items-center items-start ">
            <div className='w-[300px] shrink-0 px-8 text-gray-600 border-l-4 border-blue-500 bg-white py-2 z-10 sm:text-base text-xl font-semibold text-left flex justify-start'>Familiar TechStack</div>
            <div className='flex animate-marquee whitespace-nowrap  '>
                {logos.map((logo, index) => (
                    <img key={index} src={logo} alt="TechStack" className='mx-12 h-8 w-36 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all' />
                ))}
            </div>
            
            
            
        </div>
    );

}

export default Techstack;