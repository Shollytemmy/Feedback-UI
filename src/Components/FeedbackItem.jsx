import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Card from './Share/Card'
import {FaTimes} from 'react-icons/fa'
import FeedbackStas from './FeedbackStas'

function FeedbackItem({item,  handleDelete}) {

 
  

 
  return (
    <Card reverse={false}>
     
      <div className="num-display">{item.rating}</div>
      
        <button className='close' onClick={() => handleDelete(item.id)}>
          <FaTimes color='puple' />
        </button>
  
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
