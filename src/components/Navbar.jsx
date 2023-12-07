import React from 'react'
import '../assets/css/navbar.css'
import Logo from '../assets/images/hilalLogo.png'
import avatar from '../assets/images/avtar.png'

const Navbar = () => {

    
return (
<>
    <div className="bottom-navbar">
        <div className="action-icons-wrapper">
            <div className="action-icons house">
                <i className="action-icon bi bi-house-door-fill"></i>
            </div>
            <div className="action-icons">
                <i className="action-icon bi bi-film"></i>
            </div>
            <div className="action-icons">
                <i className="action-icon bi bi-plus-circle-fill"></i>
            </div>
            <div className="action-icons">
                <i className="action-icon bi bi-play-btn-fill"></i>
            </div>
            <div className="action-icons">
                <i className="action-icon bi bi-bookmark-fill"></i>
            </div>
        </div>
    </div>
    <div className="mobile-header">
            <div className="mobile-header-items">
                <div className="mobile-logo-wrapper">
                    <img src={Logo} className='mobile-logo' alt="wbsite logo"/>
                </div>
            </div>
            <div className="mobile-header-items">
                <i className="bi bi-search mobile-icon"></i>
                <i className="bi bi-bell mobile-icon"></i>
                <i className="bi bi-chat mobile-icon"></i>
            </div>
        </div>
    <div className="container-fluid navbar-top">
        <div className="row">
            <div className="col-lg-3">
                <div className="logo-items-wrapper">
                    <div className="logo-item">
                
                            
                            <i  className="bi bi-x-circle" style={{"fontSize":26+"px","cursor":'pointer'}}></i>
                        
                            <img src={Logo} className='logoimage' alt="websitelogo"/>
            
                        
                        
                    </div>
                    <div className="logo-item">
                        <input type="text" className='search-input' placeholder='search' />
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
                        <i className="action-icon bi bi-person-plus-fill"></i>
                    </div>
                    <div className="action-icons">
                        <i className="action-icon bi bi-binoculars-fill"></i>
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
                        <div className="navbar-user-image">
                            <img src={avatar} className='navbar-image-data' alt="website avatar" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</>
)
}

export default Navbar