import './App.css'
// import { Postal } from './components/Postal'
import { CardTravel } from './components/CardTravel'
//import { FormPrincipal } from './components/formprincipal'
import { BarraNav } from './components/BarraNav'
import { Portada } from './components/Portada'
import { FooterMain } from './components/FooterMain'
import { tarjetas } from './db/cards-info'


function App() {

  const datadb = tarjetas.map((e) => { 
    return (
    <CardTravel
      key={e.id}
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

     <div id='traslados' className='ctn-cards'>
      {datadb}
     </div>

    <FooterMain></FooterMain>

     {/* <FormPrincipal></FormPrincipal> */}
   
    {/* <Postal></Postal> */}
    </>
  )
}

export default App
