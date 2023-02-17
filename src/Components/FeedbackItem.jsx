import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Card from './Share/Card'

function FeedbackItem({item}) {
  

 
  return (
    <Card reverse={false}>
      <div className="num-display">{item.rating}</div>
      <div className="text-display">
        <p>{item.text}</p>
      </div>
    
    </Card>
  )
}
FeedbackItem.propTpes = {
  item: PropTypes.object.isRequired
}



export default FeedbackItem
