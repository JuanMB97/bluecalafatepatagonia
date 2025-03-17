import './../styles/footer-main.css';

function FooterMain () {
  return (
    <footer id='contacto' className='ctn-footer-main'>
      <div className='ctn-footer-redes'>
        <div className="footer-contacto">
          <p className='contacto-title'>Consultanos</p>
      
          <div className='ctn-contacto'>
            <img src="/src/assets/whatsapp.png" alt="" />
            <img src="/src/assets/gmail.png" alt="" />
          </div>
        </div>
        <div className="footer-contacto">
          <p className='contacto-title'>Seguinos</p>
          <div className='ctn-contacto'>
            <a href='https://www.instagram.com/bluecalafatepatagonia' target='blank'>
              <img src="/src/assets/instagram.png" alt="logo-instagram" />
              <p className='name-icon'>Instagram</p>
            </a>

            <a href='https://www.tiktok.com/@bluecalafate' target='blank'>
              <img src="/src/assets/tik-tok.png" alt="logo-tik-tok" />
              <p className='name-icon'>Tik Tok</p>
            </a>
            <a href='https://www.facebook.com/profile.php?id=100054221511073' id='logo-facebook' target='blank'>
              <img src="/src/assets/facebook_ico.png" alt="logo-facebook" />
              <p className='name-icon'>Facebook</p>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-permiso">
          <p> Al servicio de</p>
          <img src="/src/assets/GL_LEG2.png" alt="GL_LEG2" />
          <p>Ley 14.930</p>
        </div>
      <div className="derechos">
        <p>Todos los derechos reservados &#169;</p>
        
      </div>
     
    </footer>
  )
}

export { FooterMain };