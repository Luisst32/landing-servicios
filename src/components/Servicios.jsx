import React, { useState } from 'react';

const LISTA_SERVICIOS = [
  {
    id: 1,
    categoria: 'web',
    titulo: 'Desarrollo Web Fullstack',
    icono: 'bi-laptop',
    badge: 'Más Solicitado',
    badgeColor: 'bg-primary',
    descripcion: 'Construcción de aplicaciones web interactivas, seguras y de alto rendimiento utilizando React, Bootstrap y APIs REST.',
    puntos: ['Single Page Applications (SPA)', 'Diseño 100% responsivo y accesible', 'Integración de APIs y bases de datos']
  },
  {
    id: 2,
    categoria: 'movil',
    titulo: 'Desarrollo de Apps Móviles',
    icono: 'bi-phone',
    badge: 'Multiplataforma',
    badgeColor: 'bg-info text-dark',
    descripcion: 'Soluciones móviles para Android e iOS enfocadas en la experiencia de usuario y máxima fluidez operativa.',
    puntos: ['React Native y arquitecturas híbridas', 'Notificaciones push y modo offline', 'Sincronización en tiempo real']
  },
  {
    id: 3,
    categoria: 'diseno',
    titulo: 'Diseño UI/UX & Sistemas de Diseño',
    icono: 'bi-palette',
    badge: 'Diseño Moderno',
    badgeColor: 'bg-warning text-dark',
    descripcion: 'Diseño de interfaces intuitivas y sistemas de componentes estandarizados que elevan la identidad y conversión de tu marca.',
    puntos: ['Prototipos interactivos de alta fidelidad', 'Pruebas de usabilidad y accesibilidad', 'Tokens de diseño y guías de estilos']
  },
  {
    id: 4,
    categoria: 'cloud',
    titulo: 'Cloud & Automatización DevOps',
    icono: 'bi-cloud-arrow-up',
    badge: 'Escalabilidad',
    badgeColor: 'bg-success',
    descripcion: 'Despliegues continuos, orquestación de servicios en la nube, infraestructura como código y monitorización 24/7.',
    puntos: ['Pipelines CI/CD automatizados', 'Contenedores Docker y despliegue ágil', 'Alta disponibilidad y backups automáticos']
  },
  {
    id: 5,
    categoria: 'seguridad',
    titulo: 'Ciberseguridad & Auditorías Web',
    icono: 'bi-shield-check',
    badge: 'Seguridad',
    badgeColor: 'bg-danger',
    descripcion: 'Evaluación exhaustiva de vulnerabilidades, protección contra ataques OWASP y aseguramiento de datos sensibles.',
    puntos: ['Auditorías de código y dependencias', 'Protección contra inyección y XSS', 'Autenticación robusta y cifrado']
  },
  {
    id: 6,
    categoria: 'consultoria',
    titulo: 'Consultoría y Arquitectura de Software',
    icono: 'bi-gear-wide-connected',
    badge: 'Estratégico',
    badgeColor: 'bg-secondary',
    descripcion: 'Asesoramiento técnico para selección de frameworks, refactorización de código legado y adopción de buenas prácticas.',
    puntos: ['Análisis y diagnóstico de arquitectura', 'Clean Code y Principios SOLID', 'Mentoría y capacitación de equipos']
  }
];

export default function Servicios({ onSeleccionarServicio }) {
  const [filtro, setFiltro] = useState('todos');

  const serviciosFiltrados = filtro === 'todos' 
    ? LISTA_SERVICIOS 
    : LISTA_SERVICIOS.filter(s => s.categoria === filtro);

  return (
    <section className="py-5" id="servicios">
      <div className="container py-4">
        {/* Header */}
        <div className="text-center mb-5">
          <span className="section-tag">Portafolio Profesional</span>
          <h2 className="display-5 fw-bold mb-3">Nuestros Servicios de Software</h2>
          <p className="text-muted lead col-lg-8 mx-auto">
            Ofrecemos soluciones integrales de desarrollo con estándares de la industria, 
            diseñadas para adaptarse con agilidad a tus requerimientos.
          </p>

          {/* Filter Pills */}
          <div className="d-flex flex-wrap justify-content-center gap-2 mt-4">
            <button
              className={`btn btn-sm px-3 py-2 rounded-pill ${filtro === 'todos' ? 'btn-primary' : 'btn-outline-secondary'}`}
              onClick={() => setFiltro('todos')}
            >
              Todos ({LISTA_SERVICIOS.length})
            </button>
            <button
              className={`btn btn-sm px-3 py-2 rounded-pill ${filtro === 'web' ? 'btn-primary' : 'btn-outline-secondary'}`}
              onClick={() => setFiltro('web')}
            >
              Web Fullstack
            </button>
            <button
              className={`btn btn-sm px-3 py-2 rounded-pill ${filtro === 'movil' ? 'btn-primary' : 'btn-outline-secondary'}`}
              onClick={() => setFiltro('movil')}
            >
              Apps Móviles
            </button>
            <button
              className={`btn btn-sm px-3 py-2 rounded-pill ${filtro === 'diseno' ? 'btn-primary' : 'btn-outline-secondary'}`}
              onClick={() => setFiltro('diseno')}
            >
              UI/UX
            </button>
            <button
              className={`btn btn-sm px-3 py-2 rounded-pill ${filtro === 'cloud' ? 'btn-primary' : 'btn-outline-secondary'}`}
              onClick={() => setFiltro('cloud')}
            >
              Cloud & DevOps
            </button>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {serviciosFiltrados.map((servicio) => (
            <div className="col" key={servicio.id}>
              <div className="card h-100 card-premium p-4 d-flex flex-column justify-content-between">
                <div>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <span className="icon-box-lg">
                      <i className={`bi ${servicio.icono}`}></i>
                    </span>
                    <span className={`badge ${servicio.badgeColor} px-3 py-2 rounded-pill`}>
                      {servicio.badge}
                    </span>
                  </div>

                  <h3 className="h4 fw-bold text-white mb-2">{servicio.titulo}</h3>
                  <p className="text-secondary small mb-3">{servicio.descripcion}</p>

                  <ul className="list-unstyled mb-4">
                    {servicio.puntos.map((punto, idx) => (
                      <li key={idx} className="small text-light d-flex align-items-center gap-2 mb-2">
                        <i className="bi bi-check-circle-fill text-info"></i>
                        <span>{punto}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 border-top border-secondary border-opacity-10 mt-auto">
                  <a
                    href="#formulario"
                    onClick={() => onSeleccionarServicio(servicio.titulo)}
                    className="btn btn-outline-glass w-100 rounded-pill d-flex align-items-center justify-content-center gap-2 text-decoration-none"
                  >
                    <span>Cotizar este Servicio</span>
                    <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
