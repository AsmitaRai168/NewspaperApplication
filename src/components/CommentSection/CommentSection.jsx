import React from 'react'
import './commentsection.css'
function CommentSection({LabelMessage,labelHolder,HandleLabelChange}) {
  return (
    <>
    <div className='message-main-container'>
    <div className='message-sendbtn-container'>
    <div className='send-message-container'>
            {
                 LabelMessage
            }
        </div>
        <div className='input-message-container'>
            <textarea
            className="send-message"
            placeholder='commentHere..'
            onChange={HandleLabelChange} />

        </div>
        <button type="submit" className='sendbtn'>Send</button>

            </div>
        

    </div>


    </>
  )
}

export default CommentSection
