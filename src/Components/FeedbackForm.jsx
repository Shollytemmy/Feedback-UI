import React, { useState } from 'react'
import Card from './Share/Card'
import Button from './Share/Button'

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
        <Button type="submit">Submit</Button>
      </div>
    </Card>
  )
}



export default FeedbackForm
