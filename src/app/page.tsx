import { About } from '@/components/About'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { ProductGrid } from '@/components/ProductGrid'
import { Testimonials } from '@/components/Testimonials'
import React from 'react'

const page = () => {
  return (
    <div>
      <Header/>
      <ProductGrid/>
      <About/>
      <Testimonials/>
    </div>
  )
}

export default page
