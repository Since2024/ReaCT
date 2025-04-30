import React, { useEffect, useState } from 'react';

const About = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowContent(true), 500); // Delay for intro effect
  }, []);

  return (
    <div className="min-h-screen bg-black text-yellow-400 flex items-center justify-center p-8 bg-gradient-to-b from-black to-gray-900">
      <div
        className={`flex flex-col md:flex-row items-center max-w-4xl w-full transform transition-all duration-1000 ${
          showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="md:w-1/2 w-72 mb-6 md:mb-0 flex justify-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ4jktWba0nJt3qdzUneVNResvCNGDIm6XKg&s"
            className="rounded-lg border-4 border-yellow-500 w-full max-w-sm shadow-lg shadow-yellow-400"
          />
        </div>

        <div className="md:w-1/2 w-full md:pl-8 text-center md:text-left">
          <h1 className="text-4xl font-extrabold text-yellow-400 mb-2 tracking-wide">
            The Dark Coder
          </h1>
          <div className="w-24 h-1 bg-yellow-500 mb-4 mx-auto md:mx-0"></div>

          <h2 className="text-2xl font-semibold text-gray-300 mb-4">
            Full Stack Vigilante
          </h2>

          <p className="text-lg text-gray-400 mb-4">
            I am Batman — by day, a web developer; by night, a bug-squashing vigilante. I build robust and stealthy applications using the latest in modern web technologies. No bug escapes my radar.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 text-gray-300">
            <div>
              <p className="text-yellow-500">Alias:</p>
              <p className="font-semibold">Hasan Gaha </p>
            </div>
            <div>
              <p className="text-yellow-500">Signal:</p>
              <p className="font-semibold">hason@gmail.com</p>
            </div>
            <div>
              <p className="text-yellow-500">Base:</p>
              <p className="font-semibold">Gotham City</p>
            </div>
            <div>
              <p className="text-yellow-500">Status:</p>
              <p className="font-semibold">On Call</p>
            </div>
          </div>

          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-6 rounded-full shadow-md hover:shadow-yellow-300 transition">
            Signal Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
