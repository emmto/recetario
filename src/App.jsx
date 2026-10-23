import { useState } from 'react';
import { recetas } from './data/recetas';
import ListaRecetas from './components/ListaRecetas';
import DetalleReceta from './components/DetalleReceta';
import './App.css';

export default function App() {
  const [recetaId, setRecetaId] = useState(null);

  // Buscar la receta seleccionada si existe
  const recetaActiva = recetas.find((r) => r.id === recetaId);

  return (
    <div className="app-container">
      {recetaActiva ? (
        /* Pantalla 2: Detalle de la receta seleccionada */
        <DetalleReceta
          receta={recetaActiva}
          onVolver={() => setRecetaId(null)}
        />
      ) : (
        /* Pantalla 1: Pantalla principal con las 2 recetas */
        <ListaRecetas
          recetas={recetas}
          onSeleccionarReceta={(id) => setRecetaId(id)}
        />
      )}
    </div>
  );
}
