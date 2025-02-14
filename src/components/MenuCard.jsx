import { ChevronRightOutlined } from '@mui/icons-material'
import React from 'react'

const MenuCard = ({imgSrc, name, isActive}) => {
  return (
    <div className={`rowMenuCard ${isActive ? `active` : ``}`}>
      <div className="imgBox">
        <img src={imgSrc} alt="" />
      </div>
      <h3>{name}</h3>
      <i className="loadMenu">
        <ChevronRightOutlined />
      </i>
    </div>
  )
}

export default MenuCard
