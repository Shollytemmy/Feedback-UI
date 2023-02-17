import { useState } from "react";
import Header from "./Components/Header.jsx"
import FeedbackList from "./Components/FeedbackList.jsx"
import feedbackData from "./data/feedbackData.js";
import './App.css';


function App() {
  const [feedback, setFeedback] = useState(feedbackData)
  return (
    <>
    <Header  />
     <div className="container">
    
      <FeedbackList feedback= {feedback} />
      
    </div>
    </>
   
  );
}

export default App;
