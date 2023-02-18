import { useState } from "react";
import { v4 as uuidv4 } from "uuid"
import Header from "./Components/Header.jsx"
import FeedbackList from "./Components/FeedbackList.jsx"
import feedbackData from "./data/feedbackData.js";
import FeedbackStas from "./Components/FeedbackStas.jsx";
import './App.css';
import FeedbackForm from "./Components/FeedbackForm.jsx";


function App() {
  const [feedback, setFeedback] = useState(feedbackData)

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    // console.log(addFeedback)
    setFeedback([newFeedback, ...feedback])

  }

  const handleDelete = (id) => {
    if(window.confirm("Are you sure you want to delrte this Item")){
      setFeedback(feedback.filter((item) => item.id !== id))
    }
    console.log("App Function ", id);
  }
  return (
    <>
    <Header  />
     <div className="container">

      <FeedbackForm addFeedback={addFeedback} />
       
        <FeedbackStas feedback={feedback} />
      
    
      <FeedbackList feedback= {feedback} handleDelete={handleDelete} />
      
    </div>
    </>
   
  );
}

export default App;
