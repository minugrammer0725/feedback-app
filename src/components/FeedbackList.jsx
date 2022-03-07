import React, {useContext} from 'react'
import FeedbackItem from "./Feecbackitem"
import {motion, AnimatePresence} from 'framer-motion'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackList() {
    const {feedback} = useContext(FeedbackContext);
  
    if (!feedback || feedback.length === 0) {
        return <p>No Feedback provided yet. </p>
    }

  return (
    <div className='feedback-list'>
        <AnimatePresence>
        {feedback.map( (item) => (
            <motion.div 
                key={item.id}
                initial={{opacity: 0}}      // default: invisible.
                animate={{opacity: 1}}      // animate it to be visible 
                exit={{opacity: 0}}         // fade out
            >
            <FeedbackItem key={item.id} item={item} />
            </motion.div>
        ))}
        </AnimatePresence>
    </div>
  )


    // version without the motion. 
//   return (
//     <div className='feedback-list'>
//         {feedback.map( (item) => (
//             <FeedbackItem key={item.id} item={item} 
//             handleDelete={handleDelete} />
//         ))}
//     </div>
//   )
}



export default FeedbackList