import React from 'react';
import { FaEnvelope, FaTwitter, FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { authorData } from '../data/authorData';

const Footer = () => {
  return (
    <footer className="py-12 bg-primary text-secondary/70">
      <div className="container-custom mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">

          {/* Author Info */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start mb-3">
              {/* <div className="relative">
                <FaPenFancy className="text-secondary" size={20} />
              </div> */}
              <h3 className="font-author text-lg text-secondary">
                {authorData.fullName}
              </h3>
            </div>
            <p className="font-tagline text-xs text-secondary/60">
              {authorData.tagline}
            </p>
            <p className="font-tagline text-xs text-secondary/40 mt-1">
              {authorData.authorBio.location}
            </p>
          </div>

          {/* CTA */}
          <div className="flex justify-center">
            <button className="font-author text-sm font-bold py-3 px-8 rounded-md shadow-lg transform transition-all duration-300 hover:scale-105 bg-secondary text-primary hover:opacity-90">
              Get the Book
            </button>
          </div>

          {/* Socials */}
          <div className="flex gap-4">
            {[
              { Icon: FaTwitter, url: '#' },
              { Icon: FaInstagram, url: '#' },
              { Icon: FaFacebookF, url: '#' },
              { Icon: FaLinkedinIn, url: '#' }
            ].map((social, i) => (
              <a
                key={i}
                href={social.url}
                className="text-secondary/60 hover:text-secondary transition-all duration-300 hover:scale-110 transform"
              >
                <social.Icon size={18} />
              </a>
            ))}
            {authorData.email && (
              <a
                href={`mailto:${authorData.email}`}
                className="text-secondary/60 hover:text-secondary transition-all duration-300 hover:scale-110 transform"
              >
                <FaEnvelope size={18} />
              </a>
            )}
          </div>
        </div>

        {/* Bottom Info */}
        <div className="pt-8 border-t border-secondary/10 text-center">
          <p className="font-tagline text-xs text-secondary/35 mb-2">
            © 2026 {authorData.fullName}. All rights reserved.
          </p>
          <p className="font-tagline text-xs text-secondary/35">
            Practical Theology • Biblical Wisdom • Spiritual Growth
          </p>
          <div className="flex justify-center gap-4 mt-4 text-xs text-secondary/40">
            <a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-secondary transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
