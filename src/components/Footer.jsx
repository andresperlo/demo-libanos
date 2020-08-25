import React from 'react'
import '../css/Footer.css'
function Footer() {
  return (
    <footer className='classFooter mt-5 py-3 bg-dark text-white'>
      <h3 className='FooterH3'>El Libano Producciones</h3>
      <div className='div-Redes'>
        <h4 className='pt-2 text-center FooterH4'>Siguenos en las redes</h4>
        <div className='d-flex justify-content-center'>
          <div className='icons'>
           <a href="https://www.facebook.com/Andesapper-108892194267603/" target='_blank'> <i className="fab fa-facebook"></i></a> 
          </div>
          <div className='icons mx-3'>
          <a href="https://twitter.com/PerloAndres" target='_blank'><i className="fab fa-twitter"></i></a> 
          </div>
          <div className='icons mr-3'>
            <a href="https://www.instagram.com/?hl=es-la" target='_blank'><i className="fab fa-instagram"></i></a> 
          </div>
          <div className='icons'>
            <a href="http://bit.ly/ContratarServiciosLibano" target='_blank'><i className="fab fa-whatsapp"></i></a> 
          </div>
        </div>
      </div>
      <div className='div-Iframe'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14224.996734432752!2d-65.3538878!3d-26.9590072!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x97bc75827dfed65f!2sEl%20Libano%20Productores!5e0!3m2!1ses-419!2sar!4v1598286860299!5m2!1ses-419!2sar" width="300" height="250" frameBorder="0" allowfullscreenr="" aria-hidden="false" tabIndex="0"></iframe>
      </div>
    </footer>
  )
}

export default Footer