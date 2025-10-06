"use client"
import { Button } from "./ui/button";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import Link from "next/link";

export function Header() {
  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden bg-royal-black">
      {/* Animated Spotlight effect background */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-gradient-radial from-metallic-gold/10 via-metallic-gold/5 to-transparent rounded-full blur-3xl"
          style={{ x: '-50%', y: '-50%' }}
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-1/3 left-1/3 w-96 h-96 bg-metallic-gold/5 rounded-full blur-2xl"
          animate={{ 
            scale: [0.8, 1.3, 0.8],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-metallic-gold/8 rounded-full blur-xl"
          animate={{ 
            scale: [1, 0.7, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
      
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Left side - Animated text content */}
          <motion.div 
            className="flex-1 space-y-8"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Arabic Logo with English */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3 }}
            >
              <div className="space-y-2">
                <motion.h1 
                  className="text-7xl lg:text-9xl font-bold text-metallic-gold drop-shadow-2xl"
                  style={{ 
                    fontFamily: "'Libre Baskerville', serif",
                    letterSpacing: "0.05em"
                  }}
                  animate={{ 
                    textShadow: [
                      "0 0 20px rgba(212, 175, 55, 0.5)",
                      "0 0 40px rgba(212, 175, 55, 0.8)",
                      "0 0 20px rgba(212, 175, 55, 0.5)"
                    ]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  عبير
                </motion.h1>
                <motion.div 
                  className="w-32 h-1 bg-gradient-to-r from-transparent via-metallic-gold to-transparent mx-auto rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "8rem" }}
                  transition={{ duration: 2, delay: 0.8 }}
                />
              </div>
              
              <motion.h2 
                className="text-3xl lg:text-4xl text-metallic-gold tracking-widest"
                style={{ 
                  fontFamily: "'Cormorant Garamond', serif",
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  fontWeight: "600"
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
              >
                Abeer Essence
              </motion.h2>
            </motion.div>
            
            {/* Animated Slogan with Gold Shimmer */}
            <motion.div
              className="gold-shimmer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              <p 
                className="text-xl lg:text-2xl text-ivory-white italic tracking-wide"
                style={{ 
                  fontFamily: "'Poppins', sans-serif", 
                  fontWeight: "300",
                  fontStyle: "italic"
                }}
              >
                A Story in a Bottle
              </p>
            </motion.div>
            
            {/* CTA Buttons with Glow Effects */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center pt-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2 }}
            >
              {/* Shop Now Button */}
              {/* <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  className="bg-metallic-gold text-royal-black hover:bg-metallic-gold/90 px-8 py-4 text-lg font-medium transition-all duration-300 shadow-lg border-2 border-metallic-gold gold-glow"
                  style={{ 
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: "500",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em"
                  }}
                >
                  Shop Now
                </Button>
              </motion.div> */}

              {/* Explore Collection Button */}
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/products">
                <Button 
                  variant="outline" 
                  className="border-2 border-metallic-gold text-metallic-gold hover:bg-metallic-gold hover:text-royal-black px-8 py-4 text-lg font-medium transition-all duration-300 bg-transparent hover:shadow-lg hover:shadow-metallic-gold/30"
                  style={{ 
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: "500",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em"
                  }}
                >
                  Explore Collection
                </Button>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Right side - Animated Perfume bottle */}
          <motion.div 
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          >
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {/* Animated Golden outline effects */}
              <motion.div 
                className="absolute inset-0 border-4 border-metallic-gold/30 rounded-2xl"
                animate={{ 
                  rotate: [3, -3, 3],
                  scale: [1.05, 1.1, 1.05]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div 
                className="absolute inset-0 border-2 border-metallic-gold/50 rounded-xl"
                animate={{ 
                  rotate: [-2, 2, -2],
                  scale: [1.1, 1.05, 1.1]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Animated Spotlight glow around bottle */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-metallic-gold/20 via-metallic-gold/10 to-transparent rounded-2xl blur-2xl scale-125"
                animate={{ 
                  opacity: [0.5, 1, 0.5],
                  scale: [1.25, 1.4, 1.25]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Perfume bottle image with rotation on hover */}
              <motion.div 
                className="relative z-10 max-w-sm lg:max-w-md"
                whileHover={{ 
                  rotateY: 15,
                  rotateX: 5
                }}
                transition={{ duration: 0.4 }}
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1610109790326-9a21dfe969b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwZXJmdW1lJTIwYm90dGxlJTIwZ29sZCUyMGJsYWNrfGVufDF8fHx8MTc1NjIwNTA2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Luxury Perfume Bottle"
                  className="w-full h-auto object-contain drop-shadow-2xl rounded-xl floating"
                />
                
                {/* Golden border overlay */}
                <div className="absolute inset-0 border-2 border-metallic-gold/40 rounded-xl pointer-events-none"></div>
              </motion.div>
              
              {/* Animated floating golden particles */}
              <motion.div 
                className="absolute top-8 right-8 w-3 h-3 bg-metallic-gold rounded-full shadow-lg sparkle"
                animate={{ 
                  y: [0, -20, 0],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div 
                className="absolute bottom-16 left-8 w-2 h-2 bg-metallic-gold/80 rounded-full shadow-md sparkle"
                animate={{ 
                  y: [0, -15, 0],
                  x: [0, 10, 0],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              />
              <motion.div 
                className="absolute top-1/2 right-4 w-1.5 h-1.5 bg-metallic-gold rounded-full shadow-sm sparkle"
                animate={{ 
                  scale: [0.8, 1.2, 0.8],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
              <motion.div 
                className="absolute top-1/4 left-12 w-1 h-1 bg-metallic-gold/60 rounded-full sparkle"
                animate={{ 
                  y: [0, -10, 0],
                  opacity: [0.4, 0.8, 0.4]
                }}
                transition={{ 
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5
                }}
              />
            </motion.div>
          </motion.div>
        </div>
        
        {/* Animated scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ y: [0, 10, 0], opacity: 1 }}
          transition={{ 
            y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
            opacity: { duration: 1, delay: 2.5 }
          }}
        >
          <div className="w-6 h-10 border-2 border-metallic-gold rounded-full flex justify-center backdrop-blur-sm">
            <motion.div 
              className="w-1 h-3 bg-metallic-gold rounded-full mt-2"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
        </motion.div>
      </div>
    </header>
  );
}