import React, { useState,  useContext, useEffect  } from 'react'
import FeedbackContext from './Context/FeedbackContext'
import Card from './Share/Card'
import Button from './Share/Button'
import RatingSelect from './RatingSelect'

function FeedbackForm() {
 
    const [text, setText] = useState("")
    const [rating, setRating] = useState(10)
    const [disabled, setDisabled] = useState(true)
    const [message, setMessage] = useState("")

     const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext)

     useEffect(() => {
      
      if(feedbackEdit.edit === true){
        setDisabled(false)
        setText(feedbackEdit.item.text)
      setRating(feedbackEdit.item.rating)
      }

     }, [feedbackEdit])




    const handleInputChange = (e) => {


        if(text === ""){
            setDisabled(true)
            setMessage(null)
        } else if(text !== "" && text.trim().length <= 10){
            setMessage("Text Must be atleast 10 character long")
            setDisabled(true)
        } else{
             setMessage(null)
            setDisabled(false)
           
        }
        setText(e.target.value)


    }


    const handleSubmit = (e) => {
      e.preventDefault()
      
      if(text.trim().length > 10){
        const newFeedback = {
          text,
          rating
        }

        if(feedbackEdit.edit === true){
          updateFeedback(feedbackEdit.item.id, newFeedback)
        } else{
          addFeedback(newFeedback)

        }
        
      }

      setText("")

      


    }
  return (
    <Card>
      
      
      <form onSubmit={handleSubmit}>
        <h2>How would you rate Your Service with us</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
        
        <input type="text" placeholder='Enter your comment here' value={text} onChange={handleInputChange} />
        <Button type="submit" isDisabled={disabled}>Submit</Button>
      </div>
      <div className='message'>{message && message}</div>

      </form>
      
    </Card>
  )
}



export default FeedbackForm
