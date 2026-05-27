import React, { useState } from 'react';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import { authorData } from '../data/authorData';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setEmail('');
    }
  };

  return (
    <section id="contact" className="py-20" style={{ background: 'linear-gradient(135deg, #1a1108 0%, #281A0E 50%, #1a1108 100%)' }}>
      <div className="container-custom mx-auto text-center">
        {/* <div className="flex justify-center mb-6">
          <div className="p-4 rounded-full shadow-lg bg-secondary">
            <FaPenFancy size={32} className="text-primary" />
          </div>
        </div> */}

        <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-secondary">
          Begin your year-long journey
        </h2>

        <p className="text-lg mb-6 max-w-2xl mx-auto text-secondary/90">
          52 lessons. 52 weeks. A lifetime of wisdom.
          Available in Paperback and Kindle.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          {authorData.email && (
            <div className="backdrop-blur-sm px-5 py-2 rounded-full inline-flex items-center gap-2 bg-white/10 border border-secondary/30">
              <FaEnvelope size={13} className="text-secondary" />
              <span className="text-sm text-secondary">{authorData.email}</span>
            </div>
          )}
          {authorData.phone && (
            <div className="backdrop-blur-sm px-5 py-2 rounded-full inline-flex items-center gap-2 bg-white/10 border border-secondary/30">
              <FaPhone size={13} className="text-secondary" />
              <span className="text-sm text-secondary">{authorData.phone}</span>
            </div>
          )}
        </div>

        <div className="max-w-md mx-auto mb-8">
          <button className="w-full px-8 py-4 rounded-md font-semibold transition-all duration-300 flex items-center justify-center gap-2 transform hover:-translate-y-0.5 shadow-lg hover:opacity-90 bg-secondary text-primary font-author">
            Order your copy today
          </button>
        </div>

        <div className="flex items-center justify-center gap-3 mt-8 text-sm flex-wrap text-secondary/70">
          <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/8 border border-secondary/30">
            <span>Biblical wisdom</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/8 border border-secondary/30">
            <span>Weekly lessons</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/8 border border-secondary/30">
            <span>Pastoral guidance</span>
          </div>
        </div>

        <p className="text-xs mt-8 text-secondary/40">
          Dr. Earl L. Bledsoe, D.Min. • Richmond, Virginia
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
