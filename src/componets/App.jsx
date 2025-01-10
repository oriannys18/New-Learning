import React from 'react'
import { Route, Routes } from 'react-router-dom';
import axios from "axios";
import logo from '../img/logo.jpeg';
import '../index.css';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { PageTwo } from './PageTwo';



export const App = () => {
    
    const navigate = useNavigate();

    const handleRegisterClick = () => {
        navigate("/PageTwo"); // Redirige a la ruta "/join"
    };

    return (
        <>
            <Routes>
                <Route path="/" element={
                    <div className="container d-flex justify-content-center align-items-center min-vh-100">
                        <div className="card p-4 shadow-lg w-100" style={{ maxWidth: '28rem' }}>
                            <h3 className="welcome-text text-center mb-4">¡Bienvenido a Learning!</h3>
                            <div className="text-center mb-4">
                                <img
                                    src={logo}
                                    alt="Logo Learning"
                                    className="img-fluid"
                                    style={{ maxWidth: '150px' }}
                                />
                            </div>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="Ingresa tu email"
                                        className="form-control"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Contraseña</label>
                                    <input
                                        type="password"
                                        id="password"
                                        placeholder="Ingresa tu contraseña"
                                        className="form-control"
                                    />
                                </div>
                                <div className="form-check mb-3">
                                    <input
                                        type="checkbox"
                                        id="remember"
                                        className="form-check-input"
                                    />
                                    <label htmlFor="remember" className="form-check-label">
                                        Recuérdame
                                    </label>
                                </div>
                                <div className='text-center'>
                                    <button
                                        type="submit"
                                        className="btn btn-primary w-90"
                                    >
                                        Iniciar Sesión
                                    </button>
                                </div>
                            </form>
                            <div className="text-center mt-3">
                                <a href="#" className="text-danger text-decoration-none">Ayuda</a>
                                <p className="mt-2">
                                    ¿No tienes una cuenta?   <a href="" className="text-primary text-decoration-none" onClick={handleRegisterClick} >Registrate</a>
                                </p>
                            </div>
                        </div>
                    </div>
                } />
                <Route path="/PageTwo" element={<PageTwo />} />
            </Routes>
        </>
    );
};
