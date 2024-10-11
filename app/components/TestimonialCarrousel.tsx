"use client";
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const TestimonialsCarousel = () => {
  const testimonials = [
    { 
      id: 1, 
      text: "This platform has opened up a whole new world of color exploration! I love how it inspires my creativity.", 
      author: "John Doe", 
      image: "https://via.placeholder.com/150/FF5733/FFFFFF?text=John" 
    },
    { 
      id: 2, 
      text: "I never knew how much colors could affect my mood until I started using this app. It's truly transformative!", 
      author: "Jane Smith", 
      image: "https://via.placeholder.com/150/33FF57/FFFFFF?text=Jane" 
    },
    { 
      id: 3, 
      text: "The color palettes are stunning! They help me curate my content like never before.", 
      author: "Alice Johnson", 
      image: "https://via.placeholder.com/150/3357FF/FFFFFF?text=Alice" 
    },
    { 
      id: 4, 
      text: "Fantastic tool for color enthusiasts! I love sharing my vibrant creations with others.", 
      author: "Mark Thompson", 
      image: "https://via.placeholder.com/150/FF33A1/FFFFFF?text=Mark" 
    },
    { 
      id: 5, 
      text: "A wonderful experience overall! The community's appreciation for color is unmatched.", 
      author: "Sarah Connor", 
      image: "https://via.placeholder.com/150/FFEB33/FFFFFF?text=Sarah" 
    },
    {
      id: 6,
      text: "This app makes choosing colors fun and easy! My posts have never looked better.",
      author: "Michael Brown",
      image: "https://via.placeholder.com/150/FF5733/FFFFFF?text=Michael"
    },
    {
      id: 7,
      text: "A game-changer for my creative projects! The color trends section is incredibly helpful.",
      author: "Emily Davis",
      image: "https://via.placeholder.com/150/33FF57/FFFFFF?text=Emily"
    },
    {
      id: 8,
      text: "I love how this platform encourages me to experiment with colors. It’s a vibrant community!",
      author: "David Wilson",
      image: "https://via.placeholder.com/150/3357FF/FFFFFF?text=David"
    },
  ];

  return (
    <div className="py-12">
      <h2 className="text-center text-4xl font-bold mb-8 text-gray-800">What Our Users Say About Colors</h2>
      <AliceCarousel 
        items={testimonials.map((testimonial) => (
          <div key={testimonial.id} className="flex flex-col items-center px-4">
            <img 
              src={testimonial.image} 
              alt={testimonial.author} 
              className="w-24 h-24 rounded-full border-4 border-gray-300 mb-4" 
            />
            <p className="text-lg italic text-gray-600">"{testimonial.text}"</p>
            <p className="text-right font-semibold">{testimonial.author}</p>
          </div>
        ))} 
        autoPlay 
        autoPlayInterval={3000} 
        infinite 
        disableButtonsControls 
      />
    </div>
  );
};

export default TestimonialsCarousel;
