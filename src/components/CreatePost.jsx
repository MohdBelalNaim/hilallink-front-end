import React from 'react'
import avatar from '../assets/images/avtar.png'

const CreatePost = () => {
return (
<>
    <div className="create-dimmer"></div>
    <div className="create-wrapper">
        <div className="create-form animate__animated animate__bounceIn">
            <div className="create-post-header border-bottom">
                <div className="create-header-item">
                    <i className="bi bi-x-circle"></i>
                </div>
                <div className="create-header-item create-title">Create Post</div>
                <div className="create-header-item draft">Drafts</div>
            </div>
            <div className="create-post-input">
                <div className="input-placeholder-large">
                    <div className="input-placeholder-item">
                        <div className="placeholder-image-wrapper">
                            <img src={avatar} alt="" className="placeholder-image" />
                        </div>
                    </div>
                    <div className="input-placeholder-item">
                        <div className="placeholder-text">
                            <div className="placeholder-subsections">
                                Write here, you want to say...
                            </div>
                            <div className="placeholder-subsection sunnah">
                                "The <b>Momin</b> is the only one from whom the people's lives and wealth are safe"
                                <br />
                                -Prophet Mohammad PBUH
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="create-post-options">
                <div className="create-post-option-sub">
                    <div className="create-post-addons">
                        <i className="bi bi-image"></i>
                        <i className="bi bi-film"></i>
                        <i className="bi bi-filetype-gif"></i>
                    </div>
                </div>
                <div className="create-post-option-sub">
                    <button className="create-post-button">Post</button>
                </div>
            </div>
        </div>
    </div>
</>
)
}

export default CreatePost