import React from 'react'
import './Categories.css'


const categories = [
    {
        id: 1,
        name: "Plants",
        img: "https://cdn.shopify.com/s/files/1/0579/7924/0580/files/Plants_R.png?v=1661741653"
    },
    {
        id: 2,
        name: "Seeds",
        img: "https://cdn.shopify.com/s/files/1/0579/7924/0580/files/Seeds_R.png?v=1661741675"
    },
    {
        id: 3,
        name: "Planters",
        img: "https://cdn.shopify.com/s/files/1/0579/7924/0580/files/Planters_R.png?v=1661741699"
    },
    {
        id: 4,
        name: "Plant Care",
        img: "https://cdn.shopify.com/s/files/1/0579/7924/0580/files/Plant_Care_R.png?v=1661741723"
    }
]

function Categories() {
  return (
    <div className='home-cateogries-container'>
        <h1>Type of Plants</h1>

        <div className='categories-row'>
            {
              categories.map(category => (
                    <div className='category-cards' key={category.id}>
                    <img src={category.img} alt={category.name} />
                    <p className='name'><h4>{category.name}</h4></p>
                    </div>
              ))
            }
        </div>
    </div>
  )
}

export default Categories