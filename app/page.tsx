"use client"
import React from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';

// Dynamically import the TestimonialsCarousel component
const TestimonialsCarousel = dynamic(() => import('./components/TestimonialCarrousel'), { ssr: false });

const Home = () => {

  const router = useRouter();
  return (
    <div
      className="relative flex flex-col min-h-screen bg-slate-50 overflow-hidden"
      style={{ fontFamily: 'Epilogue, "Noto Sans", sans-serif' }}
    >
      {/* Hero Section */}
      <div
        className="relative h-screen flex flex-col justify-center bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/f4a118d4-e2fb-4a2a-a23c-566307469c85.png")',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-30" />
        <div className="relative z-10 p-8 text-center">
          <h1 className="text-white text-5xl font-extrabold mb-4 shadow-lg">
            A social media app for everything that's colorful
          </h1>
          <p className="text-white text-lg mb-6 shadow-md">
            Explore the most colorful designs on the internet and beyond. Find your next color palette.
          </p>
          <button 
          onClick={()=> router.push('pages/signup')}
          className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white rounded-full px-6 py-3 text-lg font-bold transition-transform transform hover:scale-105">
            Get Started
          </button>
        </div>
      </div>

      {/* Featured Designs Section */}
      <section className="py-12">
        <h2 className="text-center text-4xl font-bold mb-8 text-gray-800">Featured Color Palettes</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
              <img
                src={`https://via.placeholder.com/300?text=Palette+${index + 1}`}
                alt={`Palette ${index + 1}`}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">Palette {index + 1}</h3>
                <p className="text-gray-600">Description of color palette.</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Carousel Section */}
      <TestimonialsCarousel />

      {/* Additional Section (Optional) */}
      <section className="bg-gray-100 py-12">
        <h2 className="text-center text-4xl font-bold mb-8 text-gray-800">Join the Community</h2>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gray-700 mb-4">Be a part of our vibrant community and share your color inspirations!</p>
          <button className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full px-6 py-3 text-lg font-bold transition-transform transform hover:scale-105">
            Sign Up Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
