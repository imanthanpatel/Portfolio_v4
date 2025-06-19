// import { feature } from "../assets/data";   

function Purpose() {
 const features = [
    {
      icon: "🎯", // Replace with your actual icon component or image
      title: "Built for impact",
      description: "I craft responsive, accessible, and performance-optimized user interfaces that ensure your users enjoy a smooth, intuitive experience across devices."
    },
    {
      icon: "🤝", // Replace with your actual icon component or image
      title: "In sync with you",
      description: "I align with your product vision, design language, and team workflow — adapting my development process to seamlessly integrate with designers, backend teams, and stakeholders."
    }
  ];
  return (
   <section   className="scroll-smooth w-full bg-gray-50 py-16 px-4 sm:px-6 md:px-8 " id="about">
    <div className="max-w-6xl mx-auto ">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-8 ">
            {/*Heading Text*/}
        <div className="">
            <p className="text-sm text-purple-600 font-medium mb-2">Engineering the Experience</p>
            <h2 className="text-3xl md:w-4/5 w-full md:text-4xl font-bold text-gray-900">What I Bring as a Frontend Developer</h2>
        </div>

        {/*Bullet points*/}
       <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
  {features.map((feature, index) => (
    <div key={index} className="flex items-start space-x-4">
      <div className="w-12 h-12 flex items-center justify-center rounded-lg">
        {feature.icon}
      </div>

      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
        <p className="text-gray-600">{feature.description}</p>
      </div>
    </div>
  ))}
</div>
</div>
</div>

   </section>
  );
}


export default Purpose;