import { createContext, useState } from "react";

const feedbackContext = createContext()


export const FeedbackProvider = ({children}) =>{
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: "This Text is coming from the global state",
            rating: 10
        }
    ])

    return <feedbackContext.Provider value={
        feedback


    }>
        {children}

    </feedbackContext.Provider>
}

export default feedbackContext