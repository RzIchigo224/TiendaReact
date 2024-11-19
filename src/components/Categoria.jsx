function Categoria({Categoria}) {
    const{nombre, precio, imagen, promo}=Categoria
    return (
        <div className="contenido2">
        <div>
          <a href="teclados.html">
            <img src={imagen} />
          </a>
        </div>
        <h4>{nombre}</h4>
        <h5>Desde ${precio}</h5>
        <h6>{promo}</h6>
      </div>
    );
  }
  
  export default Categoria;
  