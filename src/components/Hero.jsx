import React from "react";

const Hero = () => {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-20 flex flex-col md:flex-row items-center">
        {/* Text Section */}
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold text-purple-700 mb-6">
            Breaking Barriers for Girls Through Hygiene, Education, and Opportunity
          </h1>
          <p className="text-gray-700 mb-6">
            Zharah SD Initiative Foundation works across Northern Nigeria to support girls with menstrual hygiene education, access to sanitary materials, and community engagement that keeps girls in school and thriving.
          </p>
          <div className="flex space-x-4">
            <button className="bg-purple-700 text-white px-6 py-3 rounded hover:bg-purple-800">
              Donate
            </button>
            <button className="bg-white border border-purple-700 text-purple-700 px-6 py-3 rounded hover:bg-purple-100">
              Get Involved
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 mt-10 md:mt-0">
          <img
            src="/src/assets/images/hero-placeholder.jpg"
            alt="Girls Education"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;