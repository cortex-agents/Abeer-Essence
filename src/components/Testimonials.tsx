'use client'

import { Card, CardContent } from "./ui/card";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Sarah Ahmed",
    location: "Karachi",
    quote: "Abeer Essence has transformed my fragrance collection. Each bottle tells a beautiful story that lasts all day long.",
    rating: 5
  },
  {
    name: "Hassan Ali",
    location: "Lahore", 
    quote: "The quality is exceptional and the scents are truly unique. I've received countless compliments wearing Creed Aventus – Essence Reign.",
    rating: 5
  },
  {
    name: "Fatima Khan",
    location: "Islamabad",
    quote: "A story in a bottle indeed! The White Oud – Majestic Oud is my signature scent. Absolutely divine and long-lasting.",
    rating: 5
  },
  {
    name: "Omar Sheikh",
    location: "Multan",
    quote: "Premium quality at reasonable prices. The Dior Sauvage – Midnight Steel has become my go-to fragrance for special occasions.",
    rating: 5
  },
  {
    name: "Aisha Malik",
    location: "Faisalabad",
    quote: "The packaging is as luxurious as the fragrance itself. Bombshell – Bliss Bloom makes me feel confident and elegant.",
    rating: 5
  },
  {
    name: "Bilal Hussain",
    location: "Peshawar",
    quote: "Exceptional customer service and authentic fragrances. The royal experience from Abeer Essence is unmatched.",
    rating: 5
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + 3).concat(
    testimonials.slice(0, Math.max(0, (currentIndex + 3) - testimonials.length))
  );

  return (
    <motion.section 
      className="py-20 px-6 bg-gradient-to-b from-deep-charcoal to-royal-black"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 
            className="text-4xl lg:text-5xl text-metallic-gold mb-6 tracking-widest"
            style={{ 
              fontFamily: "'Cormorant Garamond', serif",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              fontWeight: "600"
            }}
          >
            Royal Testimonials
          </h2>
          <motion.div 
            className="w-32 h-1 bg-gradient-to-r from-transparent via-metallic-gold to-transparent mx-auto rounded-full mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: "8rem" }}
            transition={{ duration: 2, delay: 0.3 }}
            viewport={{ once: true }}
          />
          <motion.p 
            className="text-lg text-ivory-white max-w-2xl mx-auto leading-relaxed"
            style={{ 
              fontFamily: "'Poppins', sans-serif", 
              fontWeight: "300"
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          >
            Hear the stories from our distinguished clientele
          </motion.p>
        </motion.div>
        
        {/* Animated Testimonials Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentIndex}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              {visibleTestimonials.map((testimonial, index) => (
                <motion.div
                  key={`${currentIndex}-${index}`}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1,
                    ease: "easeOut"
                  }}
                >
                  <Card className="bg-gradient-to-br from-royal-black to-deep-charcoal border-4 border-metallic-gold/60 hover:border-metallic-gold transition-all duration-500 backdrop-blur-sm h-full group">
                    <CardContent className="p-8 text-center space-y-6 relative overflow-hidden">
                      {/* Animated Golden frame effect with glow */}
                      <motion.div 
                        className="absolute inset-0 border-2 border-metallic-gold/30 rounded-lg m-2 pointer-events-none"
                        animate={{ 
                          boxShadow: [
                            "0 0 20px rgba(212, 175, 55, 0.2)",
                            "0 0 40px rgba(212, 175, 55, 0.4)",
                            "0 0 20px rgba(212, 175, 55, 0.2)"
                          ]
                        }}
                        transition={{ 
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                      
                      {/* Quote Icon with pulse animation */}
                      <motion.div 
                        className="flex justify-center"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                      >
                        <motion.div 
                          className="w-14 h-14 bg-gradient-to-br from-metallic-gold to-metallic-gold/80 rounded-full flex items-center justify-center shadow-lg"
                          animate={{ 
                            scale: [1, 1.1, 1],
                          }}
                          transition={{ 
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          <span className="text-royal-black text-3xl font-serif">"</span>
                        </motion.div>
                      </motion.div>
                      
                      {/* Quote Text with typewriter effect */}
                      <motion.blockquote 
                        className="text-ivory-white leading-relaxed italic min-h-[120px] flex items-center text-center"
                        style={{ 
                          fontFamily: "'Poppins', sans-serif", 
                          fontWeight: "300"
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                      >
                        "{testimonial.quote}"
                      </motion.blockquote>
                      
                      {/* Animated Rating Stars */}
                      <motion.div 
                        className="flex justify-center space-x-1"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                      >
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <motion.span 
                            key={i}
                            className="text-metallic-gold text-xl"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ 
                              duration: 0.3, 
                              delay: 0.8 + (i * 0.1)
                            }}
                            whileHover={{ 
                              scale: 1.2,
                              textShadow: "0 0 10px rgba(212, 175, 55, 0.8)"
                            }}
                          >
                            ★
                          </motion.span>
                        ))}
                      </motion.div>
                      
                      {/* Customer Info */}
                      <motion.div 
                        className="space-y-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.9 }}
                      >
                        <h4 
                          className="text-ivory-white text-lg"
                          style={{ 
                            fontFamily: "'Cormorant Garamond', serif",
                            fontWeight: "500"
                          }}
                        >
                          {testimonial.name}
                        </h4>
                        <p 
                          className="text-pearl-grey text-sm italic"
                          style={{ 
                            fontFamily: "'Poppins', sans-serif", 
                            fontWeight: "300"
                          }}
                        >
                          {testimonial.location}
                        </p>
                      </motion.div>
                      
                      {/* Animated Pearl grey accent line */}
                      <motion.div 
                        className="w-16 h-0.5 bg-gradient-to-r from-transparent via-pearl-grey to-transparent mx-auto"
                        initial={{ width: 0 }}
                        animate={{ width: "4rem" }}
                        transition={{ duration: 0.8, delay: 1 }}
                      />
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
          
          {/* Carousel Navigation Dots */}
          <motion.div 
            className="flex justify-center space-x-3 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          >
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-metallic-gold shadow-lg shadow-metallic-gold/50' 
                    : 'bg-metallic-gold/30 hover:bg-metallic-gold/60'
                }`}
                onClick={() => setCurrentIndex(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </motion.div>
        </div>
        
        {/* Animated Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.p 
            className="text-ivory-white mb-8 text-lg"
            style={{ 
              fontFamily: "'Poppins', sans-serif", 
              fontWeight: "300"
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          >
            Join thousands of satisfied customers who have discovered their signature scent
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            viewport={{ once: true }}
          >
            <motion.button 
              className="bg-metallic-gold text-royal-black hover:bg-metallic-gold/90 px-8 py-4 text-lg font-medium transition-all duration-300 rounded-md border-2 border-metallic-gold shadow-lg gold-glow"
              style={{ 
                fontFamily: "'Poppins', sans-serif",
                fontWeight: "500",
                textTransform: "uppercase",
                letterSpacing: "0.05em"
              }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 30px rgba(212, 175, 55, 0.6)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Story
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}