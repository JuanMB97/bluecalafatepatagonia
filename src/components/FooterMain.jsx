import './../styles/footer-main.css';

function FooterMain () {
  return (
    <footer id='contacto' className='ctn-footer-main'>
      <div className='ctn-footer-redes'>
        <div className="footer-contacto">
          <p>Consultanos</p>
          <div className='ctn-contacto'>
            <img src="/src/assets/whatsapp.png" alt="" />
            <p>+549 2966626280</p>
          </div>
          <div className='ctn-contacto'>
            <img src="/src/assets/gmail.png" alt="" />
            <p>bluecalafatepatagonia@gmail.com</p>
          </div>
         
        </div>
        <div className="footer-permiso">
          <p> Al servicio de</p>
          <img src="/src/assets/GL_LEG2.png" alt="" />
          <p>Ley 14.930</p>
        </div>
        <div className="footer-contacto">
          <p>Seguinos en nuestras redes</p>
          <div className='ctn-contacto'>
            <a href='https://www.instagram.com/bluecalafatepatagonia' target='blank'>
              <img src="/src/assets/instagram.png" alt="" />
            </a>
            <a href='https://www.tiktok.com/@bluecalafate' target='blank'>
              <img src="/src/assets/tik-tok.png" alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="derechos">
        <p>Todos los derechos reservados &#169;</p>
        
      </div>
     
    </footer>
  )
}

export { FooterMain };