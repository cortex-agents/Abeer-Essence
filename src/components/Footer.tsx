'use client'

import { Separator } from "./ui/separator";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

export function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.footer 
      className="bg-royal-black pt-20 pb-8 px-6 border-t border-metallic-gold/20 relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section with animations */}
          <motion.div 
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Animated Golden Logo */}
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.h3 
                className="text-5xl text-metallic-gold"
                style={{ 
                  fontFamily: "'Libre Baskerville', serif",
                  letterSpacing: "0.05em"
                }}
                animate={{ 
                  textShadow: [
                    "0 0 20px rgba(212, 175, 55, 0.3)",
                    "0 0 30px rgba(212, 175, 55, 0.5)",
                    "0 0 20px rgba(212, 175, 55, 0.3)"
                  ]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                عبير
              </motion.h3>
              <h4 
                className="text-2xl text-metallic-gold tracking-widest"
                style={{ 
                  fontFamily: "'Cormorant Garamond', serif",
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  fontWeight: "600"
                }}
              >
                Abeer Essence
              </h4>
              <p 
                className="text-metallic-gold text-lg italic"
                style={{ 
                  fontFamily: "'Poppins', sans-serif", 
                  fontWeight: "300"
                }}
              >
                A Story in a Bottle
              </p>
            </motion.div>
            
            {/* Description */}
            <motion.p 
              className="text-ivory-white leading-relaxed max-w-md"
              style={{ 
                fontFamily: "'Poppins', sans-serif", 
                fontWeight: "300"
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Discover the art of luxury perfumery with our exquisite collection of premium fragrances. 
              Each bottle contains a unique story waiting to be told.
            </motion.p>
            
            {/* Social Media Icons with Glow Effects */}
            <motion.div 
              className="flex space-x-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              {[
                { 
                  href: "https://www.instagram.com/abeer.essence_/?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D#", 
                  label: "Instagram @abeer.essence_",
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                      <path d="m16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                    </svg>
                  )
                },
                { 
                  href: "https://www.facebook.com/profile.php?id=61579001770886", 
                  label: "Facebook",
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                    </svg>
                  )
                },
                { 
                  href: "https://wa.me/+923282213631", 
                  label: "WhatsApp",
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                    </svg>
                  )
                }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="w-12 h-12 border-2 border-metallic-gold rounded-full flex items-center justify-center text-metallic-gold transition-all duration-300"
                  aria-label={social.label}
                  whileHover={{ 
                    scale: 1.1,
                    backgroundColor: "rgba(212, 175, 55, 1)",
                    color: "rgba(13, 13, 13, 1)",
                    boxShadow: "0 0 30px rgba(212, 175, 55, 0.8)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  animate={{ 
                    boxShadow: [
                      "0 0 0px rgba(212, 175, 55, 0)",
                      "0 0 15px rgba(212, 175, 55, 0.3)",
                      "0 0 0px rgba(212, 175, 55, 0)"
                    ]
                  }}
                  transition={{ 
                    boxShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                  }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Quick Links */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h5 
              className="text-metallic-gold text-xl tracking-wider"
              style={{ 
                fontFamily: "'Cormorant Garamond', serif",
                textTransform: "uppercase",
                letterSpacing: "0.08em"
              }}
            >
              Quick Links
            </h5>
            <ul className="space-y-3">
              {["Shop Now", "New Arrivals", "Best Sellers", "Gift Sets", "About Us"].map((link, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
                  <motion.a 
                    href="#" 
                    className="text-ivory-white hover:text-metallic-gold transition-colors duration-300"
                    style={{ 
                      fontFamily: "'Poppins', sans-serif", 
                      fontWeight: "300"
                    }}
                    whileHover={{ 
                      x: 5,
                      textShadow: "0 0 10px rgba(212, 175, 55, 0.5)"
                    }}
                  >
                    {link}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          {/* Customer Care */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h5 
              className="text-metallic-gold text-xl tracking-wider"
              style={{ 
                fontFamily: "'Cormorant Garamond', serif",
                textTransform: "uppercase",
                letterSpacing: "0.08em"
              }}
            >
              Customer Care
            </h5>
            <ul className="space-y-3">
              {["Contact Us", "Shipping Info", "Returns", "Size Guide", "FAQ"].map((link, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
                  <motion.a 
                    href="#" 
                    className="text-ivory-white hover:text-metallic-gold transition-colors duration-300"
                    style={{ 
                      fontFamily: "'Poppins', sans-serif", 
                      fontWeight: "300"
                    }}
                    whileHover={{ 
                      x: 5,
                      textShadow: "0 0 10px rgba(212, 175, 55, 0.5)"
                    }}
                  >
                    {link}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
            
            {/* Contact Info */}
            <motion.div 
              className="space-y-3 pt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.p 
                className="text-ivory-white flex items-center gap-2"
                style={{ 
                  fontFamily: "'Poppins', sans-serif", 
                  fontWeight: "300"
                }}
                whileHover={{ 
                  x: 5,
                  color: "rgba(212, 175, 55, 1)"
                }}
              >
                <span className="text-metallic-gold">📧</span>
                abeer.ess3nce@gmail.com
              </motion.p>
              <motion.p 
                className="text-ivory-white flex items-center gap-2"
                style={{ 
                  fontFamily: "'Poppins', sans-serif", 
                  fontWeight: "300"
                }}
                whileHover={{ 
                  x: 5,
                  color: "rgba(212, 175, 55, 1)"
                }}
              >
                <span className="text-metallic-gold">📱</span>
                +923282213631
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
        
        <Separator className="bg-pearl-grey/30 my-8" />
        
        {/* Bottom Footer */}
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p 
            className="text-pearl-grey text-center md:text-left"
            style={{ 
              fontFamily: "'Poppins', sans-serif", 
              fontWeight: "300"
            }}
          >
            © Abeer Essence – All Rights Reserved
          </p>
          
          <div className="flex space-x-6">
            {["Privacy Policy", "Terms of Service"].map((link, index) => (
              <motion.a 
                key={index}
                href="#" 
                className="text-pearl-grey hover:text-metallic-gold transition-colors duration-300"
                style={{ 
                  fontFamily: "'Poppins', sans-serif", 
                  fontWeight: "300"
                }}
                whileHover={{ 
                  textShadow: "0 0 10px rgba(212, 175, 55, 0.5)"
                }}
              >
                {link}
              </motion.a>
            ))}
          </div>
        </motion.div>
        
        {/* Final decorative element */}
        <motion.div 
          className="flex justify-center mt-8"
          initial={{ opacity: 0, width: 0 }}
          whileInView={{ opacity: 1, width: "8rem" }}
          transition={{ duration: 2, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-metallic-gold to-transparent"></div>
        </motion.div>

        {/* Company Logo and Created by */}
        <div className="flex flex-col items-center justify-center mt-8 gap-2">
          <div className="w-16 h-16 rounded-full border-2 border-metallic-gold flex items-center justify-center bg-royal-black shadow-lg overflow-hidden">
            <img
              src="/cortextAgents_logo.jpg"
              alt="Cortex Agents Logo"
              className="w-12 h-12 object-contain rounded-full"
              style={{ background: 'rgba(212,175,55,0.08)' }}
            />
          </div>
          <span
            className="text-pearl-grey text-sm mt-2 tracking-wide"
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 300 }}
          >
            Created by <span className="text-metallic-gold font-semibold">Cortex Agents</span>
          </span>
        </div>
      </div>
      
      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            className="fixed bottom-8 right-8 w-12 h-12 bg-metallic-gold text-royal-black rounded-full flex items-center justify-center shadow-lg z-50 border-2 border-metallic-gold"
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 100 }}
            whileHover={{ 
              scale: 1.1,
              boxShadow: "0 0 30px rgba(212, 175, 55, 0.8)"
            }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </motion.footer>
  );
}