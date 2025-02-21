import './../styles/form-principal.css';
function FormPrincipal ({destino}) {
  return (
  <form action="" className='ctn-form-principal'>
    <p>Consulta / Reserva </p>
    <p>Datos generales</p>
    <div className="ctn-user-data">
      <p>Nombre completo:</p>
      <input type="text" placeholder='nombre completo'/>
    </div>
    <div className="ctn-user-data">
      <p>Personas:</p>
      <input type="number" name="" id="" value={1} min={1} max={15} />
    </div>
    <div className="ctn-user-data">
      <p>Email:</p>
      <input type="email" placeholder='email' name="" id="" />
    </div>
    <div className="ctn-user-data">
      <p>Telefono</p>
      <input type="tel" name="" id="" />
    </div>
    <div className="ctn-user-service">
      <p>Fecha</p>
      <input type="date" name="" id="" />
      <p>Servicio Starlink</p>
      <div className='ctn-checkbox'> 
        <input type="checkbox" name="" id="" />
      </div>
     
    </div>
    <button type="submit">Consultar</button>
  </form>
 )
}

export { FormPrincipal };
