import './../styles/barra-nav.css'
import { useContext } from 'react';
import { LanguageContext } from '../context/language.context';

function BarraNav () {
  const { language, setLanguage } = useContext(LanguageContext);
  

  const toggleLang = (e) => {
    console.log(e.target);
    if (e.target.value === 'English'){
      setLanguage('en');
    }else {
      setLanguage('es');
    }
   
  };

  return (
    <div id='inicio' className="ctn-barra-nav">
      <div className="ctn-logo-nav">
        <img src="/src/assets/logo.png" alt="" />
      </div>
      <div className='ctn-nombre-nav'>
        BLUE CALAFATE PATAGONIA
      </div>
      <div className="ctn-idioma">
        <div className="idioma" onChange={toggleLang}>
         
          <input type="radio" name="lang" id="lang-es" value='Español' className='radio-lang'/>
          <label htmlFor="lang-es" className='label-lang langEs'>$ARS 🇦🇷 </label>

          <input type="radio" name="lang" id="lang-en" value='English' className='radio-lang'/>
          <label htmlFor="lang-en" className='label-lang langEn'>USD 💵</label>  

        </div>
      </div>
      <div className='ctn-secciones-nav'>
        <ul className='lista-nav'>
          <li><a href='#'>INICIO</a></li>
          <li><a href='#traslados'>TRASLADOS</a></li>
          {/* <li><a href='#contacto'>NOSOTROS</a></li> */}
          <li><a href='#contacto'>CONTACTO</a></li>
        </ul>
      </div>
    </div>
  )
}

export { BarraNav };