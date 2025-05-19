import React from 'react'
import './Header.css'
import { assets } from '../../assets/assets'


const Header = () => {
  return (
    <div className='header'>
        <div className="header-contents">
            <h2 style={{maxWidth: "99%"}}>Order your favourite food here:</h2>
            <p>"Enjoy every scoop at Meridian Ice Cream Café, where great flavors meet pure delight. Treat yourself to sweetness in every bite!"</p>
            <button>View Menu</button>
        </div>
    </div>
  )
}

export default Header