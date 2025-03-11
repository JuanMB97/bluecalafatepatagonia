import './../styles/carrusel-more.css';
import { useState } from 'react';
function CarruselMore ({images}) {

    const [disabledBack, setDisabledBack] = useState(true);
    const [disabledAfter, setDisabledAfter] = useState(false);
    const [indexImg, setIndexImg] = useState(0);

    const handleBack = () => {
        const tempIndex = indexImg - 1;
        if(tempIndex > 0){
            setIndexImg(tempIndex);
        }else if(tempIndex === 0) {
            setIndexImg(tempIndex);
            setDisabledBack(true);
        }
        setDisabledAfter(false)
        
    };

    const handleAfter = () => {
        const tempIndex = indexImg + 1;
        if((images.length - 2)  > indexImg) {
            setIndexImg(tempIndex);
        }else if((images.length - 2) === indexImg){
            setIndexImg(tempIndex)
            setDisabledAfter(true);
        }
        setDisabledBack(false);      
    };

    return (
        <section className="container">
            <div className="slider-wrapper">
                <div className="slider">
                    <img
                        className='image' 
                        src={images?.[indexImg] || ""}                        // id={name[0]}
                        // alt={name[0]}
                    />
                </div>
         
                <button disabled={disabledBack} className="slider-button" onClick={handleBack} id="back">&lt;</button>
                <button disabled={disabledAfter} className="slider-button" onClick={handleAfter} id="after">&gt;</button>
              
            </div>
      </section>
    );
}

export { CarruselMore };