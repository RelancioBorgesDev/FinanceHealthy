import React from 'react'
import form from './form.module.css'
/* import {api} from '../../services/api' */
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup"
import useCadastro from '../../hooks/useCadastro'


const validacao = yup.object().shape({
    nome:  yup.string().required("Nome é obrigatório"),
    email: yup.string().email().required("Email é obrigatório"),
    senha: yup.string().required("Senha é obrigatório").min(4, "Minimo quatro caracteres").max(10, "Máximo dez caracteres"),
})

export default function FormCadastro() {
  const {register, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(validacao)
  })
  
  const criarUsuario = useCadastro();

  let enviarParaUsuario = async (data) => {
    criarUsuario(data)
  }
  
  return (
    <form action="" onSubmit={handleSubmit(enviarParaUsuario)} className={form.app_form}>
        <input
          className={form.input}
          type="text"
          placeholder="Nome..."
          name="nome"
          {...register("nome")}
          />
          <p className={form.erro}>{errors.nome?.message}</p>
        <input
          className={form.input}
          type="email"
          placeholder="Email.."
          name="email"
          {...register("email")}
          />
          <p className={form.erro} >{errors.email?.message}</p>
        <input
          className={form.input}
          type="password"
          placeholder="Senha..."
          name="senha"
          {...register("senha")}
          />
          <p className={form.erro}>{errors.senha?.message}</p>
  
        <button className={form.btn_submit}type="submit">Cadastrar</button>
  </form>
  )
}
