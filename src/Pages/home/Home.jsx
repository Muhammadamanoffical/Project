/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'


import { Link } from 'react-router-dom'
import Layout from '../../Components/navbar/layout/Layout'
import HeroSection from '../../Components/navbar/herosection/Herosection'
import Filter from '../../Components/navbar/filter/Filter'
import ProductCard from '../../Components/navbar/productCard/ProductCard'
import Track from '../../Components/navbar/track/Track'
import Testimonial from '../../Components/navbar/testimonial/Testimonial'


function Home() {
  return (
    <Layout>
      <HeroSection />
      <Filter />
      <ProductCard/>
      {
        alert("admin id =(aman@gmail.com)password=(12345678), user id=(ali@gmail.com)password(12345678)")
      }
      <div className="flex justify-center -mt-10 mb-4">
        <Link to={'/allproducts'}>
          <button className=' bg-gray-300 px-5 py-2 rounded-xl'>See more</button>
        </Link>
      </div>
      <Track />
      < Testimonial/>
    </Layout>
  )
}

export default Home