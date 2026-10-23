export default function DetalleReceta({ receta, onVolver }) {
  if (!receta) {
    return (
      <div className="pantalla-detalle">
        <p>No se encontró la receta.</p>
        <button className="btn-volver" type="button" onClick={onVolver}>
          ← Volver al recetario
        </button>
      </div>
    );
  }

  return (
    <article className="pantalla-detalle">
      <nav className="nav-detalle">
        <button className="btn-volver" type="button" onClick={onVolver}>
          ← Volver a recetas
        </button>
      </nav>

      <header className="header-detalle">
        <div className="contenedor-foto-detalle">
          {receta.imagen && (
            <img
              src={receta.imagen}
              alt={receta.nombre}
              className="foto-detalle"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                const fallback = e.currentTarget.nextElementSibling;
                if (fallback) fallback.style.display = 'block';
              }}
            />
          )}
          <div
            className="icono-grande"
            style={{ display: receta.imagen ? 'none' : 'block' }}
          >
            {receta.icono}
          </div>
        </div>

        <h1>{receta.nombre}</h1>

        <div className="meta-info-detalle">
          <div className="meta-card">
            <span className="meta-label">Tiempo</span>
            <span className="meta-valor">{receta.tiempo}</span>
          </div>
          <div className="meta-card">
            <span className="meta-label">Porciones</span>
            <span className="meta-valor">{receta.porciones}</span>
          </div>
          <div className="meta-card">
            <span className="meta-label">Dificultad</span>
            <span className="meta-valor">{receta.dificultad}</span>
          </div>
        </div>

        <p className="descripcion-detalle">{receta.descripcion}</p>
      </header>

      <div className="columnas-detalle">
        <section className="bloque-ingredientes">
          <h2>Ingredientes</h2>
          <ul className="lista-ingredientes">
            {receta.ingredientes.map((ingrediente, index) => (
              <li key={index}>
                <span className="bullet-check">✓</span>
                <span>{ingrediente}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="bloque-instrucciones">
          <h2>Modo de Preparación</h2>
          <ol className="lista-pasos">
            {receta.pasos.map((paso, index) => (
              <li key={index} className="paso-item">
                <span className="numero-paso">{index + 1}</span>
                <p className="texto-paso">{paso}</p>
              </li>
            ))}
          </ol>
        </section>
      </div>

      <footer className="footer-detalle">
        <button className="btn-volver-abajo" type="button" onClick={onVolver}>
          ← Regresar al menú principal
        </button>
      </footer>
    </article>
  );
}
