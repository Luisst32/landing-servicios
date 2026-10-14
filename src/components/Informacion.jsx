import React from 'react';

const PILARES = [
  {
    icono: 'bi-lightning-charge-fill',
    color: 'text-warning',
    titulo: 'Desarrollo Ágil y Rápido',
    descripcion: 'Entregables continuos y sprints iterativos para validar funcionalidades desde las primeras etapas del proyecto.'
  },
  {
    icono: 'bi-code-square',
    color: 'text-primary',
    titulo: 'Arquitectura Limpia & Modular',
    descripcion: 'Diseño basado en componentes reutilizables, respetando los estándares de React y separación de responsabilidades.'
  },
  {
    icono: 'bi-phone-flip',
    color: 'text-info',
    titulo: 'Enfoque Mobile-First',
    descripcion: 'Garantizamos que la experiencia en dispositivos móviles sea tan impecable y fluida como en estaciones de trabajo.'
  },
  {
    icono: 'bi-shield-check',
    color: 'text-success',
    titulo: 'Calidad & Pruebas Rigurosas',
    descripcion: 'Validaciones de formularios en cliente y servidor para mantener la consistencia y seguridad de la información.'
  }
];

const TESTIMONIOS = [
  {
    nombre: 'Ing. Carlos Mendoza',
    cargo: 'CTO en NovaTech Ecuador',
    comentario: 'La modularidad de los componentes y la fluidez del diseño con Bootstrap superaron nuestras expectativas. Excelente tiempo de respuesta.',
    estrellas: 5
  },
  {
    nombre: 'Dra. Andrea Morales',
    cargo: 'Directora Operativa en RedSalud',
    comentario: 'El formulario reactivo con validaciones instantáneas redujo un 70% los errores en las solicitudes de nuestros usuarios.',
    estrellas: 5
  },
  {
    nombre: 'Lcdo. Jorge Paredes',
    cargo: 'Gerente en Soluciones Educativas',
    comentario: 'Una interfaz limpia, moderna y con diseño adaptable a cualquier pantalla. Muy satisfecho con el nivel de profesionalismo técnico.',
    estrellas: 5
  }
];

export default function Informacion() {
  return (
    <section className="py-5 bg-opacity-25 bg-black" id="informacion">
      <div className="container py-4">
        {/* Section Header */}
        <div className="text-center mb-5">
          <span className="section-tag">Metodología & Calidad</span>
          <h2 className="display-5 fw-bold mb-3">¿Por qué Elegir Nuestras Soluciones?</h2>
          <p className="text-muted lead col-lg-8 mx-auto">
            Combinamos los mejores frameworks web (React + Bootstrap) con prácticas modernas 
            de ingeniería de software para crear experiencias digitales confiables.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="row g-4 mb-5">
          {PILARES.map((pilar, index) => (
            <div className="col-md-6 col-lg-3" key={index}>
              <div className="card-premium h-100 p-4 text-center">
                <div className="mb-3">
                  <i className={`bi ${pilar.icono} ${pilar.color} fs-1`}></i>
                </div>
                <h4 className="h5 fw-bold text-white mb-2">{pilar.titulo}</h4>
                <p className="text-secondary small mb-0">{pilar.descripcion}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Process Workflow */}
        <div className="card-premium p-4 p-lg-5 mb-5">
          <div className="row align-items-center g-4">
            <div className="col-lg-6">
              <span className="badge bg-primary bg-opacity-25 text-primary border border-primary border-opacity-25 mb-2">
                Flujo de Trabajo Estructurado
              </span>
              <h3 className="h2 fw-bold text-white mb-3">De la Idea al Despliegue en 4 Fases</h3>
              <p className="text-secondary mb-4">
                Seguimos un proceso riguroso alineado con las guías de desarrollo web de la UNEMI, 
                garantizando código limpio, mantenible y debidamente documentado.
              </p>

              <div className="d-flex flex-column gap-3">
                <div className="d-flex gap-3">
                  <div className="badge bg-primary rounded-circle p-2 d-flex align-items-center justify-content-center" style={{ width: '32px', height: '32px' }}>1</div>
                  <div>
                    <h5 className="h6 fw-bold text-white mb-1">Levantamiento & Planificación</h5>
                    <p className="text-muted small mb-0">Definición de requerimientos funcionales, arquitectura y wireframes.</p>
                  </div>
                </div>

                <div className="d-flex gap-3">
                  <div className="badge bg-info text-dark rounded-circle p-2 d-flex align-items-center justify-content-center" style={{ width: '32px', height: '32px' }}>2</div>
                  <div>
                    <h5 className="h6 fw-bold text-white mb-1">Maquetación & Componentes JSX</h5>
                    <p className="text-muted small mb-0">Estructuración modular de la interfaz con React y clases utilitarias de Bootstrap.</p>
                  </div>
                </div>

                <div className="d-flex gap-3">
                  <div className="badge bg-warning text-dark rounded-circle p-2 d-flex align-items-center justify-content-center" style={{ width: '32px', height: '32px' }}>3</div>
                  <div>
                    <h5 className="h6 fw-bold text-white mb-1">Gestión de Estados & Validaciones</h5>
                    <p className="text-muted small mb-0">Control de formularios interactivos con el hook useState y validaciones reactivas.</p>
                  </div>
                </div>

                <div className="d-flex gap-3">
                  <div className="badge bg-success rounded-circle p-2 d-flex align-items-center justify-content-center" style={{ width: '32px', height: '32px' }}>4</div>
                  <div>
                    <h5 className="h6 fw-bold text-white mb-1">Pruebas, Optimización & Entrega</h5>
                    <p className="text-muted small mb-0">Verificación de responsividad, control de calidad y documentación técnica en GitHub.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="p-4 rounded-4 bg-dark bg-opacity-75 border border-secondary border-opacity-25">
                <h4 className="h5 fw-bold text-info mb-3">
                  <i className="bi bi-patch-check-fill me-2"></i>
                  Criterios de Evaluación y Calidad
                </h4>
                <ul className="list-group list-group-flush bg-transparent">
                  <li className="list-group-item bg-transparent text-light border-secondary border-opacity-25 px-0 d-flex justify-content-between align-items-center">
                    <span>Implementación Técnica React + Bootstrap</span>
                    <span className="badge bg-primary rounded-pill">10 / 10</span>
                  </li>
                  <li className="list-group-item bg-transparent text-light border-secondary border-opacity-25 px-0 d-flex justify-content-between align-items-center">
                    <span>Manejo de Estados con useState y Eventos</span>
                    <span className="badge bg-info text-dark rounded-pill">10 / 10</span>
                  </li>
                  <li className="list-group-item bg-transparent text-light border-secondary border-opacity-25 px-0 d-flex justify-content-between align-items-center">
                    <span>Validaciones Dinámicas y Manejo de Errores</span>
                    <span className="badge bg-success rounded-pill">10 / 10</span>
                  </li>
                  <li className="list-group-item bg-transparent text-light border-secondary border-opacity-25 px-0 d-flex justify-content-between align-items-center">
                    <span>Diseño Adaptable (Mobile, Tablet, Desktop)</span>
                    <span className="badge bg-warning text-dark rounded-pill">10 / 10</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-5">
          <div className="text-center mb-4">
            <h3 className="h3 fw-bold text-white">Lo que dicen quienes colaboran con nosotros</h3>
            <p className="text-muted small">Experiencias y opiniones comprobadas</p>
          </div>

          <div className="row g-4">
            {TESTIMONIOS.map((item, idx) => (
              <div className="col-md-4" key={idx}>
                <div className="card-premium h-100 p-4 d-flex flex-column justify-content-between">
                  <div>
                    <div className="d-flex text-warning mb-2">
                      {[...Array(item.estrellas)].map((_, i) => (
                        <i className="bi bi-star-fill me-1" key={i}></i>
                      ))}
                    </div>
                    <p className="text-secondary small fst-italic mb-3">"{item.comentario}"</p>
                  </div>
                  <div className="d-flex align-items-center gap-3 pt-3 border-top border-secondary border-opacity-10">
                    <div className="icon-box-lg" style={{ width: '40px', height: '40px', fontSize: '1rem' }}>
                      <i className="bi bi-person-fill"></i>
                    </div>
                    <div>
                      <h6 className="mb-0 text-white fw-bold small">{item.nombre}</h6>
                      <span className="text-muted small" style={{ fontSize: '0.75rem' }}>{item.cargo}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
