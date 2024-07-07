import React from 'react'
import './Header.css'
import {motion} from 'framer-motion';

const Header = () => {
  return (
    <div className='header'>
        <div className="header-content">
            <h2>Order your favuorite food here</h2>
            <p>Indulge in a world of flavors, delivered with ease right to your doorstep.  Experience the convenience of culinary delight, freshly prepared and brought straight to you.</p>
            <motion.button whileTap={{scale:0.9}}>View Menu</motion.button>
        </div>
    </div>
  )
}

export default Header