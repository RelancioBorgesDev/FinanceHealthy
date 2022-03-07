import React from 'react'
import form from './form.module.css'

export default function FormLogin() {
  return (
    <form action="" className={form.form}>
        <input className={form.input} type="email" placeholder="Email..."required/>
        <input className={form.input} type="password" placeholder="Senha..." required/>
        <button className={form.btn_submit}type="submit">Logar</button>
    </form>
  )
}
