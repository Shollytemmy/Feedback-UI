import { useState } from "react";
import Header from "./Components/Header.jsx"
import FeedbackList from "./Components/FeedbackList.jsx"
import feedbackData from "./data/feedbackData.js";
import FeedbackStas from "./Components/FeedbackStas.jsx";
import './App.css';


function App() {
  const [feedback, setFeedback] = useState(feedbackData)

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
       
        <FeedbackStas feedback={feedback} />
      
    
      <FeedbackList feedback= {feedback} handleDelete={handleDelete} />
      
    </div>
    </>
   
  );
}

export default App;
