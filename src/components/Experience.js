import React, { useState } from 'react'

import POPLogo from './logos/POPLogo'
import GALogo from './logos/GALogo'
import RBBLogo from './logos/RBBLogo'
import BocconiLogo from './logos/BocconiLogo'
import YorkLogo from './logos/YorkLogo'

const Experience = () => {

  const [hover, setHover] = useState(null)

  function handleHover(e) {
    if (hover !== e.target.dataset.id) {
      setHover(e.target.dataset.id)
    }
  }

  return (<div id="experience">
    <div className="logo-container">
      <POPLogo size={50} id="pop" handleHover={handleHover}/>
      <GALogo size={50} id="ga" handleHover={handleHover}/>
      <RBBLogo size={50} id="rbb" handleHover={handleHover}/>
      <BocconiLogo size={50} id="bocconi" handleHover={handleHover}/>
      <YorkLogo size={50} id="york" handleHover={handleHover}/>
    </div>
    {hover}
  </div>)

}

export default Experience