import './../styles/card-travel.css';
import { useContext } from 'react';
import { LanguageContext } from '../context/language.context';


function CardTravel ({ title, imgUrl, info, price }) {
  const { language } = useContext(LanguageContext);
  const msj =`Hola queria consultar disponibilidad por ${title}`;
  const fechaHoy = new Date().toISOString().split("T")[0];
  const linkWA = `http://wa.me/+5492966764900?text=${msj} el dia ${fechaHoy}`

 

  return (
    <div className='ctn-card-travel'  >
      <img src={`/src/assets/${imgUrl}`} alt="" />
      <h3 className='title-card'>{title}</h3>
      <div className='ctn-info'>
        <p>{info}</p>
        <p>{language}</p>
        <input 
          type="date" 
          name="fecha-traslado" 
          id="fecha-traslado" 
          min={fechaHoy}
          defaultValue={fechaHoy}/>
        <p className='price'>ARS ${price}</p>
      </div>
      <a href={linkWA}
        target="_blank" className='buttom-card'>Consultar / Reservar</a>
    </div>
  )
}

export { CardTravel };