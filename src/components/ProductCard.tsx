'use client'

import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";
import { useState } from "react";
import { Product } from "./products_data/types";
import { FaWhatsapp, FaShoppingCart } from "react-icons/fa";

// WhatsApp Configuration
const WHATSAPP_NUMBER = "+923282213631"; // Replace with your WhatsApp Business number
const STORE_NAME = "Abeer Essence";

interface ProductCardProps {
  product: Product;
  index: number;
  showSizeSelector?: boolean;
  showDualPrice?: boolean;
  onAddToCart?: (product: Product, size: '30ml' | '50ml') => void;
  onViewDetails?: (product: Product) => void;
}

export function ProductCard({
  product,
  index,
  showSizeSelector = true,
  showDualPrice = false,
  onAddToCart,
  onViewDetails,
}: ProductCardProps) {
  const [selectedSize, setSelectedSize] = useState<'30ml' | '50ml'>('30ml');

  const handleSizeChange = (size: '30ml' | '50ml') => {
    setSelectedSize(size);
  };

  const handleBuyNowClick = () => {
    const price = selectedSize === '30ml' ? product["Price (30ml)"] : product["Price (50ml)"];
    
    // Create WhatsApp message with product details
    const whatsappMessage = `Assalam-o-Alaikum! I'm interested in purchasing from ${STORE_NAME}:\n\n🛍️ *Product:* ${product.name}\n📝 *Description:* ${product.description}\n💰 *Price:* ${price}\n📏 *Size:* ${selectedSize}\n🏷️ *Category:* ${product.category}\n\nI would like to know more details about this product:\n• Is it available in stock?\n• What are the delivery options?\n• Any discounts or offers available?\n• What is the return/exchange policy?\n\nPlease provide more information so I can proceed with the purchase. Thank you!`;
    
    // URL encode the message
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
    
    // Also call the original handler if provided
    if (onAddToCart) {
      onAddToCart(product, selectedSize);
    }
  };

  const handleViewDetailsClick = () => {
    if (onViewDetails) {
      onViewDetails(product);
    }
  };

  return (
    <motion.div
      key={product.slug}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      viewport={{ once: true }}
      whileHover={{
        y: -20,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
    >
      <Card className="bg-royal-black border-2 border-metallic-gold/50 hover:border-metallic-gold transition-all duration-500 backdrop-blur-sm overflow-hidden group">
        <CardContent className="p-6 text-center space-y-4 relative">
          {/* Gold shine sweep effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-metallic-gold/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>

          {/* Product Image with sparkle effects */}
          <motion.div
            className="relative mb-6"
            whileHover={{
              rotateY: 10,
              scale: 1.05,
            }}
            transition={{ duration: 0.4 }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-metallic-gold/10 to-transparent rounded-lg"></div>
            <ImageWithFallback
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-lg"
            />
            {/* Soft glow around image */}
            <motion.div
              className="absolute inset-0 rounded-lg shadow-lg shadow-metallic-gold/10"
              whileHover={{
                boxShadow: "0 0 30px rgba(212, 175, 55, 0.4)",
              }}
              transition={{ duration: 0.3 }}
            />

            {/* Sparkle effects on hover */}
            <motion.div
              className="absolute top-2 right-2 w-2 h-2 bg-metallic-gold rounded-full"
              initial={{ opacity: 0, scale: 0 }}
              whileHover={{
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: 0.2,
              }}
            />
            <motion.div
              className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-metallic-gold/80 rounded-full"
              initial={{ opacity: 0, scale: 0 }}
              whileHover={{
                opacity: [0, 1, 0],
                scale: [0, 1.2, 0],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: 0.5,
              }}
            />
          </motion.div>

          {/* Product Name - Slide up animation */}
          <motion.h3
            className="text-lg text-metallic-gold min-h-[3rem] flex items-center justify-center"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: "500",
            }}
            initial={{ y: 20, opacity: 0.8 }}
            whileHover={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {product.name}
          </motion.h3>

          {/* Category Badge */}
          <motion.div
            className="inline-block"
            initial={{ scale: 0.8, opacity: 0.7 }}
            whileHover={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <span
              className="px-3 py-1 bg-metallic-gold/20 text-metallic-gold text-xs rounded-full border border-metallic-gold/30"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: "400",
              }}
            >
              {product.category}
            </span>
          </motion.div>

          {/* Description - Slide up animation */}
          <motion.p
            className="text-sm text-ivory-white/80 min-h-[2.5rem] leading-relaxed "
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: "300",
            }}
            initial={{ y: 15, opacity: 0.7 }}
            whileHover={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            {product.description}
          </motion.p>

          {/* Size Selector - Only show if enabled */}
          {showSizeSelector && (
            <motion.div
              className="flex gap-2 justify-center"
              initial={{ opacity: 0.8 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <button
                onClick={() => handleSizeChange('30ml')}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-all duration-200 hover:scale-105 ${
                  selectedSize === '30ml'
                    ? 'bg-metallic-gold text-royal-black shadow-lg shadow-metallic-gold/30'
                    : 'bg-deep-charcoal text-metallic-gold border border-metallic-gold/50 hover:border-metallic-gold'
                }`}
              >
                30ml
              </button>
              <button
                onClick={() => handleSizeChange('50ml')}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-all duration-200 hover:scale-105 ${
                  selectedSize === '50ml'
                    ? 'bg-metallic-gold text-royal-black shadow-lg shadow-metallic-gold/30'
                    : 'bg-deep-charcoal text-metallic-gold border border-metallic-gold/50 hover:border-metallic-gold'
                }`}
              >
                50ml
              </button>
            </motion.div>
          )}

          {/* Price Display - Different for home vs products page */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0.8 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <motion.div
              className="bg-gradient-to-r from-metallic-gold/20 to-metallic-gold/10 border border-metallic-gold/50 rounded-lg px-4 py-2"
              whileHover={{
                borderColor: "rgba(212, 175, 55, 0.8)",
                boxShadow: "0 0 15px rgba(212, 175, 55, 0.3)",
              }}
              transition={{ duration: 0.3 }}
            >
              {showDualPrice ? (
                // Products page - show both prices
                <div className="space-y-1">
                  <p
                    className="text-sm text-metallic-gold"
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: "400",
                    }}
                  >
                    {product["Price (30ml)"]}
                  </p>
                  <p
                    className="text-sm text-metallic-gold"
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: "400",
                    }}
                  >
                    {product["Price (50ml)"]}
                  </p>
                </div>
              ) : (
                // Home page - show selected size price
                <p
                  className="text-xl text-metallic-gold"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: "600",
                  }}
                >
                  {selectedSize === '30ml' ? product["Price (30ml)"] : product["Price (50ml)"]}
                </p>
              )}
            </motion.div>

            {/* Action Buttons */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              {onViewDetails ? (
                // Products page - View Details button
                <Button
                  onClick={handleViewDetailsClick}
                  className="w-full bg-metallic-gold text-royal-black hover:bg-metallic-gold/90 transition-all duration-300 border border-metallic-gold hover:shadow-lg hover:shadow-metallic-gold/30"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: "500",
                    textTransform: "uppercase",
                    letterSpacing: "0.03em",
                  }}
                >
                  View Details
                </Button>
              ) : (
                // Home page - Buy Now button with WhatsApp integration
                <Button
                  onClick={handleBuyNowClick}
                  className="w-full bg-gradient-to-r from-metallic-gold to-yellow-500 hover:from-yellow-500 hover:to-metallic-gold text-royal-black font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-metallic-gold/30 border-2 border-metallic-gold/50 hover:border-metallic-gold focus:outline-none focus:ring-4 focus:ring-metallic-gold/30"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: "600",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    fontSize: "14px",
                  }}
                >
                  <div className="flex items-center justify-center gap-2">
                    <FaWhatsapp className="w-5 h-5" />
                    <span>Buy Now</span>
                    <FaShoppingCart className="w-4 h-4" />
                  </div>
                </Button>
              )}
            </motion.div>
          </motion.div>

          {/* Pearl grey accent line */}
          <motion.div
            className="w-16 h-0.5 bg-gradient-to-r from-transparent via-pearl-grey to-transparent mx-auto"
            initial={{ width: 0 }}
            whileHover={{ width: "4rem" }}
            transition={{ duration: 0.3 }}
          />
        </CardContent>
      </Card>
    </motion.div>
  );
}

