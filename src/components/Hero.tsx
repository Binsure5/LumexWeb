import React from 'react';

interface HeroProps {
  title: string;
  subtitle: string;
  description: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, description }) => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-gray-900">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center text-white px-4 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          {title}
        </h1>
        <h2 className="text-2xl md:text-3xl mb-4">
          {subtitle}
        </h2>
        <p className="text-lg md:text-xl mb-8">
          {description}
        </p>
        <a
          href="/about"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
        >
          Learn More
        </a>
      </div>
    </section>
  );
};

export default Hero; 