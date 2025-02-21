import './../styles/barra-nav.css'
import { useContext } from 'react';
import { LanguageContext } from '../context/language.context';

function BarraNav () {
  const { language, setLanguage } = useContext(LanguageContext);

  const toggleLang = () => {
    if (language === 'en'){
      setLanguage('es');
    }else {
      setLanguage('en');
    }
   
  };

  return (
    <div id='inicio' className="ctn-barra-nav">
      <div className="ctn-logo-nav">
        <img src="/src/assets/logo.png" alt="" />
      </div>
      <div className='ctn-nombre-nav'>
        Blue Calafate Patagonia
      </div>
      <div className="ctn-idioma">
        <div className="idioma">
         
          <input type="radio" name="lang" id="lang-es" value='Español' className='radio-lang' checked onChange={toggleLang} />
          <label htmlFor="lang-es" className='label-lang langEs'>Español</label>

          <input type="radio" name="lang" id="lang-en" value='English' className='radio-lang' onChange={toggleLang}/>
          <label htmlFor="lang-en" className='label-lang langEn'>English</label>  

        </div>
      </div>
      <div className='ctn-secciones-nav'>
        <ul className='lista-nav'>
          <li><a href='#'>Inicio</a></li>
          <li><a href='#traslados'>Traslados</a></li>
          <li><a href='#contacto'>Nosotros</a></li>
          <li><a href='#contacto'>Contacto</a></li>
        </ul>
      </div>
    </div>
  )
}

export { BarraNav };