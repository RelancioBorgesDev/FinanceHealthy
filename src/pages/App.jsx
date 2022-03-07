/* eslint-disable jsx-a11y/anchor-is-valid */
import '../style/normalize.css'
import app from '../style/app.module.css'

import ButtonSwitchPage from '../components/ButtonSwitchPage/ButtonSwitchPage'
import FormCadastro from '../components/FormCadastro/FormCadastro'
import SocialMediaIcons from '../components/SocialMediaIcons/SocialMediaIcons';


function App() {
  return (
  <div className={app.app}>
      <ButtonSwitchPage id={0} page={"Cadastro"}/>
    <div className={app.container}>
        <section className={app.content}>
            <h2>Finance<strong>Healthy</strong>.</h2>
            <p>Cadastre se para aproveitar todos os conteúdos do nosso website financeiro! </p>
            <SocialMediaIcons/>
        </section>
        
        <FormCadastro/>
    </div>
  </div>
  );
}

export default App;
