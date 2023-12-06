import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import '../assets/css/campaign.css'
import campaignImage from '../assets/images/madarsa.webp'
import DonatorCard from './DonatorCard'
import CampaignUpdates from '../components/CampaignUpdates'
import avatar from '../assets/images/avtar.png'

const CampaignInfo = () => {

const[all,setAll] = useState(false)
const[about,setAbout] = useState(false)
const[updates,setUpdates] = useState(true)
function showUpdates(){
setAbout(false)
setUpdates(true)
}

function showAbout(){
setUpdates(false)
setAbout(true)
}
return (
<>
  {
  all?
  <>
    <div className="donors-overlay"></div>
    <div className="donors-main">
      <div className="all-donors-card pb-2 animate__animated animate__bounceIn">
        <div className="all-donors-title sticky-top bg-light">
          <i style={{"cursor":"pointer"}} className='bi bi-x-circle px-3' onClick={()=>setAll(false)}></i>
          40 Supporters
        </div>
        <div className="all-donors-info">
          <DonatorCard />
          <DonatorCard />
          <DonatorCard />
          <DonatorCard />
          <DonatorCard />
          <DonatorCard />
        </div>
        <div className="add-donation-secton text-center border-top">
          <button className='donate-now-button-all'>Donate now</button>
        </div>
      </div>
    </div>
  </>:
  ""
  }
  <Navbar />
  <div className="container-fluid mb-5">
    <div className="row">
      <div className="col-lg-2"></div>
      <div className="col-lg-8">
        <div className="campaign-info-wrapper">
          <div className="campaign-header-image">
            <img src={campaignImage} alt="" className="campaign-image" />
          </div>
          <div className="campaign-title">
            Support and Donate Madarsa Hanfiya Zyaul Quran Lucknow
          </div>
        </div>

        <div className="campaign-items">
          <div className="row gx-2">
            <div className="col-lg-7">
              <div className="campaign-details-wrapper">
                <div className="campaign-details-header">
                  <div className="campaign-option" onClick={()=>showAbout()}> Story</div>
                  <div className="campaign-option" onClick={()=>showUpdates()}>Updates</div>
                  <div className="campaign-option">Comments</div>
                  <div className="campaign-option">Donors</div>
                </div>
                {
                about?
                <div className="campaign-text">
                  <p>Children with Special Needs – Differently abled persons.</p>
                  <p>
                    After careful analysis area in Mysore have high prevalence of children with disability (intellectual
                    disability, Autism spectrum disorder, cerebral palsy, multiple disability, speech and language
                    disability and specific learning disability) were found. It was thus resolved to provide the
                    facilities necessary for parents to cope with such children.
                  </p>
                  <p>
                    OBJECTIVE
                    <br />
                    Children with disability are often denied admission in regular schools. When coupled with poor socio
                    economic conditions, familiar are often challenged with tasks of caring for often challenged with
                    tasks of caring for them on a day to day basis for such children, simple tasks such as eating,
                    toilet training or even learning to walk, to sit properly, communicate with others are difficult.
                  </p>
                  <p style={{"color":"#a16ce6"}}>Read more</p>
                  <button className="shareCampaignButton">Share on HilalLink</button>
                </div>
                :""
                }
                {
                updates?
                <>
                  <div className="campaign-updates">
                    <CampaignUpdates />
                    <CampaignUpdates />
                    <CampaignUpdates />
                    <CampaignUpdates />
                    <CampaignUpdates />
                  </div>
                </>

                :""
                }
              </div>
              <div className="giver-card-wrapper">
                <div className="giver-header text-center">Givers</div>
                <div className="giver-card-body">
                  <DonatorCard />
                  <DonatorCard />
                  <DonatorCard />
                  <DonatorCard />
                  <DonatorCard />
                  <div className="view-all-donors" onClick={()=>setAll(true)}>
                    View all givers
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="campaign-donations-wrapper">
                <div className="campaing-donation-header">
                  GIVE UMMA
                </div>
                <div className="campaign-donation-body">
                  <div className="raised-amount text-center">₹ 13,20,000</div>
                  <div className="total-amount text-center">raised of ₹ 20,00,000</div>

                  <div className="px-5 border-bottom pb-4">
                    <div className="donation-progress-body">
                      <div className="donation-progress-marker"></div>
                    </div>
                    <div className="giver-info-wrapper">
                      <div className="giver-info">
                        602 <span style={{"color":"gray"}}>Givers</span>
                      </div>
                      <div className="giver-info">
                        18 <span style={{"color":"gray"}}>Days left</span>
                      </div>
                    </div>
                    <button className="donate-now-button">
                      Donate Now
                    </button>
                  </div>
                  <div className="donation-campaigner-info border-bottom px-4 py-4">
                    <div className="campaigner-info-card mb-3">
                      <div className="campaigner-info-img-wrapper">
                        <img src={avatar} alt="" className="img-fit" />
                      </div>
                      <div className="campaigner-name">
                        <div className='text-muted'><b>Campaigner</b></div>
                        <div className='mt-1 mb-1'>Madarsa Hanfiya Zyaul...</div>
                        <div className='text-muted'>@HanfiyaZyaulQuraan</div>
                      </div>
                    </div>
                    <div className="campaigner-info-card">
                      <div className="campaigner-info-img-wrapper">
                        <img src={avatar} alt="" className="img-fit" />
                      </div>
                      <div className="campaigner-name">
                        <div className='text-muted'><b>Benificiary</b></div>
                        <div className='mt-1 mb-1'>Madarsa Hanfiya Zyaul...</div>
                        <div className='text-muted'>@HanfiyaZyaulQuraan</div>
                      </div>
                    </div>
                  </div>
                  <div className="verified-wrapper mt-5">
                    <div className="text-center verified-title text-muted">
                      Zakat Verified
                    </div>
                    <div className="text-center verfied-body text-muted">
                      This campaign is Zakat Verfied
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-2"></div>
    </div>
  </div>

</>
)
}

export default CampaignInfo