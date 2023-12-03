import React from 'react'
import Navbar from '../components/Navbar'
import '../assets/css/home.css'
import PostWithPhoto from '../components/PostWithPhoto'
import PostWithText from '../components/PostWithText'

const Main = () => {
  return (
    <>
        <Navbar/>
        <div className="feed-wrapper">
          <div className="container-fluid">
            <div className="row">
            <div className="col-lg-3"></div>
            <div className="col-lg-6">
              <div className="post-data-wrapper bg-light">
                <div className="post-data-item">
                  <div className="user-photo-wrapper">
                  </div>
                </div>
                <div className="post-data-item">
                  <i className="bi bi-plus-circle-fill plus-icon"></i>
                </div>
                <div className="post-data-item post-input">
                  <div className="input-skeleton">Write here, you want to say</div>
                </div>
                <div className="post-data-item">
                  <i className="bi bi-film extra-icon"></i>
                </div>
                <div className="post-data-item">
                  <i className="bi bi-image extra-icon"></i>
                </div>
              </div>
              <PostWithPhoto/>
              <PostWithText/>
            </div>
            <div className="col-lg-3"></div>
            </div>
          </div>
  
        </div>

    </>
  )
}

export default Main