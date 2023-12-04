import React from 'react'
import avatar from '../assets/images/avtar.png'

const CommentCard = () => {
  return (
    <div className="comments mt-3">
    <div className="comment-user-info">
      <div className="comment-user-info-item">
        <div className="comment-photo-wrapper">
          <img src={avatar} alt="" className="comment-image" />
        </div>
      </div>
      <div className="comment-user-info-item">
        <div className='comment-header'>
            <div>
                <span className='comment-name'><b>Rahies Malik</b></span> <span className='comment-username'>@Rahies_Malik</span>
            </div>
            <div>
                <i className="bi bi-three-dots-vertical"></i>
            </div>
        </div>
        <div className='comment-data'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et delectus natus, eveniet, 
        </div>
        <div className="comment-actions">
          <div className="comment-action comment-time">13 Minutes ago</div>
          <div className="comment-action"><i className="bi bi-hand-thumbs-up comment-like-icon"></i></div>
          <div className="comment-action comment-like-count">3</div>
          <div className="comment-action"><i className="bi bi-chat comment-like-icon"></i></div>
          <div className="comment-action comment-like-count">3</div>
        </div>
      </div>
    </div>

  </div>

  )
}

export default CommentCard