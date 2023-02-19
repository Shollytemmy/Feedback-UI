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
import { FeedbackProvider } from "./Components/Context/FeedbackContext";


function App() {
 

 
  return (
    <FeedbackProvider>
    
    <Header  />
   
     <div className="container">
       <Routes>
      <Route path="/" element={
        <>
        <FeedbackForm  />
       
        <FeedbackStas />
      
    
      <FeedbackList />
      <AbouticonLink />
        </>
      } />

      <Route path="about" element={<AboutPage />} />
         

      

     
      </Routes>
    </div>
    
    </FeedbackProvider>
   
  );
}

export default App;
