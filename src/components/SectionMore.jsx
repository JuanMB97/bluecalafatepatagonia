import './../styles/section-more.css';

import { useContext, useEffect, useState } from 'react';
import { LanguageContext } from '../context/language.context';
import { tarjetas } from '../db/cards-info';
import { CarruselMore } from './CarruselMore';
function SectionMore() {

    const { cardId } = useContext(LanguageContext);
    const [activeClass, setActiveClass] = useState("ctn-section-main-disabled");

    // traemos los datos de la tarjeta
    const infoCard = tarjetas.find(e => e.id === cardId);
    //const fechaHoy = new Date().toISOString().split("T")[0];

    const msj =`Hola queria consultar disponibilidad por ${infoCard?.title}` || undefined;
    const linkWA = `http://wa.me/+5492966764900?text=${msj}`;
    
    useEffect(() => {
        if(cardId !== 0){
            setActiveClass("ctn-section-main");
        }
        
    }, [infoCard]);

    const buttonBack = () => {
        setActiveClass('ctn-section-main-disabled');
    };

    return (
        <section className={activeClass} id='see-more'>
            <div className='ctn-title-more'>
                <a className='buttom-more' id='button-back' onClick={buttonBack} href='#traslados'> Volver </a>
        
            </div>
            <p className="title-more"> { infoCard?.title } </p> 

            <div className="ctn-ext-ctn">
                <div className="ctn-ext-info">
                    <p> {infoCard?.data.starlink} </p>
                    <p> {infoCard?.data.duration} </p>
                    <p> {infoCard?.data.persons} </p>
                    <p> {infoCard?.data.place} </p>
                    <p> {infoCard?.data.help} </p>
                </div>

                <div className="ctn-ext-info">
                    <p> {infoCard?.data.starlink} </p>
                    <p> {infoCard?.data.duration} </p>
                    <p> {infoCard?.data.persons} </p>
                    <p> {infoCard?.data.place} </p>
                    <p> {infoCard?.data.help} </p>
                </div>

                <div className="ctn-ext-imgs">
                    <CarruselMore images={infoCard?.images}></CarruselMore>
                </div>
            </div>    
           
            <div className='ctn-btn-more'>
                <a className='buttom-more' id='button-more' href={linkWA}>Consultar / Reservar</a>
            </div>
        </section>
    );
}
export {SectionMore} ;