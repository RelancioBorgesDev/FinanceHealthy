import React from 'react'
import form from './form.module.css'

export default function FormCadastro() {
  return (
    <form action="" className={form.app_form}>
        <input className={form.input} type="text" placeholder="Nome..."required/>
        <input className={form.input} type="email" placeholder="Email..."required/>
        <input className={form.input} type="password" placeholder="Senha..." required/>
        <input className={form.input} type="password" placeholder="Confirme a Senha..." required/>
        <button className={form.btn_submit}type="submit">Cadastrar</button>
  </form>
  )
}
