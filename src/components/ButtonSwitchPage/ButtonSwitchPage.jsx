/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { BiLastPage } from 'react-icons/bi'
import button from './button.module.css'

export default function ButtonSwitchPage() {
  return (
    <button className={button.btn}>
        <a href="#">
          <BiLastPage className={button.btn_icon}/>
        </a>
  </button>

  )
}
