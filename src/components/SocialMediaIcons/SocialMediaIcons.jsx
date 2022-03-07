import React from 'react'
import { AiOutlineFacebook, AiOutlineInstagram } from 'react-icons/ai'
import { FiTwitter } from 'react-icons/fi'
import icon from './icon.module.css'
export default function SocialMediaIcons() {
  return (
    <div className={icon.icons}>
              <AiOutlineInstagram className={icon.icon}/>
              <AiOutlineFacebook className={icon.icon}/>
              <FiTwitter className={icon.icon}/>
    </div>
  )
}
