import './../styles/portada.css';
function Portada () {
  return (
    <div className="ctn-portada">
      <img className='img-portada' src="/src/assets/portada.jpg" alt="" />
      <p className='frase-portada'>Cumplimos sueños</p>
    </div>
  )
}

export { Portada };