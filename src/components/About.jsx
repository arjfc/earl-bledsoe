import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import { authorData } from '../data/authorData';

const About = () => {
  const author = authorData.authorBio;

  return (
    <section id="about" className="py-20" style={{ backgroundColor: '#281A0E' }}>
      <div className="container-custom mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-tagline text-xs mb-4 text-secondary">ABOUT THE AUTHOR</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-secondary">
            {authorData.fullName}
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-3 gap-12 items-start mb-16">
          
          {/* Left: Author Photo */}
          <div className="md:col-span-1 flex justify-center">
            <div className="relative" style={{ maxWidth: '280px', width: '100%' }}>
              <img
                src="/images/earl-bledsoe.jpeg"
                alt={authorData.fullName}
                className="w-full h-auto object-cover rounded-lg shadow-2xl"
                style={{ aspectRatio: '3/4', objectPosition: 'center' }}
              />
              {/* Subtle frame */}
              <div
                className="absolute inset-0 rounded-lg border border-secondary/30"
                style={{ pointerEvents: 'none' }}
              />
            </div>
          </div>

          {/* Right: Bio & Details */}
          <div className="md:col-span-2 space-y-8">
            
            {/* Name & Title */}
            <div>
              <h3 className="font-display text-2xl font-bold text-secondary mb-2">
                Dr. {authorData.name}
              </h3>
              <p className="font-tagline text-sm text-secondary mb-3">
                {author.education}
              </p>
              <p className="text-base text-secondary/90 font-semibold mb-2">
                Pastoral Leader & Theologian
              </p>
            </div>

            {/* Bio */}
            <div>
              <p className="text-base leading-relaxed text-secondary/80">
                {author.fullBio}
              </p>
            </div>
          </div>

        </div>

        {/* Featured Quote - Full Width */}
        <div className="rounded-lg p-8 border-l-4 border-secondary bg-primary-dark/60 mb-16 w-full">
          <FaQuoteLeft className="text-secondary mb-4" size={32} />
          <p className="italic text-lg text-secondary/90 leading-relaxed mb-4">
            "Biblical principles must be accessible, relevant, and deeply transformative for modern believers. My mission is to make scripture come alive through practical theology and pastoral care."
          </p>
          <p className="text-base font-semibold text-secondary">
            — Dr. Earl L. Bledsoe
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="rounded-lg p-4 bg-secondary/10 border border-secondary/30">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-semibold text-secondary">31 Years</span>
            </div>
            <p className="text-xs text-secondary/80">
              Senior Pastor of Great Hope Baptist Church, Richmond, VA
            </p>
          </div>

          <div className="rounded-lg p-4 bg-secondary/10 border border-secondary/30">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-semibold text-secondary">Teaching</span>
            </div>
            <p className="text-xs text-secondary/80">
              Instructor in Practical Theology at Virginia Union University
            </p>
          </div>

          <div className="rounded-lg p-4 bg-secondary/10 border border-secondary/30">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-semibold text-secondary">Director</span>
            </div>
            <p className="text-xs text-secondary/80">
              Field Education, Samuel DeWitt Proctor School of Theology
            </p>
          </div>

          <div className="rounded-lg p-4 bg-secondary/10 border border-secondary/30">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-semibold text-secondary">Expertise</span>
            </div>
            <p className="text-xs text-secondary/80">
              Practical theology, field education, pastoral leadership
            </p>
          </div>
        </div>

        {/* Affiliations */}
        <div className="mb-16">
          <h4 className="font-display text-lg font-bold text-secondary mb-4">
            Affiliations
          </h4>
          <div className="flex flex-wrap gap-3">
            {author.memberships.map((membership, idx) => (
              <span
                key={idx}
                className="px-4 py-2 rounded-full text-sm bg-secondary/15 text-secondary border border-secondary/30 font-semibold"
              >
                {membership}
              </span>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="pt-12 border-t border-secondary/20 text-center">
          <h3 className="font-display text-2xl font-bold text-secondary mb-4">
            Experience 52 Weeks of Biblical Wisdom
          </h3>
          <p className="text-secondary/80 mb-8 max-w-2xl mx-auto">
            Dr. Bledsoe's latest work, "{authorData.book.fullTitle}", is now available. 
            Get your copy and begin a transformative year of spiritual growth.
          </p>
          <a
            href="#book"
            className="inline-block px-8 py-3 rounded-md font-semibold transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg bg-secondary text-primary hover:bg-secondary-dark"
          >
            Learn About the Book
          </a>
        </div>

      </div>
    </section>
  );
};

export default About;
