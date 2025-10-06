"use client"

import { motion } from "motion/react";
import { useState } from "react";
import perfumes from "./products_data/products";
import { ProductCard } from "./ProductCard";
import { Product } from "./products_data/types";
import { FaArrowRight, FaEye } from "react-icons/fa";
import Link from "next/link";


export function ProductGrid() {
  // Random 5 products select karna
  const getRandomProducts = () => {
    const shuffled = [...perfumes].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 5);
  };

  const [displayedProducts] = useState(() => getRandomProducts());

  // Add to cart handler
  const handleAddToCart = (product: Product, size: '30ml' | '50ml') => {
    console.log(`Added ${product.name} (${size}) to cart`);
    // TODO: Implement actual cart functionality
  };

  return (
    <motion.section 
      className="py-20 px-6 bg-gradient-to-b from-royal-black to-deep-charcoal"
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
          transition={{ duration: 1, delay: 0.2 }}
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
            Royal Collection
          </h2>
          <motion.div 
            className="w-32 h-1 bg-gradient-to-r from-transparent via-metallic-gold to-transparent mx-auto rounded-full mb-8 draw-line"
            initial={{ width: 0 }}
            whileInView={{ width: "8rem" }}
            transition={{ duration: 2, delay: 0.5 }}
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
            transition={{ duration: 1, delay: 0.7 }}
            viewport={{ once: true }}
          >
            Discover our exquisite range of premium fragrances, each crafted to tell its own unique story
          </motion.p>
        </motion.div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8">
          {displayedProducts.map((product, index) => (
            <ProductCard
              key={product.slug}
              product={product}
              index={index}
              showSizeSelector={true}
              showDualPrice={false}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>

        {/* View All Products Button */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Link href="/products">
            <motion.button
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-metallic-gold to-yellow-500 hover:from-yellow-500 hover:to-metallic-gold text-royal-black font-bold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-metallic-gold/30 border-2 border-metallic-gold/50 hover:border-metallic-gold focus:outline-none focus:ring-4 focus:ring-metallic-gold/30 overflow-hidden"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: "600",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                fontSize: "16px",
              }}
              whileHover={{ 
                y: -2,
                transition: { duration: 0.2 }
              }}
              whileTap={{ 
                scale: 0.98,
                transition: { duration: 0.1 }
              }}
            >
              {/* Animated background shimmer */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
              
              {/* Button content */}
              <div className="relative flex items-center gap-3">
                <FaEye className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                <span>View All Perfumes</span>
                <motion.div
                  className="transition-transform duration-300 group-hover:translate-x-1"
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                >
                  <FaArrowRight className="w-4 h-4" />
                </motion.div>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-metallic-gold/0 via-metallic-gold/20 to-metallic-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.button>
          </Link>

          {/* Decorative elements */}
          <motion.div 
            className="mt-6 flex items-center justify-center gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-metallic-gold/50"></div>
            <div className="w-2 h-2 bg-metallic-gold rounded-full animate-pulse"></div>
            <div className="w-8 h-px bg-gradient-to-l from-transparent to-metallic-gold/50"></div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}