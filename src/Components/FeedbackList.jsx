import React from 'react'
import FeedbackItem from './FeedbackItem'

function FeedbackList({feedback}) {
    console.log(feedback)

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

export default FeedbackList