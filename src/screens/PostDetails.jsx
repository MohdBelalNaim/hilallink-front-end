import React from 'react'
import Navbar from '../components/Navbar'
import PostWithPhotoDetails from '../components/PostWithPhotoDetails'
import avatar from '../assets/images/avtar.png'
import CommentCard from '../components/CommentCard'

const PostDetails = () => {
return (
<>
  <Navbar />
  <div className="container">
    <div className="row">
      <div className="col-lg-3"></div>
      <div className="col-lg-6" style={{"marginTop":10+"px"}}>
        <PostWithPhotoDetails />

        <div className="comment-wrapper rounded">

          <div className="comment-user-detail-wrapper">
            <div className="comment-user-section">
              <div className="comment-photo-wrapper">
                <img src={avatar} alt="" className="comment-image" />
              </div>
            </div>
            <div className="comment-user-section" style={{"width":90+"%"}}>
              <div className="input-comment-skeleton">Post your comment</div>
            </div>
          </div>
          <div className="py-2"></div>

          <CommentCard/>
          <CommentCard/>
          <CommentCard/>
          <CommentCard/>
          <CommentCard/>
          <CommentCard/>
         
        </div>
      </div>
      <div className="col-lg-3"></div>
    </div>
  </div>
</>
)
}

export default PostDetails