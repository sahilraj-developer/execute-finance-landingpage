import React from 'react'
import './Demo.css'

const Demo = () => {
  return (
    <div className='demo' id='demo'>
    <div className="container">
        <div className="col-1">
            <p> More than 100 Financial Planners</p>
            <p>One Philosophy</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis fuga voluptates totam animi consequuntur deserunt hic doloribus alias consequatur qui quam iste numquam, obcaecati similique nulla nesciunt laboriosam? Eius, reiciendis?</p>
            <button className='button'>Get Your free Financial analysis</button>
        </div>
        <div className="col-2">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/CFZCg4HsQJc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        </div>
    </div>

    </div>
  )
}

export default Demo