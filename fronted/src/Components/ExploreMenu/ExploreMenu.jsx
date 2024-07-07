import React from 'react'
import './Explore.css'
import {menu_list} from '../../assets/assets';
import {motion} from 'framer-motion';

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore our menu</h1>
        <p className='explore-menu-text'>Explore a world of culinary delights, from comforting classics to exotic specialties, all available for delivery. Indulge in a variety of mouthwatering dishes from our diverse menu, crafted to tantalize your taste buds.</p>
        <div className="explore-menu-list">
            {
                menu_list.map((item,index)=>{
                    return (
                        <motion.div whileTap={{scale:0.9}} onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-list-item">
                            <img className={category===item.menu_name?"active":" "} src={item.menu_image}alt="" />
                            <p>{item.menu_name}</p>
                        </motion.div>
                    )
                })
            }
        </div>
        <hr />
    </div>
  )
}

export default ExploreMenu