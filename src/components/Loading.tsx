'use client'

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function Loading() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if the page is fully loaded
    const handleLoad = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000); // Minimum loading time of 2 seconds for smooth animation
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-royal-black"
        >
          <div className="relative">
            {/* Main Logo */}
            <motion.h1
              className="text-6xl text-metallic-gold mb-8"
              style={{
                fontFamily: "'Libre Baskerville', serif",
                letterSpacing: "0.05em"
              }}
              animate={{
                scale: [1, 1.1, 1],
                textShadow: [
                  "0 0 20px rgba(212, 175, 55, 0.3)",
                  "0 0 30px rgba(212, 175, 55, 0.5)",
                  "0 0 20px rgba(212, 175, 55, 0.3)"
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              عبير
            </motion.h1>

            {/* Loading Bar */}
            <div className="relative w-48 h-1 bg-deep-charcoal rounded-full overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 h-full bg-metallic-gold"
                animate={{
                  width: ["0%", "100%"],
                }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Infinity
                }}
              />
            </div>

            {/* Decorative Elements */}
            <motion.div
              className="absolute -top-8 -right-8 w-4 h-4 border border-metallic-gold rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute -bottom-8 -left-8 w-4 h-4 bg-metallic-gold rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}