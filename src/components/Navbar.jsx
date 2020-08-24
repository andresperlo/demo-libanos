import React from 'react'
import '../css/Navbar.css'
import sandia from '../img/sandia.jpeg'
import uvas from '../img/uvas.jpeg'
import granada from '../img/granada.jpeg'
/* import logo from '../img/logo.png' */


function Navbar() {
    return (
        <>
            <div>
                <div id="carouselExampleFade" className="div-Carousel carousel slide carousel-fade" data-ride="carousel" data-interval="3000" hover='false' wrap='true'>
                    <h1 className='text-center divh1'>El Libano Producciones</h1>
                    <div className='div-Form'>
                        <div><h5 className='text-center py-3'>Accede al Bono de Descuento</h5></div>
                        <form>
                            <div className="form-group">
                                <input type="email" maxLength='40' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Ingrese su Email' />
                            </div>
                            <div className="form-group">
                                <input type="text" maxLength='20' className="form-control" id="exampleInputPassword1" placeholder='Ingrese su Celular' />
                            </div>
                            <button type="submit" className="btn btn-primary w-100">Acceder al Descuento</button>
                        </form>
                    </div>
                    <div className="carousel-inner">
                        {/*  <div>
                        <img src={logo} className='img-logo' alt=""/>
                        </div> */}
                        <div className="carousel-item active">
                            <img src={sandia} className="d-block img-carousel" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={uvas} className="d-block img-carousel" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={granada} className="d-block img-carousel" alt="..." />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar