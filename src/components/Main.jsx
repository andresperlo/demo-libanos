import React from 'react'
import '../css/Main.css'
import anana from '../img/anana.jpeg'
import arandanos from '../img/arandanos.jpeg'
import banana from '../img/bananas.jpeg'
import frutilla from '../img/frutilla.jpeg'
import higos from '../img/higos.jpeg'
import limon from '../img/limon.jpeg'
import moras from '../img/moras.jpeg'
import naranja from '../img/naranja.jpeg'

function Main() {
    return (
            <div className="container">
                <div className='my-5 text-center d-none d-md-block d-lg-block'><h1>Nuestros Productos</h1></div>
                <div className='my-5 text-center d-md-none d-lg-none'><h3>Nuestros Productos</h3></div>
                <div className="card-columns">
                    <div>
                        <div>
                            <img src={anana} className='div-Img' alt="" />
                        </div>
                        <div>
                            <img src={arandanos} className='div-Img' alt="" />
                        </div>
                        <div>
                            <img src={banana} className='div-Img' alt="" />
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src={frutilla} className='div-Img' alt="" />
                        </div>
                        <div>
                            <img src={higos} className='div-Img' alt="" />
                        </div>
                        <div>
                            <img src={limon} className='div-Img' alt="" />
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src={moras} className='div-Img' alt="" />
                        </div>
                        <div>
                            <img src={naranja} className='div-Img' alt="" />
                        </div>
                        <div>
                            <img src={anana} className='div-Img' alt="" />
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Main