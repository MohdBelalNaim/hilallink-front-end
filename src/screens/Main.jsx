import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import '../assets/css/home.css'
import PostWithPhoto from '../components/PostWithPhoto'
import PostWithText from '../components/PostWithText'
import { Link } from 'react-router-dom'
import CreatePost from '../components/CreatePost'

const Main = () => {
  const[showCreate,setShowCreate] = useState(false)
  return (
      <>
        {
          showCreate?
          <CreatePost/>
          :""
        }
        <Navbar/>
        <div className="feed-wrapper">
          <div className="container">
            <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <div className="post-data-wrapper bg-light" onClick={()=>setShowCreate(true)}>
                <div className="post-data-item">
                  <div className="user-photo-wrapper">
                  </div>
                </div>
                <div className="post-data-item post-input">
                  <div className="input-skeleton">Write here, you want to say</div>
                </div>
                <div className="post-data-item">
                  <i className="bi bi-image extra-icon"></i>
                </div>
                <div className="post-data-item">
                  <i className="bi bi-filetype-gif extra-icon"></i>
                </div>
                <div className="post-data-item clip-icon">
                  <i className="bi bi-film extra-icon"></i>
                </div>
              </div>
              <Link style={{"all":"unset","cursor":"pointer"}} to="/post"><PostWithPhoto/></Link>
              <PostWithText/>
              <div className="mobile-bottom-padding"></div>
            </div>
            <div className="col-md-3"></div>
            </div>
          </div>
  
        </div>

    </>
  )
}

export default Main