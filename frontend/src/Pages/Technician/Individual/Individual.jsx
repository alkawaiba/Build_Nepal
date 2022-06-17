import React from 'react'
import { Link } from 'react-router-dom'
import './Individual.css'

const Individual = ({occupation,img1Src, img2Src, name1, name2, name3, name4,url}) => {
  return (
    <Link to = {`/technicians/${url}`} style = {{textDecoration : 'none'}}>
        <div className="individual">
            <img className = "individualImage" src={img1Src} alt="" />
            <p style = {{fontWeight : "bold",textAlign : "center"}}>{occupation}</p>
            <div className = "individualPersonContainer">
            <div className = "individualProfession">
              <p className = "individualName" >{name1}</p>
              <img className = "individualAvatar" src = {img2Src} alt = "" />
            </div>
            <div className = "individualProfession">
              <p className = "individualName">{name2}</p>
              <img className = "individualAvatar" src = {img2Src} alt = "" />
            </div>
            <div className = "individualProfession">
              <p className = "individualName">{name3}</p>
              <img className = "individualAvatar" src = {img2Src} alt = "" />
            </div>
            <div className = "individualProfession">
              <p className = "individualName">{name4}</p>
              <img className = "individualAvatar" src = {img2Src} alt = "" />
            </div>
            </div>
            
            
        </div> 
        </Link>
         )
}

export default Individual