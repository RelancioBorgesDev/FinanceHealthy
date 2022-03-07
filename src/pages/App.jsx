/* eslint-disable jsx-a11y/anchor-is-valid */
import '../style/normalize.css'
import app from '../style/app.module.css'
import { BiLastPage } from 'react-icons/bi'

import { AiOutlineInstagram, AiOutlineFacebook } from 'react-icons/ai'

import { FiTwitter } from 'react-icons/fi'
import ButtonSwitchPage from '../components/ButtonSwitchPage/ButtonSwitchPage'
import FormCadastro from '../components/FormCadastro/FormCadastro'

function App() {
  return (
  <div className={app.app}>
      <ButtonSwitchPage/>
    <div className={app.container}>
        <section className={app.content}>
            <h2>Finance<strong>Healthy</strong>.</h2>
            <p>Cadastre se para aproveitar todos os conteúdos do nosso website financeiro! </p>
            <div className={app.icons}>
              <AiOutlineInstagram className={app.icon}/>
              <AiOutlineFacebook className={app.icon}/>
              <FiTwitter className={app.icon}/>
            </div>
        </section>

        <FormCadastro/>
    </div>
  </div>
  );
}

export default App;
