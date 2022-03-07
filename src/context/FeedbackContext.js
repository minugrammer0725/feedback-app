import {createContext, useState} from 'react'
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'This is Feedback Item 1',
            rating: 10
        },
        {
            id: 2,
            text: 'This is Feedback Item 2',
            rating: 7
        },
        {
            id: 3,
            text: 'This is Feedback Item 3',
            rating: 8
        }
    ])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    // add Feedback
    const addFeedback = (newFeedback) =>{
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])             // new Feedback + all the current feedbacks
    }

    // delete Feedback
    const deleteFeedback = (id) => {
        // essentially the function that deletes the card. 
        console.log('From the App: ', + id);
        if (window.confirm('Are you sure you want to delete?')) {
            setFeedback(feedback.filter((item)=> item.id !== id))  // replace the feedback values, which are the data.
        }
    } 

    const updateFeedback = (id, updateItem) => {
        setFeedback(feedback.map((item) => 
            item.id === id ? {...item, ...updateItem} : item
        ))
    } 

    // Set item to be updated
    const editFeedback = (item) => {
        setFeedbackEdit({
            item: item,
            edit: true
        })
    }

    return ( 
    <FeedbackContext.Provider value={{
        feedback: feedback,
        deleteFeedback: deleteFeedback,
        addFeedback: addFeedback,
        editFeedback,    // === editFeedback: editFeedback
        feedbackEdit,
        updateFeedback
    }}>
        {children}
    </FeedbackContext.Provider>
    )
}

export default FeedbackContext;