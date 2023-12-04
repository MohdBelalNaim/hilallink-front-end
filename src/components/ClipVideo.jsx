import React,{useEffect, useRef,useState} from 'react'
import video from '../assets/video/shortclip.mp4'
import Avatar from '../assets/images/avtar.png'
const ClipVideo = (props) => {
   
    const[isVideoPlaying,setisVideoPlaying] = useState(true)
    const vidRef = useRef()
    if (navigator.userActivation.hasBeenActive) {
        console.log("Hemlo  ")
      }
    function toggleMute(){
        var video = document.getElementById("myvid")
        video.muted=!video.muted
        console.log("HEmlo")
    }

    window.onscroll = function(e){
        toggleMute()
    }

    const onVideoClick = () =>{
        toggleMute()

        // if(isVideoPlaying){
        //     vidRef.current.pause()
        //     setisVideoPlaying(false)
        // }
        // else{
        //     vidRef.current.play()
        //     setisVideoPlaying(true)
        // }
    }

    return (
    <div  className='video-item'>
    
        <div className="vid-info">
            <div className='clip-actions'>
                <div className="clip-action-item">
                    <div className="clip-action-icon">
                        <i className="bi bi-hand-thumbs-up"></i>
                    </div>
                    <div className="action-count">22</div>
                </div>
                <div className="clip-action-item">
                    <div className="clip-action-icon">
                        <i className="bi bi-chat-fill"></i>
                    </div>
                    <div className="clip-action-count">22</div>
                </div>
                <div className="clip-action-item">
                    <div className="clip-action-icon">
                        <i className="bi bi-share"></i>
                    </div>
                    <div className="clip-action-count">22</div>
                </div>
                <div className="clip-action-item">
                    <div className="clip-action-icon">
                        <i className="bi bi-three-dots-vertical"></i>
                    </div>
                    <div className="clip-action-count">22</div>
                </div>
            </div>
            <div className="vid-info-item">
                <div className="vid-info-sub">
                    <div className="user-image-wrapper">
                        <img src={Avatar} alt="user avatar" className="user-image" />
                    </div>
                </div>
                <div className="vid-info-sub">
                    <div className="clip-username">Khursheed A.</div>
                    <div className="clip-uniquename">@KhursheedKhan</div>
                </div>
                <div className="vid-info-sub">
                    <button className='clip-follow' >Follow</button>
                </div>
            </div>
            <div className="vid-desc">
                lorem ipsum dolor sit amer lorem dolor amet sit feoqiwwq ......
            </div>

        </div>
        <video 
            id="myvid"
            onClick={onVideoClick}
            src={props.src} 
            ref={vidRef}
            className='video-player'
            loop 
            autoPlay
            muted
        />
    </div>
  )
}

export default ClipVideo