'use client'
import { useEffect, useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";

// Add your about_img images here (filenames must exist in public/about_img)
const aboutImages = [
  "https://images.unsplash.com/photo-1632495112970-30ce8340c2be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmcmFncmFuY2UlMjBib3R0bGUlMjBjcnlzdGFsfGVufDF8fHx8MTc1NjIwMTY0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "/about_img/front-view-rectangular-cologne-bottle-branch-rotten-wood-beige-background.jpg",
  "/about_img/shadow-resin-oud-wood.png",
  "/about_img/top-view-valentines-day-present-fragnance-inside-package-blue-surface-color-marriage-couple-gift-perfume.jpg",
  "/about_img/urban-vibe-udv.png",
  // Add more if you have
];

export function About() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % aboutImages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section 
      className="py-20 px-6 bg-gradient-to-b from-deep-charcoal via-royal-black to-deep-charcoal"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto">
        {/* Section Header with Animated Divider */}
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
            Our Royal Story
          </h2>
          <motion.div 
            className="w-32 h-1 bg-gradient-to-r from-transparent via-metallic-gold to-transparent mx-auto rounded-full mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: "8rem" }}
            transition={{ duration: 2, delay: 0.3 }}
            viewport={{ once: true }}
          />
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left side - Text content with fade up animations */}
          <div className="space-y-8">
            <div className="space-y-6">
              <motion.p 
                className="text-lg text-ivory-white leading-relaxed"
                style={{ 
                  fontFamily: "'Poppins', sans-serif", 
                  fontWeight: "300"
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Born from a passion for luxury and elegance, Abeer Essence represents the pinnacle of 
                perfumery artistry. Each fragrance in our collection is more than just a scent – it's 
                a carefully crafted narrative that speaks to the soul.
              </motion.p>
              
              <motion.p 
                className="text-lg text-ivory-white leading-relaxed"
                style={{ 
                  fontFamily: "'Poppins', sans-serif", 
                  fontWeight: "300"
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Our master perfumers blend the finest ingredients from around the world, creating 
                compositions that embody sophistication, mystery, and timeless appeal. From the bustling 
                souks of the Middle East to the lavender fields of Provence, we source only the most 
                precious materials.
              </motion.p>
              
              <motion.p 
                className="text-lg text-ivory-white leading-relaxed"
                style={{ 
                  fontFamily: "'Poppins', sans-serif", 
                  fontWeight: "300"
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                With Abeer Essence, you don't just wear a fragrance – you carry a story, a memory, 
                a piece of art that defines your unique presence in the world.
              </motion.p>
            </div>
            
            {/* Animated gold divider line */}
            <motion.div 
              className="w-32 h-px bg-gradient-to-r from-metallic-gold via-metallic-gold/50 to-transparent"
              initial={{ width: 0 }}
              whileInView={{ width: "8rem" }}
              transition={{ duration: 1.5, delay: 0.8 }}
              viewport={{ once: true }}
            />
          </div>
          
          {/* Right side - Animated Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="relative z-10"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <ImageWithFallback
                src={aboutImages[currentImageIndex]}
                alt="Luxury fragrance craftsmanship"
                className="w-full h-[400px] object-cover rounded-2xl shadow-2xl"
              />
              
              {/* Golden border overlay */}
              <motion.div 
                className="absolute inset-0 border-2 border-metallic-gold/40 rounded-2xl"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
              />
              
              {/* Subtle glow effect */}
              <motion.div 
                className="absolute inset-0 shadow-2xl shadow-metallic-gold/10 rounded-2xl"
                whileHover={{ 
                  boxShadow: "0 25px 50px -12px rgba(212, 175, 55, 0.25)"
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
            
            {/* Animated decorative golden elements */}
            <motion.div 
              className="absolute -top-4 -right-4 w-8 h-8 border-2 border-metallic-gold rounded-full bg-deep-charcoal/80 backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              animate={{ 
                rotate: [0, 360],
              }}
              transition={{ 
                duration: 0.5, 
                delay: 1,
                rotate: { duration: 10, repeat: Infinity, ease: "linear" }
              }}
            />
            <motion.div 
              className="absolute -bottom-4 -left-4 w-6 h-6 bg-metallic-gold rounded-full shadow-lg"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{ 
                duration: 0.5, 
                delay: 1.2,
                y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              }}
            />
            <motion.div 
              className="absolute top-1/3 -left-2 w-4 h-4 border border-metallic-gold rounded-full bg-deep-charcoal/60"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.4
              }}
              viewport={{ once: true }}
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.6, 1, 0.6]
              }}
            />
          </motion.div>
        </div>
        
        {/* Animated key values section */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          {[
            {
              icon: "✨",
              title: "Premium Quality", 
              description: "Sourced from the finest ingredients around the world, ensuring uncompromising quality in every bottle.",
              delay: 0.1
            },
            {
              icon: "👑",
              title: "Royal Heritage",
              description: "A legacy of timeless elegance and sophistication that transcends generations and cultures.",
              delay: 0.2
            },
            {
              icon: "🎨",
              title: "Artisan Craft",
              description: "Master perfumers who blend art and science to create unique olfactory experiences.",
              delay: 0.3
            }
          ].map((item, index) => (
            <motion.div 
              key={index}
              className="text-center bg-gradient-to-br from-deep-charcoal to-royal-black p-8 rounded-2xl border border-metallic-gold/20 hover:border-metallic-gold/40 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: item.delay }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 10px 25px -5px rgba(212, 175, 55, 0.1)"
              }}
            >
              <motion.div 
                className="w-20 h-20 bg-gradient-to-br from-metallic-gold to-metallic-gold/80 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
                whileHover={{ 
                  scale: 1.1,
                  rotate: 5
                }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-royal-black text-3xl">{item.icon}</span>
              </motion.div>
              <h4 
                className="text-metallic-gold mb-3 tracking-wider text-xl"
                style={{ 
                  fontFamily: "'Cormorant Garamond', serif",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em"
                }}
              >
                {item.title}
              </h4>
              <p 
                className="text-ivory-white leading-relaxed"
                style={{ 
                  fontFamily: "'Poppins', sans-serif", 
                  fontWeight: "300"
                }}
              >
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}