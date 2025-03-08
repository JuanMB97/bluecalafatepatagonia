import './../styles/card-travel.css';
import { useContext, useEffect, useState } from 'react';
import { LanguageContext } from '../context/language.context';


function CardTravel ({ id, title, imgUrl, info, price }) {
  const { language, setCardId } = useContext(LanguageContext);
  const [finalPrice, setFinalPrice] = useState(price);
  
  useEffect(() => {
    if( language === 'es'){
      setFinalPrice(`ARS $ ${price}`);
    }else{
      setFinalPrice(`USD $${Math.round((price/1200))}`)
    }
  }, [language]);

  const handleMore = () => {
    setCardId(id);
  };
  
  return (
    <div className='ctn-card-travel'  >
      <img src={`/src/assets/${imgUrl}`} alt="" />
      <div className="cmnts-card">
        <h3 className='title-card'>{title}</h3>
        <div className='ctn-info'>
          <p>{info}</p>
        </div>
        <p className='price'>{finalPrice}</p>
      </div> 
      <a href='#see-more' onClick={handleMore} className='buttom-card'>Ver mas</a>
    </div>
  )
}

export { CardTravel };