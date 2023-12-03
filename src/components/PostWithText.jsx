import React from 'react'
import '../assets/css/home.css'
import feedimage from '../assets/images/masjidalaqsa.jpeg'
import avatar from '../assets/images/avtar.png'

const PostWithText = () => {
return (
<div className="feed-item">
    <div className="feed-item-title">
        <div className="feed-title-item">
            <div className="feed-user-info-wrapper">
                <div className="feed-user-info">
                    <div className="user-image-info">
                        <img src={avatar} className='user-image-data' />
                    </div>
                </div>
                <div className="feed-user-info">
                    <div className='feed-user-name'><b>Dr. Alama Hussain Madani</b></div>
                    <div className='feed-user-name-unique'>@DrHussainMadani</div>
                </div>
            </div>
        </div>
        <div className="feed-title-item">
            <div className='feed-edit-options'>
                <span className='feed-time'>42 minutes ago</span>
                <span><i className="bi bi-three-dots-vertical"></i></span>
            </div>
        </div>
    </div>
    <div className="feed-item-descripton">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate recusandae consectetur natus porro
        voluptatibus dolorem quae autem modi eius dignissimos, quibusdam repellendus.
    </div>
    <div className="feed-item-actions border-top">
        <div className="feed-action-item">
            <i className='bi bi-hand-thumbs-up'></i> 2158
        </div>
        <div className="feed-action-item">
            <i className='bi bi-repeat'></i> 21
        </div>
        <div className="feed-action-item">
            <i className='bi bi-chat'></i> 58
        </div>
        <div className="feed-action-item">
            <i className='bi bi-upload'></i>
        </div>
    </div>
</div>
)
}

export default PostWithText