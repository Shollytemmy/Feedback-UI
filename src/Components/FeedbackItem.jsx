import React, { useState } from 'react'

function FeedbackItem() {
  const [rating, setRating] = useState(9)
  const [text, setText] = useState("This is the text container that display ratings and reviews of our customers")

  const handleClick = () => {
    setRating((preVal) => {
      return preVal + 1
    })

  }
  return (
    <div className='card'>
      <div className="num-display">{rating}</div>
      <div className="text-display">
        <p>{text}</p>
      </div>
      <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default FeedbackItem
