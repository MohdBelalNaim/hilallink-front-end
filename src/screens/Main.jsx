import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import '../assets/css/home.css'
import PostWithPhoto from '../components/PostWithPhoto'
import PostWithText from '../components/PostWithText'
import { Link } from 'react-router-dom'
import CreatePost from '../components/CreatePost'
import { useSelector } from 'react-redux'

const Main = () => {
const[showCreate,setShowCreate] = useState(false)
const search = useSelector(state=>state.search)

return (
<>
  {
  showCreate?
  <CreatePost />
  :""
  }
  <Navbar />
  <div className="feed-wrapper">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3 search-box-container">
          {
          search?
          <div className="search-box">
            <div className="search-box-title">Try searching for</div>
            <div className="search-recommendation">
              <i className="bi bi-search"></i>
              <div>Islam</div>
            </div>
            <div className="search-recommendation">
              <i className="bi bi-search"></i>
              <div>Quran</div>
            </div>
            <div className="search-recommendation">
              <i className="bi bi-search"></i>
              <div>Muslim</div>
            </div>
            <div className="search-recommendation">
              <i className="bi bi-search"></i>
              <div>Islamic scholar</div>
            </div>
            <div className="search-recommendation">
              <i className="bi bi-search"></i>
              <div>Alhamdulillah</div>
            </div>
            <div className="search-recommendation">
              <i className="bi bi-search"></i>
              <div>MashaAllah</div>
            </div>
            <div className="search-recommendation">
              <i className="bi bi-search"></i>
              <div>Nimaz</div>
            </div>
            <div className="search-recommendation">
              <i className="bi bi-search"></i>
              <div>Zakat</div>
            </div>
          </div>
          :""
          }
        </div>
        <div className="col-md-6 px-5">
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
          <Link style={{"all":"unset","cursor":"pointer"}} to="/post">
          <PostWithPhoto />
          </Link>
          <PostWithText />
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