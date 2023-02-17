import React from 'react'
import PropTypes from 'prop-types'

import FeedbackItem from './FeedbackItem'

function FeedbackList({feedback}) {
    

    if(!feedback || feedback.length === 0){
        return <h1>No feedback yet</h1>
    }
  return (
    <div className='feedback-list'>
        {
            feedback.map((item) => {
                return(
                   <FeedbackItem key={item.id} item ={item} />
                )
            })
        }
    
    </div>
  )
}

FeedbackList.propTypes = {
    feedback: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            text: PropTypes.string,
            rating: PropTypes.number
        })
    )
}



export default FeedbackList
