import React, { useState } from 'react'
import Card from './Share/Card'

function FeedbackItem({item}) {
  

 
  return (
    <Card reverse={true}>
      <div className="num-display">{item.rating}</div>
      <div className="text-display">
        <p>{item.text}</p>
      </div>
    
    </Card>
  )
}

export default FeedbackItem
