export default function ListaRecetas({ recetas, onSeleccionarReceta }) {
  return (
    <div className="pantalla-lista">
      <header className="header-principal">
        <h1>Recetario</h1>
        <p className="subtitulo-principal">
          Selecciona una receta para ver sus ingredientes y el modo de preparación paso a paso.
        </p>
      </header>

      <div className="grid-recetas">
        {recetas.map((receta) => (
          <article key={receta.id} className="tarjeta-receta">
            <div className="contenedor-foto">
              {receta.imagen && (
                <img
                  src={receta.imagen}
                  alt={receta.nombre}
                  className="foto-receta"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const fallback = e.currentTarget.nextElementSibling;
                    if (fallback) fallback.style.display = 'block';
                  }}
                />
              )}
              <div
                className="icono-receta"
                style={{ display: receta.imagen ? 'none' : 'block' }}
              >
                {receta.icono}
              </div>
            </div>

            <h2>{receta.nombre}</h2>
            <p className="descripcion-corta">{receta.descripcion}</p>

            <div className="meta-info">
              <span>{receta.tiempo}</span>
              <span>{receta.porciones}</span>
              <span>{receta.dificultad}</span>
            </div>

            <button
              className="btn-ver-receta"
              type="button"
              onClick={() => onSeleccionarReceta(receta.id)}
            >
              Ver receta completa →
            </button>
          </article>
        ))}
      </div>
    </div>
  );
}
