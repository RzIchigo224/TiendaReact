function Footer() {
  return (
    <footer className="footer">
      <div className="contenedor">
        <div className="barra">
          <a className="logo" href="index.html">
            <h1 className="logo__nombre no-margin centrar-texto">
              <span className="logo__negrita">Technology Store</span>
            </h1>
          </a>
          <nav className="navegacion__secundaria">
            <a href="Sucursales.html" className="navegacion__secundaria__enlace">
              Sucursales
            </a>
            <a href="TerminosCondiciones.html" className="navegacion__secundaria__enlace">
              Términos y condiciones
            </a>
            <a href="Contacto.html" className="navegacion__secundaria__enlace">
              Contacto
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
