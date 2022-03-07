/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { BiLastPage, BiFirstPage } from 'react-icons/bi'
import {Link} from 'react-router-dom'
import button from './button.module.css'

export default function ButtonSwitchPage({id, page}) {
  return (
    <button className={page === "Cadastro" ? button.btn_cadastro : button.btn_login}>
       {console.log(page)}
        <Link to={id === 1 ? "/" : "/Login"}>
          {id === 1 ? <BiFirstPage className={button.btn_icon}/> : <BiLastPage className={button.btn_icon}/>}
        </Link>
  </button>

  )
}
