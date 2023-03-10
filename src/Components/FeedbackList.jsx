import React from 'react'
import {motion, AnimatePresence} from "framer-motion"
import { useContext } from 'react'
import FeedbackContext from './Context/FeedbackContext'

import FeedbackItem from './FeedbackItem'

function FeedbackList() {

    const {feedback}  = useContext(FeedbackContext)
    // console.log(FeedbackContext._currentValue)
    // console.log(feedback);
    

    if(!feedback || feedback.length === 0){
        return <h1>No feedback yet</h1>
    }


    return (
    <div className='feedback-list'>
        <AnimatePresence>
        {
            feedback.map((item) => {
                return(
                    <motion.div 
                    key={item.id}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    >
                        <FeedbackItem key={item.id} item ={item}
                   
                    />
                    </motion.div>
                   
                )
            })
        }
        </AnimatePresence>
    
    </div>
  )

}





export default FeedbackList
