import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import '../assets/css/campaign.css'
import '../assets/css/donation-form.css'
import campaignImage from '../assets/images/madarsa.webp'
import DonatorCard from './DonatorCard'
import CampaignUpdates from '../components/CampaignUpdates'
import avatar from '../assets/images/avtar.png'

const CampaignInfo = () => {

const[all,setAll] = useState(false)
const[about,setAbout] = useState(false)
const[updates,setUpdates] = useState(true)
const[donate,setDonate] = useState(false)

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
  {
  donate?
  <>
    <div className="donation-overlay"></div>
    <div className="donation-form-wrapper">
      <div className="donation-form-container">
        <div className="donation-form-header">
          <div className="donation-form-header-items"><i className="bi bi-x-circle" onClick={()=>setDonate(false)} style={{"color":"#b8b4b4","cursor":"pointer"}}></i>
          </div>
          <div className="donation-form-header-items">Donation form</div>
          <div className="donation-form-header-items">&nbsp;</div>
        </div>
        <div className="donation-form-body">
          <div className="donation-info">
            Choose or enter your amount
          </div>
          <div className="donation-pills-container">
            <div className="donation-pills shadow">₹5000</div>
            <div className="donation-pills shadow">₹3000</div>
            <div className="donation-pills shadow">₹1500</div>
          </div>
          <div className="other-amount-wrapper">
            <input type="tel" className="other-amount shadow" placeholder='Enter your own amount' />
          </div>
          <div className="donation-tip-wrapper">
            <div className="donation-tip-container">
              <div className="donation-tip-title">
                GiveUmma <span style={{"fontSize":12+"px"}}>(an initiative of HilalLink)</span> does not charge any fees
                from the benificiaries, we only rely on kind support from Givers like you.
              </div>
              <div className="donation-tip-input-wrapper mt-3">
                <div className="row gx-0">
                  <div className="col-lg-7 donation-tip-title" style={{"position":"relative","top":6+"px"}}>Support us
                    by adding a tip of</div>
                  <div className="col-lg-5" style={{"paddingRight":20+"px"}}>
                    <div className="row gx-0 bg-light tip-amount-input-wrapper">
                      <div className="col-lg-4"><input value="10%" className='tip-amount-input tip-one'
                          style={{"width":100+"%"}} type="text" /></div>
                      <div className="col-lg-8"><input value="500.00" className='tip-amount-input'
                          style={{"width":100+"%","paddingLeft":10+"px"}} type="text" /></div>
                    </div>
                    <div className="total-donation-amount">Total Amount INR 2200</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="donor-details-wrapper">
            <input placeholder='Name *' type="text" className="donor-detail-input form-control" />
            <input placeholder='Email address *' type="text" className="mt-4 donor-detail-input form-control" />
            <input placeholder='Mobile Number *' type="text" className="mt-4 donor-detail-input form-control" />
            <input placeholder='Address *' type="text" className="mt-4 donor-detail-input form-control" />
            <input placeholder='Pan card (Optional : Required for Tax benifits)' type="text"
              className="mt-4 donor-detail-input form-control" />
            <div className="pay-donation-wrapper text-center py-4">
              <button className='proceed-to-pay'>Proceed To Pay</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  :""
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
                    <button className="donate-now-button" onClick={()=>setDonate(true)}>
                      Donate Now
                    </button>
                  </div>
                  <div className="donation-campaigner-info border-bottom px-4 py-4">
                    <div className="campaigner-info-card">
                      <div className="campaigner-info-img-wrapper">
                        <img src={avatar} alt="" className="img-fit ben-img" />
                      </div>
                      <div className="campaigner-name">
                        <div className='text-muted'><b>Benificiary</b></div>
                        <div className='mt-1 mb-1'>Madarsa Hanfiya Zyaul...</div>
                        <div className='text-muted'>@HanfiyaZyaulQuraan</div>
                      </div>
                    </div>
                  </div>
                  <div className="verified-wrapper mt-3">
                    <div className="text-center verified-title text-muted">
                      Zakat Verified
                    </div>
                    <div className="text-center verfied-body text-muted">
                      This campaign is Zakat Verfied
                    </div>
                  </div>
                  <div className="share-campaign-main">
                    <div className="share-campaign-wrapper">
                      <div className="share-campaign-items text-light">Share on</div>
                      <div className="share-campaign-items">
                        <i className="bi bi-facebook text-light share-social-icons"></i>
                        <i className="bi bi-twitter-x text-light share-social-icons"></i>
                        <i className="bi bi-whatsapp text-light share-social-icons"></i>
                      </div>
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