import { useState } from "react";
import { v4 as uuidv4 } from "uuid"
import { Routes,  Route } from "react-router-dom";
import Header from "./Components/Header.jsx"
import FeedbackList from "./Components/FeedbackList.jsx"
import feedbackData from "./data/feedbackData.js";
import FeedbackStas from "./Components/FeedbackStas.jsx";
import './App.css';
import FeedbackForm from "./Components/FeedbackForm.jsx";
import AboutPage from "./Page/AboutPage.jsx";
import AbouticonLink from "./Components/AbouticonLink.jsx";


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
    
  }
  return (
    <>
    
    <Header  />
   
     <div className="container">
       <Routes>
      <Route path="/" element={
        <>
        <FeedbackForm addFeedback={addFeedback} />
       
        <FeedbackStas feedback={feedback} />
      
    
      <FeedbackList feedback= {feedback} handleDelete={handleDelete} />
      <AbouticonLink />
        </>
      } />

      <Route path="about" element={<AboutPage />} />
         

      

     
      </Routes>
    </div>
    
    </>
   
  );
}

export default App;
