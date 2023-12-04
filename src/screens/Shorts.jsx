import React from 'react'
import '../assets/css/shorts.css'
import ClipVideo from '../components/ClipVideo'
import video1 from '../assets/video/video2.mp4'
import video2 from '../assets/video/shortclip.mp4'
const Shorts = () => {
  return (
    <div className="container-fluid gx-0">
        <div className="row gx-0 gy-0">
            <div className="col-lg-4 darker-area"></div>
            <div className="col-lg-4 vide-area no-guuters">
                <div className="video-container">
                    <ClipVideo src={video1}/>
                    <ClipVideo src={video2}/>
                </div>
            </div>
            <div className="col-lg-4 darker-area"></div>
        </div>
    </div>
  )
}

export default Shorts