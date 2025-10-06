'use client'

import { motion } from "motion/react";
import perfumes from "@/components/products_data/products";
import { useState } from "react";
import { Product } from "@/components/products_data/types";
import { ProductCard } from "@/components/ProductCard";

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Add to cart handler (for future use if needed on this page)
  const handleAddToCart = (product: Product, size: '30ml' | '50ml') => {
    console.log(`Added ${product.name} (${size}) to cart`);
    // TODO: Implement actual cart functionality
  };

  // View details handler
  const handleViewDetails = (product: Product) => {
    console.log(`View details for ${product.name}`);
    // TODO: Navigate to product detail page
  };

  // Get unique categories
  const categories = ['All', ...Array.from(new Set(perfumes.map(p => p.category)))];

  // Filter products based on category and search
  const filteredProducts = perfumes.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-royal-black">
      {/* Hero Section */}
      <motion.section 
        className="py-20 px-6 bg-gradient-to-b from-royal-black via-deep-charcoal to-royal-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h1 
              className="text-5xl lg:text-7xl text-metallic-gold mb-6 tracking-widest"
              style={{ 
                fontFamily: "'Cormorant Garamond', serif",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                fontWeight: "600"
              }}
            >
              Royal Collection
            </h1>
            <motion.div 
              className="w-32 h-1 bg-gradient-to-r from-transparent via-metallic-gold to-transparent mx-auto rounded-full mb-8"
              initial={{ width: 0 }}
              animate={{ width: "8rem" }}
              transition={{ duration: 2, delay: 0.5 }}
            />
            <motion.p 
              className="text-xl text-ivory-white max-w-3xl mx-auto leading-relaxed"
              style={{ 
                fontFamily: "'Poppins', sans-serif", 
                fontWeight: "300"
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              Discover our complete range of premium fragrances. Each bottle tells a unique story, 
              crafted with passion and precision to create unforgettable olfactory experiences.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Filters Section */}
      <motion.section 
        className="py-12 px-6 bg-deep-charcoal"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="container mx-auto">
          <div className="flex flex-col gap-6 items-center justify-center">
            {/* Search Bar */}
            <motion.div 
              className="relative w-full max-w-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <input
                type="text"
                placeholder="Search fragrances..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 bg-royal-black border-2 border-metallic-gold/50 rounded-lg text-ivory-white placeholder-pearl-grey focus:border-metallic-gold focus:outline-none transition-all duration-300 pr-12"
                style={{ 
                  fontFamily: "'Poppins', sans-serif", 
                  fontWeight: "300"
                }}
              />
              {searchQuery ? (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-metallic-gold hover:text-ivory-white transition-colors duration-300"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              ) : (
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-metallic-gold">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              )}
            </motion.div>

            {/* Category Filter */}
            <motion.div 
              className="flex flex-wrap gap-3 justify-center"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-metallic-gold text-royal-black shadow-lg shadow-metallic-gold/30'
                      : 'bg-royal-black text-metallic-gold border-2 border-metallic-gold/50 hover:border-metallic-gold'
                  }`}
                  style={{ 
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: "500"
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category}
                </motion.button>
              ))}
            </motion.div>
          </div>

          {/* Results Count */}
          <motion.div 
            className="mt-6 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <p 
              className="text-pearl-grey"
              style={{ 
                fontFamily: "'Poppins', sans-serif", 
                fontWeight: "300"
              }}
            >
              Showing {filteredProducts.length} of {perfumes.length} fragrances
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Products Grid */}
      <motion.section 
        className="py-20 px-6 bg-gradient-to-b from-deep-charcoal to-royal-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <div className="container mx-auto">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8">
              {filteredProducts.map((product, index) => (
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
          ) : (
            <motion.div 
              className="text-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h3 
                className="text-2xl text-metallic-gold mb-4"
                style={{ 
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: "500"
                }}
              >
                No fragrances found
              </h3>
              <p 
                className="text-pearl-grey"
                style={{ 
                  fontFamily: "'Poppins', sans-serif", 
                  fontWeight: "300"
                }}
              >
                Try adjusting your search or filter criteria
              </p>
            </motion.div>
          )}
        </div>
      </motion.section>
    </div>
  );
}

