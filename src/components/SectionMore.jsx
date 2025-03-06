import './../styles/section-more.css'
function SectionMore({}) {
    return (
        <section className="ctn-section-main">
            <div className='ctn-title-more'>
                <button className='buttom-more' id='button-back'> Volver </button>
        
            </div>
            <p className="title-more"> Glaciar Perito Moreno</p>          
           

            <div className='ctn-btn-more'>
                <button className='buttom-more' id='button-more'>Consultar / Reservar</button>
            </div>
        </section>
    );
}
export {SectionMore} ;