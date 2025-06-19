import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Techstack from './components/Techstack.jsx';
import Purpose from './components/Purpose.jsx';
import Feature from './components/Feature.jsx';
import Project from './components/Project.jsx';
import Monitor from './components/Monitor.jsx';
import Pricing from './components/Pricing.jsx';
import Service from './components/Service.jsx';
import Testimonial from './components/Testimonial.jsx';
import Newsletter from './components/Newsletter.jsx';
function App() {
  return(<>
  <main className='relative min-h-screen overflow-x-hidden'>
    <div className='absolute -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500/20 to-pink-500/20 rounded-full blur-[80px] -z-10 '></div>
    <div className='overflow-hidden'>

      <Navbar/>
      <Hero/>
      <Techstack/>
      <Purpose/>
      <Feature/>
      <Project/>
      <Monitor/>
      <Pricing/>
      <Service/>
      <Testimonial/>
      <Newsletter/>

      </div>
      </main>


  </>
  );

}

export default App
