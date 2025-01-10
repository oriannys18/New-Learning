import React from 'react'
import logo from '../img/logo.jpeg';
import '../index.css';



export const PageTwo = () => {
    return (
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
            <div className="col-12 col-sm-10 col-md-8 col-lg-6 p-4 shadow rounded bg-white">
                <h3 className="welcome-text text-center mb-2 fs-3">¡Únete a Learning!</h3>
                <div className="text-center mb-3">
                    <img
                        src={logo}
                        alt="Logo Learning"
                        className="img-fluid w-25"
                    />
                </div>
                <form>
                    <div className="row g-2 mb-2">
                        <div className="col-12 col-sm-6">
                            <label htmlFor="nombre" className="form-label small">Nombre</label>
                            <input
                                type="text"
                                id="nombre"
                                placeholder="Ingresa tu nombre"
                                className="form-control form-control-sm"
                            />
                        </div>
                        <div className="col-12 col-sm-6">
                            <label htmlFor="apellido" className="form-label small">Apellido</label>
                            <input
                                type="text"
                                id="apellido"
                                placeholder="Ingresa tu apellido"
                                className="form-control form-control-sm"
                            />
                        </div>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="email" className="form-label small">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Ingresa tu email"
                            className="form-control form-control-sm"
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="password" className="form-label small">Contraseña</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Ingresa tu contraseña"
                            className="form-control form-control-sm"
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="password-confirm" className="form-label small">Asegurémonos que sea la misma</label>
                        <input
                            type="password"
                            id="password-confirm"
                            placeholder="Ingresa tu contraseña nuevamente"
                            className="form-control form-control-sm"
                        />
                    </div>
                    <div className="mb-3">
                        <p className="small mb-2">¿Cómo te registras en Learning?</p>
                        <div className="d-flex gap-2 mb-2">
                            <div>
                                <input
                                    type="radio"
                                    id="estudiante"
                                    name="tipoRegistro"
                                    value="estudiante"
                                    className="me-1"
                                />
                                <label htmlFor="estudiante" className="small">Soy Estudiante</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    id="docente"
                                    name="tipoRegistro"
                                    value="docente"
                                    className="me-1"
                                />
                                <label htmlFor="docente" className="small">Soy Docente</label>
                            </div>
                        </div>
                        <div className="mb-2">
                            <label htmlFor="alumnoDe" className="form-label small">Soy alumno de:</label>
                            <select id="alumnoDe" className="form-select form-select-sm">
                                <option value="" disabled selected>
                                    Seleccione una opción
                                </option>
                                <option value="primaria">Primaria</option>
                                <option value="secundaria">Secundaria</option>
                                <option value="universidad">Universidad</option>
                            </select>
                        </div>
                    </div>
                    <div className="text-center">
                        <button type="button" className="btn btn-primary btn-sm w-20">
                            Quiero unirme
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

