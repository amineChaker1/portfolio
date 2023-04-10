import React, { useEffect, useRef } from 'react'
import './Logo.scss'
import LogoS from '../../../assets/images/logo-s.png'

import profile from '../../../assets/images/profil.png'
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
