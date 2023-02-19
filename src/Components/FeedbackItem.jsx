
import { useContext } from 'react'
import FeedbackContext from './Context/FeedbackContext'

import Card from './Share/Card'
import {FaTimes, FaEdit} from 'react-icons/fa'


function FeedbackItem({item}) {
  const {handleDelete, editFeedback} = useContext(FeedbackContext)

 
  

 
  return (
    <Card reverse={false}>
     
      <div className="num-display">{item.rating}</div>
      
        <button className='close' onClick={() => handleDelete(item.id)}>
          <FaTimes color='purple' />
        </button>
        <button className="edit" onClick={() => editFeedback(item)}>
          <FaEdit color='purple' />
        </button>
  
      <div className="text-display">
        <p>{item.text}</p>
      </div>
    
    </Card>
  )
}
export default FeedbackItem
