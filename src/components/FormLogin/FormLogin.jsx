import React from 'react'
import form from './form.module.css'
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from 'yup'

const validacao = yup.object().shape({
    email: yup.string().email().required("Email é obrigatório"),
    senha: yup.string().required("Senha é obrigatória"),
})

export default function FormLogin() {
  const {register, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(validacao)
  })
  return (
    <form action="" className={form.form} onSubmit={handleSubmit()}>
      <input
          className={form.input}
          type="email"
          placeholder="Email..."
          name="email"
          {...register("email")}
      />
        <p className={form.erro}>{errors.email?.message}</p>
      <input
          className={form.input}
          type="password"
          placeholder="Senha..."
          name="senha" 
          {...register("senha")}
      />
      <p className={form.erro}>{errors.senha?.message}</p>
        <button className={form.btn_submit}type="submit">Logar</button>
    </form>
  )
}
