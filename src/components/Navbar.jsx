import React from 'react';

export default function Navbar({ onCotizarClick }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-glass sticky-top py-3" id="mainNavbar">
      <div className="container">
        {/* Brand Logo & Title */}
        <a className="navbar-brand d-flex align-items-center gap-2 fw-bold" href="#inicio">
          <span className="icon-box-lg" style={{ width: '42px', height: '42px', fontSize: '1.2rem' }}>
            <i className="bi bi-code-slash text-info"></i>
          </span>
          <span className="fs-4 brand-font">
            Dev<span className="text-gradient">Pulse</span>
          </span>
          <span className="badge badge-custom-tech d-none d-sm-inline-block ms-1" style={{ fontSize: '0.7rem' }}>
            UNEMI 2026
          </span>
        </a>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler border-0 shadow-none text-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="bi bi-list fs-2"></i>
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center gap-lg-3">
            <li className="nav-item">
              <a className="nav-link px-2 active fw-medium" href="#inicio">
                <i className="bi bi-house-door me-1 text-primary"></i> Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-2 fw-medium" href="#servicios">
                <i className="bi bi-layers me-1 text-primary"></i> Servicios
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-2 fw-medium" href="#informacion">
                <i className="bi bi-info-circle me-1 text-primary"></i> Información
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-2 fw-medium" href="#formulario">
                <i className="bi bi-send me-1 text-primary"></i> Cotización
              </a>
            </li>
            <li className="nav-item ms-lg-2 mt-2 mt-lg-0">
              <a
                href="#formulario"
                onClick={onCotizarClick}
                className="btn btn-gradient btn-sm px-4 py-2 rounded-pill d-inline-flex align-items-center gap-2 text-decoration-none"
              >
                <i className="bi bi-chat-quote-fill"></i>
                <span>Solicitar Proyecto</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
