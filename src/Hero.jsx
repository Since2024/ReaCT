import React, { useEffect, useState } from 'react';
import { SiZcool } from "react-icons/si";

const Hero = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 100); // Simple entrance delay
  }, []);

  return (
    <div className="flex flex-col justify-center items-center text-center bg-sky-400 text-red-700 min-h-screen p-6 transition-all duration-1000">
      <div
        className={`transform transition-all duration-1000 ${
          animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <img
          src="https://www.shutterstock.com/image-vector/river-otter-sitting-realistic-illustration-600nw-2538517967.jpg"
          alt="Hero Otter"
          className="w-64 h-auto rounded-lg shadow-lg shadow-red-900 mb-6"
        />
        <h1 className="text-4xl font-bold mb-2 tracking-wide">React Developer</h1>
        <h2 className="text-2xl mb-4 text-gray-300">Namaste!!!</h2>
        <p className="text-xl font-bold mb-4 flex items-center justify-center gap-2">
          I am Gaha, <span className="text-white">HASAN GAHA</span>
          <SiZcool style={{ fontSize: '50px' }} />
        </p>
        <div className="flex gap-4">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded transition duration-300">
            Explore Projects
          </button>
          <button className="bg-yellow-700 hover:bg-yellow-500 text-white px-4 py-2 rounded transition duration-300">
            Let's Connect
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
