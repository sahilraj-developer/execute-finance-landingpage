import React from 'react'
import "./Testimonials.css"
import user1 from './images/user1.jpeg'
import user2 from './images/user2.jpeg'
import user3 from './images/user3.jpeg'

const Testimonials = () => {
  return (
    <div className="testimonials" id='testimonials'>
        <div className="container">
            <h2>Testimonials</h2>
            <span className='line'></span>
            <div className="content">
                <div className="card">
                    <img src={user1} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo dolore vero 
                    repellendus? Excepturi blanditiis perferendis rerum officia numquam 
                   </p>
                    <p><span>Sahil</span></p>
                    <p>BCA</p>
                </div>
                <div className="card">
                    <img src={user2} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo dolore vero 
                    repellendus? Excepturi blanditiis perferendis rerum officia numquam</p>
                    <p><span>Raj</span></p>
                    <p>MCA</p>
                </div>
                <div className="card">
                    <img src={user3} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo dolore vero 
                    repellendus? Excepturi blanditiis perferendis rerum officia numquam</p>
                    <p><span>Sahil raj</span></p>
                    <p>B.Tech</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonials