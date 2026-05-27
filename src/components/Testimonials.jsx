import React from 'react';
import { FaStar, FaUser } from 'react-icons/fa';
import { authorData } from '../data/authorData';

const Testimonials = () => {
  const testimonials = authorData.testimonials;

  return (
    <section id="reviews" className="py-20" style={{ backgroundColor: '#FAF7EE' }}>
      <div className="container-custom mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-tagline text-xs mb-4 text-secondary">READER REVIEWS</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-dark">
            What readers are saying
          </h2>
          <div className="section-divider mb-6"></div>
        </div>

        {/* Testimonials Grid - Show 3 featured reviews */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.slice(0, 3).map((testimonial, idx) => (
            <div
              key={idx}
              className="rounded-lg p-6 shadow-md border-t-4 border-secondary bg-white hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} size={16} className="text-secondary" />
                ))}
              </div>

              <p className="text-sm italic mb-4 leading-relaxed text-dark/80">
                "{testimonial.title}"
              </p>

              <p className="text-sm leading-relaxed text-dark/70 mb-4">
                {testimonial.review}
              </p>

              <div className="flex items-center gap-2 pt-4 border-t border-secondary/15">
                <div className="p-2 rounded-full bg-secondary/10">
                  <FaUser size={12} className="text-secondary" />
                </div>
                <div>
                  <p className="font-semibold text-sm text-dark">
                    {testimonial.name}
                  </p>
                  {/* <p className="text-xs text-dark/50">
                    {testimonial.verifiedPurchase && 'Verified Purchase'}
                  </p> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* All Reviews Section */}
        {/* <div className="mt-16">
          <h3 className="font-display text-2xl font-bold mb-8 text-dark">All Reader Reviews</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="rounded-lg p-6 shadow-md border border-secondary/20 bg-white/70 hover:shadow-lg transition-all duration-300"
              >
                <FaQuoteRight className="mb-3 text-secondary/20" size={24} />

                <div className="flex items-center gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} size={14} className="text-secondary" />
                  ))}
                </div>

                <h4 className="font-semibold text-sm mb-2 text-dark">
                  {testimonial.title}
                </h4>

                <p className="text-xs leading-relaxed text-dark/70 mb-4 line-clamp-3">
                  {testimonial.review}
                </p>

                <div className="flex items-center gap-2 pt-4 border-t border-secondary/10">
                  <div className="p-1.5 rounded-full bg-secondary/10">
                    <FaUser size={11} className="text-secondary" />
                  </div>
                  <div>
                    <p className="font-semibold text-xs text-dark">
                      {testimonial.name}
                    </p>
                    {testimonial.date && (
                      <p className="text-xs text-dark/50">
                        {new Date(testimonial.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> */}



      </div>
    </section>
  );
};

export default Testimonials;
