import React from 'react';

export default function Footer() {
  const anioActual = new Date().getFullYear();

  return (
    <footer className="pt-5 pb-4 border-top border-secondary border-opacity-25" style={{ background: '#0a0f1d' }}>
      <div className="container">
        <div className="row g-4 mb-5">
          {/* Brand & Academic Info */}
          <div className="col-lg-4 col-md-6">
            <div className="d-flex align-items-center gap-2 mb-3">
              <span className="icon-box-lg" style={{ width: '38px', height: '38px', fontSize: '1.1rem' }}>
                <i className="bi bi-code-slash text-info"></i>
              </span>
              <span className="fs-4 brand-font text-white fw-bold">
                Dev<span className="text-gradient">Pulse</span>
              </span>
            </div>
            <p className="text-secondary small mb-3">
              Solución desarrollada para la <strong>Práctica Nº 2</strong> de la asignatura <strong>Desarrollo Web</strong>.
              Construida con React 19, componentes funcionales en JSX y diseño responsivo con Bootstrap 5.
            </p>
            <div className="d-flex gap-2">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="btn btn-outline-glass btn-sm rounded-circle p-2" title="GitHub">
                <i className="bi bi-github"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="btn btn-outline-glass btn-sm rounded-circle p-2" title="LinkedIn">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="btn btn-outline-glass btn-sm rounded-circle p-2" title="Twitter / X">
                <i className="bi bi-twitter-x"></i>
              </a>
              <a href="https://unemi.edu.ec" target="_blank" rel="noreferrer" className="btn btn-outline-glass btn-sm rounded-circle p-2" title="Sitio Oficial UNEMI">
                <i className="bi bi-globe"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6 col-6">
            <h5 className="h6 fw-bold text-white mb-3">Navegación</h5>
            <ul className="list-unstyled d-flex flex-column gap-2 small">
              <li>
                <a href="#inicio" className="text-secondary text-decoration-none hover-primary">
                  <i className="bi bi-chevron-right me-1 text-primary"></i> Inicio
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-secondary text-decoration-none hover-primary">
                  <i className="bi bi-chevron-right me-1 text-primary"></i> Servicios
                </a>
              </li>
              <li>
                <a href="#informacion" className="text-secondary text-decoration-none hover-primary">
                  <i className="bi bi-chevron-right me-1 text-primary"></i> Información
                </a>
              </li>
              <li>
                <a href="#formulario" className="text-secondary text-decoration-none hover-primary">
                  <i className="bi bi-chevron-right me-1 text-primary"></i> Cotización
                </a>
              </li>
            </ul>
          </div>

          {/* Tecnologías & Criterios */}
          <div className="col-lg-3 col-md-6 col-6">
            <h5 className="h6 fw-bold text-white mb-3">Tecnologías Guía 2</h5>
            <ul className="list-unstyled d-flex flex-column gap-2 small text-secondary">
              <li className="d-flex align-items-center gap-2">
                <i className="bi bi-check2-circle text-info"></i> React 19 + JSX
              </li>
              <li className="d-flex align-items-center gap-2">
                <i className="bi bi-check2-circle text-info"></i> Bootstrap 5.3 + Icons
              </li>
              <li className="d-flex align-items-center gap-2">
                <i className="bi bi-check2-circle text-info"></i> Hook useState & Eventos
              </li>
              <li className="d-flex align-items-center gap-2">
                <i className="bi bi-check2-circle text-info"></i> Validaciones en Tiempo Real
              </li>
              <li className="d-flex align-items-center gap-2">
                <i className="bi bi-check2-circle text-info"></i> Mobile-First Responsivo
              </li>
            </ul>
          </div>

          {/* Contacto Institucional */}
          <div className="col-lg-3 col-md-6">
            <h5 className="h6 fw-bold text-white mb-3">Contacto Institucional</h5>
            <ul className="list-unstyled d-flex flex-column gap-2 small text-secondary">
              <li className="d-flex align-items-start gap-2">
                <i className="bi bi-geo-alt-fill text-danger mt-1"></i>
                <span>Universidad Estatal de Milagro (UNEMI), Bloque P, Laboratorios.</span>
              </li>
              <li className="d-flex align-items-center gap-2">
                <i className="bi bi-mortarboard-fill text-warning"></i>
                <span>Ingeniería de Software Presencial</span>
              </li>
              <li className="d-flex align-items-center gap-2">
                <i className="bi bi-envelope-at-fill text-primary"></i>
                <span>desarrolloweb@unemi.edu.ec</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-4 border-top border-secondary border-opacity-10 d-flex flex-column flex-sm-row justify-content-between align-items-center gap-3">
          <small className="text-muted text-center text-sm-start">
            &copy; {anioActual} UNEMI - Facultad de Ciencias e Ingenierías. Proyecto de Aprendizaje Práctico G002.
          </small>
          <a href="#inicio" className="btn btn-outline-glass btn-sm rounded-pill px-3 d-inline-flex align-items-center gap-1 text-decoration-none">
            <i className="bi bi-arrow-up-short fs-5"></i>
            <span>Volver arriba</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
