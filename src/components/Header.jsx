function Header() {
  return (
    <header className="header">
      <div className="sombra">
        <div className="contenedor">
          <div className="barra">
            <a className="logo" href="index.html">
              <h1 className="logo__nombre no-margin centrar-texto">
                <span className="logo__negrita">Technology Store</span>
              </h1>
            </a>
            <nav className="navegacion">
              <a href="favoritos.html">
                <img src="img/corazon1.png" alt="imagen de favoritos" />
              </a>
              <a href="perfil.html">
                <img src="img/persona1.png" alt="imagen de perfil" />
              </a>
            </nav>
          </div>
        </div>
        <div className="header__texto">
          <nav className="navegacion2">
            <a href="Marcas.html" className="navegacion__enlace">
              Marcas
            </a>
            <a href="Vendidos.html" className="navegacion__enlace">
              Más vendido
            </a>
            <a href="Contacto.html" className="navegacion__enlace">
              Contacto
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
