import React from 'react'
import {useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackStats() {
  const {feedback} = useContext(FeedbackContext);
    // calculating average ratings
    let average = feedback.reduce((acc, cur) => {
        return acc + cur.rating
    }, 0) / feedback.length   // accumulator = 0

    average = average.toFixed(1).replace(/[.,]0$/, '')    // one decimal place + trim any trailing zero using regex. 

  return (
    <div className='feedback-stats'>
        <h4>{feedback.length} Review</h4>
        <h4>Average Rating: {isNaN(average) ? 0 : average}</h4> 
    </div>
  )
}


export default FeedbackStats