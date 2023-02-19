import { createContext, useState } from "react";
import feedbackData from "../../data/feedbackData";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext()


export const FeedbackProvider = ({children}) =>{
     const [feedback, setFeedback] = useState(feedbackData)
     const [feedbackEdit, setFeedbackEdit] = useState(
      {
        item: {},
        edit: false

      }
     )

     const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
  
    setFeedback([newFeedback, ...feedback])

  }


     const handleDelete = (id) => {
    if(window.confirm("Are you sure you want to delrte this Item")){
      setFeedback(feedback.filter((item) => item.id !== id))
    }
    
  }

  const editFeedback = (item) => {
    setFeedbackEdit({
      item, 
      edit: true
    })

  }

    return <FeedbackContext.Provider value={{
        feedback,
        handleDelete,
        addFeedback,
        editFeedback
    }}>
        {children}

    </FeedbackContext.Provider>
}

export default FeedbackContext






  