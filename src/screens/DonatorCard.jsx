import React from 'react'
import avatar from '../assets/images/avtar.png'

const DonatorCard = () => {
return (
<div className="giver-person-card">
    <div className="person-info-secton donator-personal-info">
        <div className="donator-image-wrapper">
            <img src={avatar} alt="" />
        </div>
        <div className='donator-person-name'>
            Dr. Alama Hussain Madani
            <div className='donator-person-username'>
                @DrHussainMadani
            </div>
        </div>
    </div>
    <div className="person-info-secton">
        ₹13,200
    </div>
</div>
)
}

export default DonatorCard