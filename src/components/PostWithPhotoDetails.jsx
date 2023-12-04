import React from 'react'
import feedimage from '../assets/images/masjidalaqsa.jpeg'
import avatar from '../assets/images/avtar.png'
import reactions from '../assets/images/reactions.jpeg'

const PostWithPhotoDetails = () => {
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
    </div>
    <div className="feed-item-descripton">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate recusandae consectetur natus porro
        voluptatibus dolorem quae autem modi eius dignissimos, quibusdam repellendus.
    </div>
    <div className="feed-item-image">
        <img src={feedimage} className='feed-post-image' />
    </div>
    <div className="feed-item-info">
        <div className="feed-item-info-element">
            <img src={reactions} alt="" className="reactions" />
            <span className='reaction-count'><span style={{"color":"black"}}>18.6K</span> Views</span>
        </div>
        <div className="feed-item-info-element">
            <div className='dateTime'>3:32 AM. Apr 7, 2023</div>
        </div>
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

export default PostWithPhotoDetails