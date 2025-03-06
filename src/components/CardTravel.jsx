import './../styles/card-travel.css';
import { useContext, useEffect, useState } from 'react';
import { LanguageContext } from '../context/language.context';


function CardTravel ({ title, imgUrl, info, price }) {
  const { language } = useContext(LanguageContext);
  const msj =`Hola queria consultar disponibilidad por ${title}`;
  // const fechaHoy = new Date().toISOString().split("T")[0];
  const linkWA = `http://wa.me/+5492966764900?text=${msj}`
  const [finalPrice, setFinalPrice] = useState(price);

  useEffect(() => {
    if( language === 'es'){
      setFinalPrice(`ARS $ ${price}`);
    }else{
      setFinalPrice(`USD $${Math.round((price/1200))}`)
    }
  }, [language]);
  
  return (
    <div className='ctn-card-travel'  >
      <img src={`/src/assets/${imgUrl}`} alt="" />
      <div className="cmnts-card">
        <h3 className='title-card'>{title}</h3>
        <div className='ctn-info'>
          <p>{info}</p>
        </div>
        {/* <input 
            type="date" 
            name="fecha-traslado" 
            id="fecha-traslado" 
            min={fechaHoy}
            defaultValue={fechaHoy}/> */}
        <p className='price'>{finalPrice}</p>
      </div>
      <a href={linkWA}
          target="_blank" className='buttom-card'>Consultar / Reservar
        </a>
    </div>
  )
}

export { CardTravel };