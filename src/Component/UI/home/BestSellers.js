import React from 'react'
import './BestSellers.css'

const bestSellerList = [
    {
        id: 1,
        name:"Aloe Blizzard Plant",
        img: "https://cdn.shopify.com/s/files/1/0579/7924/0580/products/aloeblizzard_top_1.png?v=1661328736&width=375",
        newPrice: 399,
        oldPrice: 499,
    },
    {
        id: 2,
        name:"Aloe Juvenna Plant",
        img: "https://cdn.shopify.com/s/files/1/0579/7924/0580/products/aloejuvenna_45_1.png?v=1661329460&width=375",
        newPrice: 399,
        oldPrice: 499,
    },
    {
        id: 3,
        name:"Aloe Vera Green Mini Plant",
        img: "https://cdn.shopify.com/s/files/1/0579/7924/0580/products/aloeveragreenmini_top_1.png?v=1661323067&width=375",
        newPrice: 399,
        oldPrice: 499,
    },
    {
        id: 4,
        name:"Aloe Vera Mini Plant",
        img: "https://cdn.shopify.com/s/files/1/0579/7924/0580/products/aloeveramini_45_1.png?v=1661323945&width=375",
        newPrice: 399,
        oldPrice: 499,
    },
]
function BestSellers() {
  return (
    <div className='home-bestSeller-container'>
        <p className='section-heading'> 
        <img src="https://cdn.shopify.com/s/files/1/0579/7924/0580/files/Bestseller-1_2x_9a883cf1-58ba-4c74-badf-f02924575b68_small.png?v=1656416175" alt="" />
        BestSellers</p>     
        <div className="bestseller-row">
            {
                bestSellerList.map(bestSellers => (
                    <div className='bestSellers-cards' key={bestSellers.id}>
                    <img src={bestSellers.img} alt={bestSellers.name} />
                    <p className='bestSellers-name'>{bestSellers.name}</p>
                    <div className='price-tag'>
                    <span className='bestSellers-old-price'>Rs{bestSellers.oldPrice}</span>
                    <span className='bestSellers-new-price'>Rs{bestSellers.newPrice} </span>
                    </div>
                    <button className=' button-wrapper'>Add to Cart</button>
                    </div>
              ))
            }            
        </div>       
    </div>
  )
}

export default BestSellers