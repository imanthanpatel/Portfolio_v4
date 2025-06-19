function Feature() {
  const features = [
    {
      icon: "🔍",
      title: "Understand your vision",
      description:
        "I carefully analyze your goals, target audience, and design requirements to ensure the UI meets both business and user needs.",
    },
    {
      icon: "⚙️",
      title: "Code with precision",
      description:
        "From wireframes to real interaction, I convert designs into responsive, accessible, and high-performance web interfaces.",
    },
    {
      icon: "🚀",
      title: "Launch and iterate quickly",
      description:
        "I collaborate fast, integrate feedback effectively, and help get your product live — with scalable and maintainable code.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">How can I help your product shine?</h2>
        <p className="text-gray-600 mt-2">
          When you collaborate with me, you bring your ideas to life with pixel-perfect execution and real user impact.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid gap-8 md:grid-cols-3">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center text-center p-4 border rounded-lg shadow-md bg-white">
            <div className="w-16 h-16 flex items-center justify-center text-3xl bg-blue-100 rounded-full mb-4">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
      { /* Call to Action(btn) */}
      <div className="text-center mt-12">
        <button className="bg-blue-600 text-white cursor-pointer px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors  relative">Start a Project
          <div className="absolute -z-10 w-full h-full rounded-full bg-blue-700 blur-xl top-0 left-0 "></div>
        </button>
      </div>
    </section>
  );
}

export default Feature;
