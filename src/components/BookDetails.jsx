import React from 'react';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import { authorData } from '../data/authorData';

const BookDetails = () => {
  const book = authorData.book;

  return (
    <section id="book" className="py-20" style={{ backgroundColor: '#FAF7EE' }}>
      <div className="container-custom mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-tagline text-xs mb-4 text-secondary">WHAT'S INSIDE</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-dark">
            A full year of biblical wisdom
          </h2>
          <div className="section-divider mb-6"></div>
          <p className="text-base text-dark/70 max-w-2xl mx-auto">
            Each of the 52 lessons is crafted to guide individuals and study groups through a deeper understanding of scripture — one week at a time.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Left Column: Features */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-lg p-6 border-2 border-secondary/30 bg-white shadow-md hover:shadow-lg transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <h4 className="font-display text-xl font-bold text-dark">52 lessons</h4>
                </div>
                <p className="text-sm text-dark/70">
                  One per week — structured for a complete year of personal or group study.
                </p>
              </div>

              <div className="rounded-lg p-6 border-2 border-secondary/30 bg-white shadow-md hover:shadow-lg transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <h4 className="font-display text-xl font-bold text-dark">Reflection questions</h4>
                </div>
                <p className="text-sm text-dark/70">
                  Thought-provoking questions at the end of each lesson with answers provided.
                </p>
              </div>

              <div className="rounded-lg p-6 border-2 border-secondary/30 bg-white shadow-md hover:shadow-lg transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <h4 className="font-display text-xl font-bold text-dark">For any believer</h4>
                </div>
                <p className="text-sm text-dark/70">
                  Accessible to readers of all backgrounds seeking a deeper walk with God.
                </p>
              </div>

              <div className="rounded-lg p-6 border-2 border-secondary/30 bg-white shadow-md hover:shadow-lg transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <h4 className="font-display text-xl font-bold text-dark">Paperback & eBook</h4>
                </div>
                <p className="text-sm text-dark/70">
                  Available in print and Kindle — read however you worship.
                </p>
              </div>
            </div>

            {/* Themes */}
            <div>
              <h4 className="font-display font-bold mb-4 text-lg text-dark">Key Themes:</h4>
              <div className="flex flex-wrap gap-3">
                {book.themes.map((theme, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 rounded-full text-sm font-semibold bg-sand text-dark border border-secondary/20"
                  >
                    {theme}
                  </span>
                ))}
              </div>
            </div>

            {/* Featured Quote */}
            <div className="rounded-lg p-8 shadow-md border-l-4 border-secondary bg-white">
              <FaQuoteLeft className="text-secondary mb-4" size={28} />
              <p className="italic text-base text-dark leading-relaxed mb-4">
                "The inspiration to develop these lessons came to life after celebrating the completion of a series of sermons that focused on following the concept of Hear the Word of the Lord through the Bible."
              </p>
              <p className="text-sm font-semibold text-secondary">
                — Dr. Earl L. Bledsoe, D.Min.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex-1 px-8 py-4 rounded-md font-semibold transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg bg-secondary text-primary hover:bg-secondary-dark">
                Order your copy today
              </button>
            </div>
          </div>

          {/* Right Column: Book Details Summary */}
          <div className="lg:col-span-1">
            <div className="rounded-lg p-6 shadow-lg border-2 border-secondary/20 bg-white sticky top-24">
              <h4 className="font-display text-xl font-bold mb-6 text-dark">About This Book</h4>
              
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-semibold text-secondary uppercase">Genre</span>
                  <p className="font-semibold text-dark mt-2">{book.details.genre}</p>
                </div>

                <div>
                  <span className="text-xs font-semibold text-secondary uppercase">Format</span>
                  <p className="font-semibold text-dark mt-2">{book.details.format}</p>
                </div>

                <div>
                  <span className="text-xs font-semibold text-secondary uppercase">Location</span>
                  <p className="font-semibold text-dark mt-2">{book.details.setting}</p>
                </div>

                <div className="pt-6 border-t border-secondary/20">
                  <div className="flex items-center gap-2">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} size={16} className="text-secondary" />
                    ))}
                  </div>
                  <p className="text-sm text-dark/70 mt-3">
                    Highly recommended by readers and spiritual seekers.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BookDetails;
