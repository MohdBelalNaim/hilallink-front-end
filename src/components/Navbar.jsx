import React from 'react'
import '../assets/css/navbar.css'
import Logo from '../assets/images/hilalLogo.png'
const Navbar = () => {
return (
<div className="container-fluid bg-light navbar-top">
    <div className="row">
        <div className="col-lg-3">
            <div className="logo-items-wrapper">
                <div className="logo-item">
                    <img src={Logo} className='logoimage'/>
                </div>
                <div className="logo-item">
                    <input type="text" className='search-input' placeholder='search'/>
                </div>
            </div>
        </div>
        <div className="col-lg-6">
            <div className="action-icons-wrapper">
                <div className="action-icons house">
                    <i className="action-icon bi bi-house-door-fill"></i>
                </div>
                <div className="action-icons">
                    <i className="action-icon bi bi-play-btn-fill"></i>
                </div>
                <div className="action-icons">
                    <i className="action-icon bi bi-film"></i>
                </div>
                <div className="action-icons">
                    <i className="action-icon bi bi-bar-chart-fill"></i>
                </div>
                <div className="action-icons">
                    <i className="action-icon bi bi-bookmark-fill"></i>
                </div>
            </div>
        </div>
        <div className="col-lg-3">
            <div className="action-center-wrapper">
                <div className="action-item">
                    <i className="bi bi-chat action-icon"></i>
                </div>
                <div className="action-item">
                    <i className="bi bi-bell action-icon"></i>
                </div>
                <div className="action-item">
                    <i className="bi bi-person action-icon"></i>
                </div>
            </div>
        </div>
    </div>
</div>
)
}

export default Navbar