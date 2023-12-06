import React from 'react'
import Navbar from '../components/Navbar'
import '../assets/css/madarsa-profile.css'
import PostWithPhoto from '../components/PostWithPhoto'
import cover from '../assets/images/masjidalaqsa.jpeg'
import avatar from '../assets/images/avtar.png'
import CampaignCard from '../components/CampaignCard'

const MadarsaProfile = () => {
return (
<>
    <Navbar />
    <div className="container-fluid">
        <div className="row">
            <div className="col-lg-3"></div>
            <div className="col-lg-6">
                <div className="madarsa-details">
                    <div className="madarsa-cover">
                        <div className="madarsa-basics">
                            <div className="madarsa-dp-wrapper">
                                <img src={avatar} alt="" className="madarsa-dp" />
                            </div>
                            <div className="madarsa-cover-image-wrapper">
                                <img src={cover} alt="" className="madarsa-cover-image" />
                            </div>
                            <div className="madarsa-follower-info">
                                <div className="madarsa-follower-item"></div>
                                <div className="madarsa-follower-item follower-data">
                                    <div className="follwer-item" style={{"margin-left":100+"px"}}>
                                        222 <span style={{"color":"gray"}}>Following</span>
                                    </div>
                                    <div className="follwer-item">
                                        101K <span style={{"color":"gray"}}>Follower</span>
                                    </div>
                                </div>
                                <div className="madarsa-follower-item">
                                    <i className="bi bi-bell madarsa-notification"></i>
                                    <button className="madarsa-follow-button"> <i
                                            className="bi bi-person-plus-fill px-1"></i> Follow</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="madarsa-info-wrapper">
                        <div className="madarsa-title">Madarsa Hanfiya Zyaul Quran</div>
                        <div className="madarsa-username">@HanfiyaZiaulQuraan</div>
                        <div className="madarsa-bio">
                            Official account of Madarsa Hanfiya Zyaul Quran.

                            Nurturing hearts and minds in the light of Quranic wisdom since 1980. Embracing knowledge,
                            faith, and community. 📖🌟 #MadarsaHanfiya
                        </div>
                        <div className="madarsa-type-info-wrapper">
                            <div className="madarsa-type-info"> <i className='bi bi-grid-fill'></i> Religious
                                institution
                            </div>
                            <div className="madarsa-type-info"> <i className="bi bi-geo-alt-fill"></i> Lucknow, India
                            </div>
                            <div className="madarsa-type-info"> <i className="bi bi-box-arrow-up-right"></i>
                                www.mhzquran.com</div>
                        </div>
                    </div>

                    <div className="madarsa-data-content-wrapper">
                        <div className="madarsa-data-item active-madarsa-item">Home</div>
                        <div className="madarsa-data-item">Posts</div>
                        <div className="madarsa-data-item">Videos</div>
                        <div className="madarsa-data-item">Clips</div>
                        <div className="madarsa-data-item">Campaign</div>
                    </div>
                </div>
                <CampaignCard/>

            </div>
            <div className="col-lg-3"></div>
        </div>
    </div>

</>
)
}

export default MadarsaProfile