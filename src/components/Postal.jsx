import './../styles/postal.css'
function Postal () {
  
  return (
    <div className="ctn-postal-card">
      <div className='ctn-postal-img'>
        <img src="/src/assets/perito-postal.webp" alt="Perito" />
      </div>
      <h3 className='title-postal'> Pasarela Perito Moreno</h3>
      <div className='ctn-postal-info'>
       <div className="info-data">
        <div className='ctn-icon'>
          <img src="/src/assets/calendar-icon.png" alt="" />
          <p className='info-title'>Destino</p>
        </div>
        
        <p>El calafate</p>
       </div>
       <div className="info-data">
        <div className="ctn-icon">
          <img src="/src/assets/available-icon.png" alt="" />
          <p className='info-title'>Disponibilidad</p>
        </div>
        
        <p>Todos los dias</p>
        </div>
       <div className="info-data">
        <div className='ctn-icon'>
          <img src="/src/assets/time-icon.png" alt="" />
          <p className='info-title'>Duracion</p>
        </div>
        <p>4hs</p>
       </div>
       <div className="info-data"></div>
      </div>

      <div className='mas-info'>
        <a href="/">Mas informacion</a>
      </div>
    </div>
    
  )
}

export { Postal };