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
import melon from '../img/melon.jpeg'


function Main() {
    return (
            <div className="container">
                <div className='my-5 text-center d-none d-md-block d-lg-block div-h1'><h1>Nuestros Productos</h1></div>
                <div className='my-5 text-center d-md-none d-lg-none div-h3'><h3>Nuestros Productos</h3></div>
                <div className="card-columns">
                    <div>
                        <div>
                            <img src={anana} className='div-Img border border-dark' alt="" />
                        </div>
                        <div>
                            <img src={arandanos} className='div-Img border border-dark' alt="" />
                        </div>
                        <div>
                            <img src={banana} className='div-Img border border-dark' alt="" />
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src={frutilla} className='div-Img border border-dark' alt="" />
                        </div>
                        <div>
                            <img src={higos} className='div-Img border border-dark' alt="" />
                        </div>
                        <div>
                            <img src={limon} className='div-Img border border-dark' alt="" />
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src={moras} className='div-Img border border-dark' alt="" />
                        </div>
                        <div>
                            <img src={naranja} className='div-Img border border-dark' alt="" />
                        </div>
                        <div>
                            <img src={melon} className='div-Img border border-dark' alt="" />
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Main