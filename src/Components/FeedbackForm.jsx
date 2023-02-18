import React, { useState } from 'react'
import Card from './Share/Card'

function FeedbackForm() {
    const [text, setText] = useState("")

    const handleInputChange = (e) => {
        setText(e.target.value)


    }
  return (
    <Card>
      <h2>How would you rate Your Service with us</h2>
      <div className="input-group">
        <input type="text" placeholder='Enter your comment here' value={text} onChange={handleInputChange} />
        <button type="submit">Submit</button>
      </div>
    </Card>
  )
}

export default FeedbackForm
