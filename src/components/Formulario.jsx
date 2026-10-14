import React, { useState } from 'react';

// Opciones de servicios disponibles
export const SERVICIOS_DISPONIBLES = [
  'Desarrollo Web Fullstack',
  'Desarrollo de Apps Móviles',
  'Diseño UI/UX & Sistemas de Diseño',
  'Cloud & Automatización DevOps',
  'Ciberseguridad & Auditorías Web',
  'Consultoría y Arquitectura de Software'
];

// Opciones de modalidad/plan
export const PLANES_DISPONIBLES = [
  { id: 'mvp', label: 'Básico / MVP' },
  { id: 'pro', label: 'Profesional' },
  { id: 'enterprise', label: 'Empresarial' }
];

// Expresiones regulares para validaciones robustas
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const TELEFONO_REGEX = /^[0-9]{10}$/;
const NOMBRE_REGEX = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{3,60}$/;

// Fecha actual en formato YYYY-MM-DD
export const obtenerFechaHoy = () => {
  const hoy = new Date();
  const year = hoy.getFullYear();
  const month = String(hoy.getMonth() + 1).padStart(2, '0');
  const day = String(hoy.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const estadoInicial = {
  nombre: '',
  email: '',
  telefono: '',
  servicio: '',
  modalidad: 'pro',
  fechaTentativa: '',
  mensaje: '',
  aceptaTerminos: false
};

export default function Formulario({ servicioPreseleccionado }) {
  // Manejo de estados con useState
  const [valores, setValores] = useState({
    ...estadoInicial,
    servicio: servicioPreseleccionado || ''
  });

  const [errores, setErrores] = useState({});
  const [tocados, setTocados] = useState({});
  const [enviando, setEnviando] = useState(false);
  const [mensajeExito, setMensajeExito] = useState('');
  const [solicitudesRegistradas, setSolicitudesRegistradas] = useState([]);
  const [solicitudDetalle, setSolicitudDetalle] = useState(null);

  // Sincronizar si cambia el servicio preseleccionado desde la sección de servicios
  React.useEffect(() => {
    if (servicioPreseleccionado) {
      setValores((prev) => ({ ...prev, servicio: servicioPreseleccionado }));
      setErrores((prev) => ({ ...prev, servicio: undefined }));
    }
  }, [servicioPreseleccionado]);

  // Función de validación de campos
  const validarCampo = (nombreCampo, valor, estadoCompleto = valores) => {
    switch (nombreCampo) {
      case 'nombre':
        if (!valor || !valor.trim()) {
          return 'El nombre completo es obligatorio.';
        }
        if (!NOMBRE_REGEX.test(valor.trim())) {
          return 'El nombre debe contener solo letras y al menos 3 caracteres.';
        }
        return null;

      case 'email':
        if (!valor || !valor.trim()) {
          return 'El correo electrónico es obligatorio.';
        }
        if (!EMAIL_REGEX.test(valor.trim())) {
          return 'Ingrese un formato de correo válido (ej: usuario@dominio.com).';
        }
        return null;

      case 'telefono':
        if (!valor || !valor.trim()) {
          return 'El número de teléfono o celular es obligatorio.';
        }
        if (!TELEFONO_REGEX.test(valor.trim())) {
          return 'El teléfono debe tener exactamente 10 dígitos numéricos (ej: 0991234567).';
        }
        return null;

      case 'servicio':
        if (!valor) {
          return 'Debe seleccionar un servicio del listado.';
        }
        return null;

      case 'fechaTentativa':
        if (!valor) {
          return 'Debe especificar una fecha estimada de inicio.';
        }
        if (valor < obtenerFechaHoy()) {
          return 'La fecha estimada no puede ser anterior a hoy.';
        }
        return null;

      case 'mensaje':
        if (!valor || valor.trim().length < 15) {
          return 'Describa su proyecto o requerimiento con al menos 15 caracteres.';
        }
        return null;

      case 'aceptaTerminos':
        if (!valor) {
          return 'Debe aceptar los términos y condiciones para continuar.';
        }
        return null;

      default:
        return null;
    }
  };

  // Validar todo el formulario
  const validarFormularioCompleto = () => {
    const nuevosErrores = {};
    Object.keys(valores).forEach((campo) => {
      const error = validarCampo(campo, valores[campo], valores);
      if (error) {
        nuevosErrores[campo] = error;
      }
    });
    return nuevosErrores;
  };

  // Manejador de cambios en inputs (onChange)
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const nuevoValor = type === 'checkbox' ? checked : value;

    setValores((prev) => ({
      ...prev,
      [name]: nuevoValor
    }));

    // Si el campo ya fue tocado, validar en tiempo real
    if (tocados[name]) {
      const error = validarCampo(name, nuevoValor);
      setErrores((prev) => ({
        ...prev,
        [name]: error || undefined
      }));
    }
  };

  // Manejador de desenfoque de inputs (onBlur)
  const handleBlur = (e) => {
    const { name, value, type, checked } = e.target;
    const valor = type === 'checkbox' ? checked : value;

    setTocados((prev) => ({ ...prev, [name]: true }));
    const error = validarCampo(name, valor);
    setErrores((prev) => ({
      ...prev,
      [name]: error || undefined
    }));
  };

  // Manejador de envío del formulario (onSubmit)
  const handleSubmit = (e) => {
    e.preventDefault();

    // Marcar todos como tocados
    const todosTocados = {};
    Object.keys(valores).forEach((k) => {
      todosTocados[k] = true;
    });
    setTocados(todosTocados);

    const erroresDetectados = validarFormularioCompleto();
    setErrores(erroresDetectados);

    if (Object.keys(erroresDetectados).length > 0) {
      setMensajeExito('');
      return;
    }

    // Iniciar simulación de envío reactivo
    setEnviando(true);
    setMensajeExito('');

    setTimeout(() => {
      const nuevaSolicitud = {
        id: Date.now(),
        ...valores,
        fechaRegistro: new Date().toLocaleString()
      };

      setSolicitudesRegistradas((prev) => [nuevaSolicitud, ...prev]);
      setSolicitudDetalle(nuevaSolicitud);
      setMensajeExito(`¡Solicitud registrada con éxito! Hemos enviado un comprobante a ${valores.email}.`);
      setValores(estadoInicial);
      setTocados({});
      setErrores({});
      setEnviando(false);
    }, 900);
  };

  // Limpiar formulario
  const handleReset = () => {
    setValores(estadoInicial);
    setErrores({});
    setTocados({});
    setMensajeExito('');
  };

  // Eliminar solicitud de la lista
  const handleEliminarSolicitud = (id) => {
    setSolicitudesRegistradas((prev) => prev.filter((s) => s.id !== id));
    if (solicitudDetalle && solicitudDetalle.id === id) {
      setSolicitudDetalle(null);
    }
  };

  // Helper para determinar clases de validación de Bootstrap
  const getValidationClass = (campo) => {
    if (!tocados[campo]) return '';
    return errores[campo] ? 'is-invalid' : 'is-valid';
  };

  return (
    <section className="py-5" id="formulario">
      <div className="container py-4">
        {/* Encabezado */}
        <div className="text-center mb-5">
          <span className="section-tag">Cotización en Línea</span>
          <h2 className="display-5 fw-bold mb-3">Solicitar Cotización de Proyecto</h2>
          <p className="text-muted lead col-lg-8 mx-auto">
            Completa el siguiente formulario para cotizar tu proyecto. Todos los campos cuentan con validación 
            en tiempo real y confirmación instantánea.
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-10">
            {/* Mensaje dinámico de éxito */}
            {mensajeExito && (
              <div className="alert alert-success alert-dismissible fade show d-flex align-items-center gap-3 p-3 mb-4 rounded-3 border-0 shadow-lg" role="alert">
                <i className="bi bi-check-circle-fill fs-3 text-success"></i>
                <div className="flex-grow-1">
                  <strong>¡Operación Exitosa!</strong> {mensajeExito}
                </div>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  aria-label="Cerrar"
                  onClick={() => setMensajeExito('')}
                ></button>
              </div>
            )}

            {/* Tarjeta del Formulario */}
            <div className="form-card p-4 p-md-5">
              <div className="d-flex justify-content-between align-items-center mb-4 pb-3 border-bottom border-secondary border-opacity-25">
                <div>
                  <h3 className="h4 fw-bold text-white mb-1">
                    <i className="bi bi-pencil-square text-primary me-2"></i>
                    Formulario de Registro de Proyectos
                  </h3>
                  <small className="text-muted">Los campos marcados con (*) son obligatorios</small>
                </div>
                <button
                  type="button"
                  className="btn btn-outline-secondary btn-sm rounded-pill px-3"
                  onClick={handleReset}
                  title="Restablecer formulario a valores iniciales"
                >
                  <i className="bi bi-arrow-counterclockwise me-1"></i> Limpiar
                </button>
              </div>

              <form onSubmit={handleSubmit} noValidate>
                <div className="row g-4">
                  {/* Nombre Completo */}
                  <div className="col-md-6">
                    <label htmlFor="nombre" className="form-label text-light fw-medium">
                      Nombre Completo o Empresa *
                    </label>
                    <div className="input-group">
                      <span className="input-group-text bg-dark border-secondary border-opacity-25 text-info">
                        <i className="bi bi-person"></i>
                      </span>
                      <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        className={`form-control form-control-custom ${getValidationClass('nombre')}`}
                        placeholder="Ej. Ing. Juan Pérez o TecnoSoft S.A."
                        value={valores.nombre}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                      />
                    </div>
                    {errores.nombre && tocados.nombre && (
                      <div className="invalid-feedback-custom">
                        <i className="bi bi-exclamation-triangle-fill me-1"></i>
                        {errores.nombre}
                      </div>
                    )}
                    {!errores.nombre && tocados.nombre && (
                      <div className="valid-feedback-custom">
                        <i className="bi bi-check-circle-fill me-1"></i> Nombre correcto
                      </div>
                    )}
                  </div>

                  {/* Correo Electrónico */}
                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label text-light fw-medium">
                      Correo Electrónico *
                    </label>
                    <div className="input-group">
                      <span className="input-group-text bg-dark border-secondary border-opacity-25 text-info">
                        <i className="bi bi-envelope"></i>
                      </span>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className={`form-control form-control-custom ${getValidationClass('email')}`}
                        placeholder="ejemplo@unemi.edu.ec"
                        value={valores.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                      />
                    </div>
                    {errores.email && tocados.email && (
                      <div className="invalid-feedback-custom">
                        <i className="bi bi-exclamation-triangle-fill me-1"></i>
                        {errores.email}
                      </div>
                    )}
                    {!errores.email && tocados.email && (
                      <div className="valid-feedback-custom">
                        <i className="bi bi-check-circle-fill me-1"></i> Correo válido
                      </div>
                    )}
                  </div>

                  {/* Teléfono / Celular */}
                  <div className="col-md-6">
                    <label htmlFor="telefono" className="form-label text-light fw-medium">
                      Teléfono / WhatsApp (10 dígitos) *
                    </label>
                    <div className="input-group">
                      <span className="input-group-text bg-dark border-secondary border-opacity-25 text-info">
                        <i className="bi bi-telephone"></i>
                      </span>
                      <input
                        type="tel"
                        id="telefono"
                        name="telefono"
                        maxLength="10"
                        className={`form-control form-control-custom ${getValidationClass('telefono')}`}
                        placeholder="0991234567"
                        value={valores.telefono}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                      />
                    </div>
                    {errores.telefono && tocados.telefono && (
                      <div className="invalid-feedback-custom">
                        <i className="bi bi-exclamation-triangle-fill me-1"></i>
                        {errores.telefono}
                      </div>
                    )}
                    {!errores.telefono && tocados.telefono && (
                      <div className="valid-feedback-custom">
                        <i className="bi bi-check-circle-fill me-1"></i> Teléfono válido
                      </div>
                    )}
                  </div>

                  {/* Selección de Servicio */}
                  <div className="col-md-6">
                    <label htmlFor="servicio" className="form-label text-light fw-medium">
                      Servicio de Interés *
                    </label>
                    <div className="input-group">
                      <span className="input-group-text bg-dark border-secondary border-opacity-25 text-info">
                        <i className="bi bi-hdd-network"></i>
                      </span>
                      <select
                        id="servicio"
                        name="servicio"
                        className={`form-select form-select-custom ${getValidationClass('servicio')}`}
                        value={valores.servicio}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                      >
                        <option value="">-- Seleccione un servicio --</option>
                        {SERVICIOS_DISPONIBLES.map((s, idx) => (
                          <option key={idx} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>
                    {errores.servicio && tocados.servicio && (
                      <div className="invalid-feedback-custom">
                        <i className="bi bi-exclamation-triangle-fill me-1"></i>
                        {errores.servicio}
                      </div>
                    )}
                    {!errores.servicio && tocados.servicio && (
                      <div className="valid-feedback-custom">
                        <i className="bi bi-check-circle-fill me-1"></i> Servicio seleccionado
                      </div>
                    )}
                  </div>

                  {/* Modalidad / Plan del Proyecto */}
                  <div className="col-md-6">
                    <label className="form-label text-light fw-medium d-block">
                      Plan Estimado del Proyecto
                    </label>
                    <div className="d-flex gap-2 flex-wrap">
                      {PLANES_DISPONIBLES.map((plan) => (
                        <div className="form-check form-check-inline m-0" key={plan.id}>
                          <input
                            className="form-check-input"
                            type="radio"
                            name="modalidad"
                            id={`plan-${plan.id}`}
                            value={plan.id}
                            checked={valores.modalidad === plan.id}
                            onChange={handleChange}
                          />
                          <label className="form-check-label text-light small" htmlFor={`plan-${plan.id}`}>
                            {plan.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Fecha Estimada de Inicio */}
                  <div className="col-md-6">
                    <label htmlFor="fechaTentativa" className="form-label text-light fw-medium">
                      Fecha Estimada de Inicio *
                    </label>
                    <div className="input-group">
                      <span className="input-group-text bg-dark border-secondary border-opacity-25 text-info">
                        <i className="bi bi-calendar-event"></i>
                      </span>
                      <input
                        type="date"
                        id="fechaTentativa"
                        name="fechaTentativa"
                        min={obtenerFechaHoy()}
                        className={`form-control form-control-custom ${getValidationClass('fechaTentativa')}`}
                        value={valores.fechaTentativa}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                      />
                    </div>
                    {errores.fechaTentativa && tocados.fechaTentativa && (
                      <div className="invalid-feedback-custom">
                        <i className="bi bi-exclamation-triangle-fill me-1"></i>
                        {errores.fechaTentativa}
                      </div>
                    )}
                    {!errores.fechaTentativa && tocados.fechaTentativa && (
                      <div className="valid-feedback-custom">
                        <i className="bi bi-check-circle-fill me-1"></i> Fecha válida
                      </div>
                    )}
                  </div>

                  {/* Requerimientos / Descripción */}
                  <div className="col-12">
                    <label htmlFor="mensaje" className="form-label text-light fw-medium">
                      Detalle del Proyecto o Requerimientos *
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      rows="4"
                      className={`form-control form-control-custom ${getValidationClass('mensaje')}`}
                      placeholder="Explica brevemente los objetivos, tecnologías esperadas, usuarios objetivos o funcionalidades clave (mínimo 15 caracteres)..."
                      value={valores.mensaje}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                    ></textarea>
                    <div className="d-flex justify-content-between align-items-center mt-1">
                      {errores.mensaje && tocados.mensaje ? (
                        <div className="invalid-feedback-custom">
                          <i className="bi bi-exclamation-triangle-fill me-1"></i>
                          {errores.mensaje}
                        </div>
                      ) : !errores.mensaje && tocados.mensaje ? (
                        <div className="valid-feedback-custom">
                          <i className="bi bi-check-circle-fill me-1"></i> Descripción válida
                        </div>
                      ) : (
                        <span></span>
                      )}
                      <small className="text-muted font-monospace">
                        {valores.mensaje.length} caracteres
                      </small>
                    </div>
                  </div>

                  {/* Términos y Condiciones */}
                  <div className="col-12">
                    <div className="form-check">
                      <input
                        className={`form-check-input ${getValidationClass('aceptaTerminos')}`}
                        type="checkbox"
                        id="aceptaTerminos"
                        name="aceptaTerminos"
                        checked={valores.aceptaTerminos}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                      />
                      <label className="form-check-label text-light small" htmlFor="aceptaTerminos">
                        Acepto los términos de servicio y autorizo el tratamiento de mis datos con fines de cotización técnica. *
                      </label>
                      {errores.aceptaTerminos && tocados.aceptaTerminos && (
                        <div className="invalid-feedback-custom">
                          <i className="bi bi-exclamation-triangle-fill me-1"></i>
                          {errores.aceptaTerminos}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Botón de Envío */}
                  <div className="col-12 pt-3">
                    <button
                      type="submit"
                      disabled={enviando}
                      className="btn btn-gradient w-100 py-3 rounded-pill fw-bold fs-5 d-flex align-items-center justify-content-center gap-2 shadow"
                    >
                      {enviando ? (
                        <>
                          <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                          <span>Validando y Registrando Solicitud...</span>
                        </>
                      ) : (
                        <>
                          <i className="bi bi-send-check-fill"></i>
                          <span>Enviar Solicitud de Cotización</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>

            {/* Modal / Card de Resumen de la última solicitud enviada */}
            {solicitudDetalle && (
              <div className="card-premium p-4 mt-4 border border-info border-opacity-50">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4 className="h5 fw-bold text-info mb-0">
                    <i className="bi bi-file-earmark-check-fill me-2"></i>
                    Ticket de Solicitud Generado #TICK-{solicitudDetalle.id.toString().slice(-4)}
                  </h4>
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary rounded-pill"
                    onClick={() => setSolicitudDetalle(null)}
                  >
                    <i className="bi bi-x-lg"></i>
                  </button>
                </div>

                <div className="row g-3 small text-light">
                  <div className="col-sm-6">
                    <strong className="text-secondary d-block">Solicitante:</strong>
                    <span>{solicitudDetalle.nombre}</span>
                  </div>
                  <div className="col-sm-6">
                    <strong className="text-secondary d-block">Email de Contacto:</strong>
                    <span>{solicitudDetalle.email}</span>
                  </div>
                  <div className="col-sm-6">
                    <strong className="text-secondary d-block">Teléfono:</strong>
                    <span>{solicitudDetalle.telefono}</span>
                  </div>
                  <div className="col-sm-6">
                    <strong className="text-secondary d-block">Servicio Solicitado:</strong>
                    <span className="badge bg-primary text-wrap">{solicitudDetalle.servicio}</span>
                  </div>
                  <div className="col-sm-6">
                    <strong className="text-secondary d-block">Modalidad / Plan:</strong>
                    <span className="badge bg-secondary text-uppercase">{solicitudDetalle.modalidad}</span>
                  </div>
                  <div className="col-sm-6">
                    <strong className="text-secondary d-block">Fecha Estimada de Inicio:</strong>
                    <span>{solicitudDetalle.fechaTentativa}</span>
                  </div>
                  <div className="col-12">
                    <strong className="text-secondary d-block">Requerimiento:</strong>
                    <p className="p-2 rounded bg-dark border border-secondary border-opacity-10 mb-0">
                      {solicitudDetalle.mensaje}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Listado dinámico de Solicitudes Registradas en la Sesión */}
            {solicitudesRegistradas.length > 0 && (
              <div className="card-premium p-4 mt-5">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4 className="h5 fw-bold text-white mb-0">
                    <i className="bi bi-list-check text-success me-2"></i>
                    Historial de Solicitudes Registradas ({solicitudesRegistradas.length})
                  </h4>
                  <span className="badge bg-success bg-opacity-25 text-success border border-success border-opacity-25">
                    Estado en Memoria (useState)
                  </span>
                </div>

                <div className="table-responsive">
                  <table className="table table-dark table-hover table-bordered border-secondary border-opacity-25 align-middle mb-0">
                    <thead>
                      <tr className="table-secondary text-dark">
                        <th>#</th>
                        <th>Cliente</th>
                        <th>Servicio</th>
                        <th>Fecha Inicio</th>
                        <th>Registro</th>
                        <th className="text-center">Acciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      {solicitudesRegistradas.map((sol, index) => (
                        <tr key={sol.id}>
                          <td className="font-monospace text-muted">{index + 1}</td>
                          <td>
                            <strong>{sol.nombre}</strong>
                            <div className="small text-muted">{sol.email}</div>
                          </td>
                          <td>
                            <span className="badge bg-primary">{sol.servicio}</span>
                          </td>
                          <td>{sol.fechaTentativa}</td>
                          <td className="small text-muted">{sol.fechaRegistro}</td>
                          <td className="text-center">
                            <div className="btn-group btn-group-sm">
                              <button
                                className="btn btn-outline-info"
                                onClick={() => setSolicitudDetalle(sol)}
                                title="Ver detalles del ticket"
                              >
                                <i className="bi bi-eye"></i>
                              </button>
                              <button
                                className="btn btn-outline-danger"
                                onClick={() => handleEliminarSolicitud(sol.id)}
                                title="Eliminar de la sesión"
                              >
                                <i className="bi bi-trash"></i>
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
