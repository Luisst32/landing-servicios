import React from 'react';

export default function Hero({ onExploreServices, onGoToForm }) {
  return (
    <header className="hero-wrapper text-light" id="inicio">
      <div className="container py-4 py-lg-5">
        <div className="row align-items-center g-5">
          {/* Main Hero Column */}
          <div className="col-lg-7 text-center text-lg-start">

            <h1 className="display-4 fw-extrabold mb-3">
              Construimos Soluciones <br className="d-none d-sm-block" />
              Digitales con <span className="text-gradient">React & Bootstrap</span>
            </h1>

            <p className="lead text-secondary mb-4 col-lg-11">
              Desarrollamos aplicaciones web de alto rendimiento, diseño responsivo 
              y arquitectura basada en componentes funcionales. Automatiza, escala y 
              lleva tu negocio o proyecto académico al siguiente nivel.
            </p>

            {/* Action Buttons */}
            <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start mb-5">
              <a
                href="#formulario"
                onClick={onGoToForm}
                className="btn btn-gradient px-4 py-3 rounded-pill d-inline-flex align-items-center gap-2"
              >
                <i className="bi bi-rocket-takeoff-fill"></i>
                <span>Solicitar Cotización</span>
              </a>
              <a
                href="#servicios"
                onClick={onExploreServices}
                className="btn btn-outline-glass px-4 py-3 rounded-pill d-inline-flex align-items-center gap-2"
              >
                <i className="bi bi-grid-3x3-gap-fill"></i>
                <span>Explorar Servicios</span>
              </a>
            </div>

            {/* Metrics and Counters */}
            <div className="row g-3 text-start">
              <div className="col-6 col-sm-3">
                <div className="stat-card text-center p-3">
                  <h3 className="fw-bold mb-0 text-white">150+</h3>
                  <p className="small text-muted mb-0">Proyectos Web</p>
                </div>
              </div>
              <div className="col-6 col-sm-3">
                <div className="stat-card text-center p-3">
                  <h3 className="fw-bold mb-0 text-info">99.8%</h3>
                  <p className="small text-muted mb-0">Disponibilidad</p>
                </div>
              </div>
              <div className="col-6 col-sm-3">
                <div className="stat-card text-center p-3">
                  <h3 className="fw-bold mb-0 text-warning">100%</h3>
                  <p className="small text-muted mb-0">Responsivo</p>
                </div>
              </div>
              <div className="col-6 col-sm-3">
                <div className="stat-card text-center p-3">
                  <h3 className="fw-bold mb-0 text-success">24/7</h3>
                  <p className="small text-muted mb-0">Soporte Ágil</p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Stack Showcase / Right Graphic */}
          <div className="col-lg-5">
            <div className="card-premium p-4 position-relative overflow-hidden">
              <div className="d-flex align-items-center justify-content-between mb-3 border-bottom border-secondary border-opacity-25 pb-3">
                <div className="d-flex gap-2">
                  <span className="badge rounded-circle bg-danger p-1" style={{ width: '12px', height: '12px' }}></span>
                  <span className="badge rounded-circle bg-warning p-1" style={{ width: '12px', height: '12px' }}></span>
                  <span className="badge rounded-circle bg-success p-1" style={{ width: '12px', height: '12px' }}></span>
                </div>
                <small className="text-muted font-monospace">App.jsx • React 19</small>
              </div>

              {/* Code snippet simulation */}
              <div className="bg-dark p-3 rounded-3 font-monospace small mb-3 border border-secondary border-opacity-10 text-light">
                <p className="mb-1 text-muted">// Arquitectura de componentes</p>
                <p className="mb-1">
                  <span className="text-primary">import</span> &#123; useState &#125; <span className="text-primary">from</span> <span className="text-info">'react'</span>;
                </p>
                <p className="mb-1">
                  <span className="text-primary">import</span> <span className="text-info">'bootstrap/dist/css'</span>;
                </p>
                <p className="mb-1 text-secondary mt-2">
                  <span className="text-warning">const</span> [solicitud, setSolicitud] = useState(data);
                </p>
                <p className="mb-0 text-success">
                  &lt;<span className="text-danger">LandingPage</span> responsivo=&#123;<span className="text-warning">true</span>&#125; /&gt;
                </p>
              </div>

              {/* Stack Features List */}
              <div className="d-flex flex-column gap-2">
                <div className="d-flex align-items-center gap-3 p-2 rounded-2 bg-body-tertiary bg-opacity-25">
                  <i className="bi bi-filetype-jsx fs-4 text-info"></i>
                  <div>
                    <strong className="d-block text-white small">Componentes Modulares JSX</strong>
                    <span className="text-muted small">Estructuración limpia según requerimientos de la guía</span>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-3 p-2 rounded-2 bg-body-tertiary bg-opacity-25">
                  <i className="bi bi-bootstrap-fill fs-4 text-primary"></i>
                  <div>
                    <strong className="d-block text-white small">Bootstrap 5 Integrado</strong>
                    <span className="text-muted small">Diseño 100% responsivo adaptable a cualquier pantalla</span>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-3 p-2 rounded-2 bg-body-tertiary bg-opacity-25">
                  <i className="bi bi-shield-check fs-4 text-success"></i>
                  <div>
                    <strong className="d-block text-white small">Validaciones Reactivas</strong>
                    <span className="text-muted small">Manejo de estado en tiempo real con hook useState</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
