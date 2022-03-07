import React from 'react'
import ButtonSwitchPage from '../components/ButtonSwitchPage/ButtonSwitchPage'
import FormLogin from '../components/FormLogin/FormLogin'
import SocialMediaIcons from '../components/SocialMediaIcons/SocialMediaIcons'
import login from '../style/login.module.css'


export default function Login() {
  return (
    <>
      <div className={login.container_login}>
      <ButtonSwitchPage id={1} page={Login}/>
        <div className={login.container_conteudo}>
          <FormLogin/>
            <section className={login.content}>
              <h2>Finance<strong>Healthy</strong>.</h2>
              <p>Agora que você realizou o cadastro faça o login para acessar os conteúdos disponíveis</p>
              <SocialMediaIcons/>
            </section>
        </div>
      </div>
    </>
  )
}
