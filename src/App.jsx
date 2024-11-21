import React from 'react'
import { useState } from "react" 
import Header from './components/Header'
import Footer from './components/Footer'
import { db } from './data/db';
import Categoria from './components/Categoria'

function App() {

const [data,setData]=useState(db)

  return (
    <>
      <Header />
      <div className="contenedor contenido-principal">
      <main className="blog">
        <div className="contenedor__contenido">
          <div className="contenido2">
            <img src="envio.png" alt="imagen de delivery" />
            <h4>Envio gratis</h4>
            <p>Envio gratis a partir de $2000 pesos en compra</p>
          </div>
          <div className="contenido2">
            <img src="devolucion.png" alt="imagen de refresh" />
            <h4>Devolución en 5 días</h4>
            <p>Devolución completamente gratis</p>
          </div>
        </div>
        
        <div className="categorias">
          {data.map((item)=>(
          <Categoria 
          key={item.id}
          Categoria={item}
          />
          )
          )}
        </div>
      </main>
      </div>
      <Footer />
      </>
  );
}

export default App;
