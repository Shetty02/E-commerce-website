import React from 'react'
import './Footer.css'
import {ReactComponent as Facebook} from '../UI/icons/Facebook.svg'
import {ReactComponent as Twitter} from '../UI/icons/Twitter.svg'
import {ReactComponent as Instagram} from '../UI/icons/Instagram.svg'
import {ReactComponent as Linkedin} from '../UI/icons/Linkedin.svg'
import {ReactComponent as YouTube} from '../UI/icons/YouTube.svg'
function Footer() {
  return (
    <div className="footer">
    <div className="footer-header">
      <div className="footer-header-item">
        <img src="https://cdn.shopify.com/s/files/1/0579/7924/0580/files/imgpsh_fullsize_animjj.png?v=1656424471" alt="" />
        <span>plants grow people</span>
      </div>
      <div className="footer-header-item">
        <img src="https://cdn.shopify.com/s/files/1/0579/7924/0580/files/imgpsh_fullsize_animjj.png?v=1656424471" alt="" />
       <span>plants grow people</span>       
      </div>
      <div className="footer-header-item">
        <img src="https://cdn.shopify.com/s/files/1/0579/7924/0580/files/imgpsh_fullsize_animjj.png?v=1656424471" alt="" />
        <span>plants grow people</span>
      </div>
      <div className="footer-header-item">
        <img src="https://cdn.shopify.com/s/files/1/0579/7924/0580/files/imgpsh_fullsize_animjj.png?v=1656424471" alt="" />
        <span>plants grow people</span>
      </div>
      <div className="footer-header-item">
        <img src="https://cdn.shopify.com/s/files/1/0579/7924/0580/files/imgpsh_fullsize_animjj.png?v=1656424471" alt="" />
        <span>plants grow people</span>
      </div>
      <div className="footer-header-item">
        <img src="https://cdn.shopify.com/s/files/1/0579/7924/0580/files/imgpsh_fullsize_animjj.png?v=1656424471" alt="" />
        <span>plants grow people</span>
      </div>
    </div>
    <div className="footer-container">
      <div className="footer-section footer-section-left">
        <div className="footer-section-column">
        <p className='footer-section-column-head'>ABOUT US </p> 
         <p>Our Story </p>
         <p>Contact Us</p>  
         <p>Locate Store</p> 
        </div>
        <div className="footer-section-column">
      <p className='footer-section-column-head'>CUSTOMER CARE</p>
      <p>Track Order</p>
          <p>Shipping Policy</p>
          <p>Terms and Conditions</p>
          <p>Privacy Policy</p>
          <p> FAQs</p>
          <p>Terms of Service</p>
          <p>Refund policy</p>
        </div>
        <div className="footer-section-column">
        <p className='footer-section-column-head'>OFFERS & REWARDS</p>
        <p>Plant Parent Club</p>
        <p>Ugaoo Coupons</p>
        </div>
      </div>
      <div className="footer-section footer-section-right">
        <div className="footer-section-column">
        <p className='footer-section-column-head'> SIGN UP FOR OUR NEWSLETTER </p>
For plant care tips, our featured plant of <br />
 the week, exclusive offers and discounts
 <p className='footer-section-column-head'>FOLLOW US</p>
 <div className='icon-List'>
<Facebook width={"20px"}/>
<Twitter width='20px'/>
<Instagram width='20px'/>
<Linkedin width='20px'/>
<YouTube width='20px'/>
 </div>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      Made with ❤️ by Nehal
    </div>
    </div>
  )
}

export default Footer