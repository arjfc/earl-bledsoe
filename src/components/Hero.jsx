import React from 'react';
import { FaArrowRight, FaChevronRight } from 'react-icons/fa';
import { authorData } from '../data/authorData';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #281A0E 0%, #1a1108 50%, #281A0E 100%)' }}
    >
      {/* Background glows */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full blur-3xl opacity-20 bg-secondary"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full blur-3xl opacity-15 bg-accent-light"></div>

      <div className="container-custom mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center min-h-[600px]">

          {/* Left Content */}
          <div className="text-center md:text-left flex flex-col justify-center">
            <p className="font-tagline text-xs mb-6 text-secondary">
              NEW RELEASE · 52 WEEKLY LESSONS
            </p>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-tight mb-6 text-secondary">
              {authorData.book.fullTitle}
            </h1>

            <div className="section-divider mb-6 md:mx-0"></div>

            <p className="text-base mb-10 leading-relaxed max-w-md text-secondary/90">
              A year-long journey of scripture, reflection, and spiritual renewal — written by a pastor with 31 years of experience.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#book"
                className="font-author text-xs px-8 py-3 rounded-md transition-all duration-300 flex items-center justify-center gap-2 group transform hover:-translate-y-0.5 shadow-lg bg-secondary text-primary hover:bg-secondary-dark"
              >
                Get the book
                <FaArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#about"
                className="font-author text-xs px-8 py-3 rounded-md transition-all duration-300 flex items-center justify-center gap-2 hover:opacity-75 border-2 border-secondary/40 text-secondary"
              >
                Learn more
                <FaChevronRight size={14} />
              </a>
            </div>
          </div>

          {/* Right: Book Image - Large & Centered */}
          <div className="relative flex justify-center items-center h-full">
            <div className="relative" style={{ maxWidth: '440px', width: '100%' }}>
              <img
                src="/images/52-lessons.png"
                alt={authorData.book.fullTitle}
                className="w-full h-auto object-cover shadow-2xl"
                style={{ objectPosition: 'center' }}
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        .animate-float { animation: float 4s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 5s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default Hero;
