import React from 'react'
import './NewArrivals.css'
const newArrivalItems = [
    {
        id:1,
        name:'Broken Heart Plant',
        img:"https://cdn.shopify.com/s/files/1/0579/7924/0580/products/philodendronbrokenheart_45_1.png?v=1661318401&width=375",
        newPrice:299,
        oldPrice:499,
    },
    {
        id:2,
        name:'Jade Plant Mini',
        img:"https://cdn.shopify.com/s/files/1/0579/7924/0580/products/crassulagreenmini_45_1.png?v=1661335338&width=375",
        newPrice:239,
        oldPrice:399,
    },    
    {
        id:3,
        name:'Fittonia Green Plant',
        img:"https://cdn.shopify.com/s/files/1/0579/7924/0580/products/fittoniagreennew_45.png?v=1662822948&width=375",
        newPrice:299,
        oldPrice:499,
    },
    {
        id:4,
        name:'Lucky Bamboo Plant',
        img:"https://cdn.shopify.com/s/files/1/0579/7924/0580/products/luckybamboo3layer_45_jpg.png?v=1661320811&width=375",
        newPrice:399,
        oldPrice:499,
    },
]
function NewArrivals() {
  return (
    <div className='home-newItems-container'>
        <p className='section-heading'> NewArrivals</p>     
        <div className="newItems-row">
            {
                newArrivalItems.map(newItems => (
                    <div className='newItems-cards' key={newItems.id}>
                    <img src={newItems.img} alt={newItems.name} />
                    <p className='newItems-name'>{newItems.name}</p>
                    <div className='price-tag'>
                    <span className='newItems-old-price'>Rs{newItems.oldPrice}</span>
                    <span className='newItems-new-price'>Rs{newItems.newPrice} </span>
                    </div>
                    {/* <button className='btn btn-success button-newItems-wrapper'>Add to Cart</button> */}
                    <div className="addToCart">
                        Add to Cart
                    </div>
                    </div>
              ))
            }            
        </div>       
    </div>
  )
}

export default NewArrivals