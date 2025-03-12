import './App.css'
// import { Postal } from './components/Postal'
import { CardTravel } from './components/CardTravel'
//import { FormPrincipal } from './components/formprincipal'
import { BarraNav } from './components/BarraNav'
import { Portada } from './components/Portada'
import { FooterMain } from './components/FooterMain'
import { tarjetas } from './db/cards-info'
import { SectionMore } from './components/SectionMore'

function App() {

  const datadb = tarjetas.map((e) => { 
    return (
    <CardTravel
      key={e.id}
      id={e.id}
      title={e.title.toLocaleUpperCase()}
      info={e.info}
      imgUrl={e.imgUrl}
      price={e.price}
    />
    )
  });

  return (
    <>
     <BarraNav/>
     <Portada />
    {/* <p>Traslados</p> */}
     <div id='traslados' className='ctn-cards'>
      {datadb}
     </div>
    
     <SectionMore/>
     <FooterMain></FooterMain>

     {/* <FormPrincipal></FormPrincipal> */}
   
    {/* <Postal></Postal> */}
    </>
  )
}

export default App
