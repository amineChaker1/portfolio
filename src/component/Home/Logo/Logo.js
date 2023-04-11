import React from 'react'
import './Logo.scss'

import profile2 from '../../../assets/images/profile2.jpg'
function Logo() {
  return (
    <div className="logo-container">
      <div id="frame">
        <div id="border">
          <img src={profile2} alt="" />
        </div>
      </div>
      {/*<img ref={solidLogoRef} className="solid-logo" src={LogoS} alt="S" /> */}
    </div>
  )
}

export default Logo
