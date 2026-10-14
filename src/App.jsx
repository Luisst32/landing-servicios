import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Servicios from './components/Servicios';
import Informacion from './components/Informacion';
import Formulario from './components/Formulario';
import Footer from './components/Footer';

export default function App() {
  const [servicioSeleccionado, setServicioSeleccionado] = useState('');

  // Manejador para preseleccionar servicio y hacer scroll suave al formulario
  const handleSeleccionarServicio = (nombreServicio) => {
    setServicioSeleccionado(nombreServicio);
    const formElement = document.getElementById('formulario');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Scroll directo al formulario desde botones CTA
  const handleGoToForm = () => {
    const formElement = document.getElementById('formulario');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Scroll a la sección de servicios
  const handleExploreServices = () => {
    const serviciosElement = document.getElementById('servicios');
    if (serviciosElement) {
      serviciosElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-vh-100 d-flex flex-column bg-dark text-light">
      {/* 1. Navbar con navegación responsiva */}
      <Navbar onCotizarClick={handleGoToForm} />

      {/* 2. Hero Section con métricas y llamados a la acción */}
      <Hero
        onExploreServices={handleExploreServices}
        onGoToForm={handleGoToForm}
      />

      {/* 3. Sección de Servicios con filtros y tarjetas interactivas */}
      <Servicios onSeleccionarServicio={handleSeleccionarServicio} />

      {/* 4. Sección de Información, Metodología y Testimonios */}
      <Informacion />

      {/* 5. Sección de Formulario de Cotización con validaciones reactivas */}
      <Formulario servicioPreseleccionado={servicioSeleccionado} />

      {/* 6. Footer con información institucional y enlaces */}
      <Footer />
    </div>
  );
}
