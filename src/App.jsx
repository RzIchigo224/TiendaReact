import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      {/* Aquí puedes incluir el resto del contenido principal */}
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
        <div className="contenedor contenido-principal1">
          <div className="contenido2">
            <div>
              <a href="teclados.html">
                <img src="teclados.webp" alt="imagen de un teclado" />
              </a>
            </div>
            <h4>Teclados</h4>
            <h5>Desde $5,000</h5>
            <h6>Ahorra con mayoreo</h6>
          </div>
          <div className="contenido2">
            <a href="pantallas.html">
              <img src="pantallas.png" alt="imagen de una pantalla" />
            </a>
            <h4>Pantallas</h4>
            <h5>Desde $10,000</h5>
            <h6>Aprovecha las ofertas de otoño</h6>
          </div>
          <div className="contenido2">
            <a href="pcs.html">
              <img src="pcs.png" alt="imagen de una pc" />
            </a>
            <h4>Pc de escritorio</h4>
            <h5>Desde $15,000</h5>
            <h6>Escoge y nosotros la armamos</h6>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
