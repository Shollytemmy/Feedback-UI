import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../Components/Share/Card'

function AboutPage() {
  return (
    <Card>
       <div className="about">
        <h2>This is an About page</h2>
        <p>This is an About us page for reviwing of product by our users</p>
        <p>
          <Link to="/" >Go back home</Link>
        </p>

       </div>
      
    </Card>
  )
}

export default AboutPage
