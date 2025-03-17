import './../styles/section-more.css';

import { useContext, useEffect, useState } from 'react';
import { LanguageContext } from '../context/language.context';
import { tarjetas } from '../db/cards-info';
import { CarruselMore } from './CarruselMore';

function SectionMore() {

    const { cardId, setCardId, language } = useContext(LanguageContext);
    const [activeClass, setActiveClass] = useState("ctn-section-main-disabled");

    // traemos los datos de la tarjeta
    // const infoCard = tarjetas.find(e => e.id === cardId);
    const [infoCard, setInfoCard] = useState(tarjetas.find(e => e.id === cardId));
    //const fechaHoy = new Date().toISOString().split("T")[0];

    useEffect(() => {
        setInfoCard(tarjetas.find(e => e.id === cardId))
    }, [cardId]);

    const msj =`Hola queria consultar disponibilidad por ${infoCard?.title}` || undefined;
    const linkWA = `http://wa.me/+5492966764900?text=${msj}`;

    // Reveer
    const [priceFinalMore, setPriceFinalMore] = useState(infoCard?.price);


    useEffect(() => {
        if(cardId !== 0){
            setActiveClass("ctn-section-main");
        }
        
    }, [infoCard]);

    useEffect(() => {
        if( language === 'es'){
          setPriceFinalMore(`ARS $ ${infoCard?.price || tarjetas[cardId].price}`);
        }else{
          setPriceFinalMore(`USD $${Math.round((infoCard?.price/1200))}`)
        }
    }, [language, infoCard]);

    const buttonBack = () => {
        setActiveClass('ctn-section-main-disabled');
        setCardId(0);
    };

    return (
        <section className={activeClass} id='see-more'>
            <div className='ctn-title-more'>
                <a className='button-more' id='button-back' onClick={buttonBack} href='#traslados'> Volver </a>
                <p className="title-more"> { infoCard?.title } </p> 
            </div>
           

            <div className="ctn-ext-ctn">
                <div className="ctn-ext-info">
                    <p> {infoCard?.data.starlink} </p>
                    <p> {infoCard?.data.duration} </p>
                    <p> {infoCard?.data.persons} </p>
                    <p> {infoCard?.data.place} </p>
                    <p> {infoCard?.data.help} </p>
                </div>

                <div className="ctn-ext-info">
                    <p>🛰️ {infoCard?.data.starlink} </p>
                    <p>⏲️ {infoCard?.data.duration} </p>
                    <p>👤 {infoCard?.data.persons} </p>
                    <p>🏡 {infoCard?.data.place} </p>
                    <p>📄 {infoCard?.data.help} </p>
                </div>

                <div className="ctn-ext-imgs">
                    <CarruselMore images={infoCard?.images}></CarruselMore>
                </div>
            </div>    
           
            <div className='ctn-btn-more'>
                <p className='price-more'>{priceFinalMore}</p>
                <a className='button-more' id='button-request' href={linkWA} target='_blank'>Consultar / Reservar</a>
            </div>
        </section>
    );
}
export {SectionMore} ;