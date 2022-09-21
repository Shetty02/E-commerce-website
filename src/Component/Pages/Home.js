import React from 'react'
import HeaderCarousel from '../UI/home/HeaderCarousel'
import Categories from '../UI/home/Categories'
import NewArrivals from '../UI/home/NewArrivals'
import BestSellers from '../UI/home/BestSellers'
function Home() {
  return (
    <div>
   <HeaderCarousel/>
   <Categories/>
   <NewArrivals/>
   <BestSellers/>
    </div>
  )
}

export default Home