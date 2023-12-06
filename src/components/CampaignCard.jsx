import React from 'react'
import '../assets/css/campaign-card.css'
import fundImage from '../assets/images/madarsa.webp'
import {Link} from 'react-router-dom'

const CampaignCard = () => {
return (
<div className="campaign-card mt-2" style={{"borderRadius":10+"px","overflow":"hidden"}}>
    <div className="campaign-image-wrapper">
        <img src={fundImage} alt="" className="campaign-image" />
    </div>
    <div className="campaign-details">
        <div className="campaign-title">
            Support and Donate Madarsa Hanfiya Zyaul Quran Lucknow
        </div>
        <div className="campaign-support-info">
            This fundraiser campeign will benifit to @HanfiyaZaulQuraan
        </div>
        <div className="madarsa-progress-wrapper">
            <div className="madarsa-progress"></div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-lg-6 py-3">
                    <div className="raised-amount-card">₹13,20,000 <span style={{"color":"gray","fontSize":14+"px"}}>funded
                            of ₹20,00,000</span></div>
                </div>
                <div className="col-lg-3 py-3">
                    <div className="raiesd-amount">602 <span
                            style={{"color":"gray","fontSize":14+"px"}}>Givers</span></div>
                </div>
                <div className="col-lg-3 py-3">
                    <div className="raiesd-amount">18 <span
                            style={{"color":"gray","fontSize":14+"px"}}>Days Left</span></div>
                </div>
                <Link style={{"textDecoration":"none"}} to="/campaign">
                <button className='support-madarsa-button'>
                    <i className='bi bi-heart-fill px-1'></i> Support
                </button>
                </Link>
            </div>
        </div>
    </div>
</div>
)
}

export default CampaignCard