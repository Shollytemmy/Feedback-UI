import React from 'react';
import { useContext } from 'react';
import FeedbackContext from './Context/FeedbackContext';


const FeedbackStas = () => {

    const {feedback} = useContext(FeedbackContext)

    let average = feedback.reduce((acc, cur) => {
        return acc + cur.rating

    } , 0) / feedback.length

    average = average.toFixed(1).replace(/[.,]0$/, '') // ensure that it's a one decimal point and it replace any trilling space with an empty string
    return (
        <div className='feedback-stats'>
            <h4>{feedback.length} Reviews</h4>
            <h4>{isNaN(average) ? 0 : average} Average Rating</h4>
        </div>
    );
}


export default FeedbackStas;
