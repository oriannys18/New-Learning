import { useContext } from "react";
import { AuthContext } from "../context";
import { Route, Routes } from 'react-router-dom';
import axios from "axios";
import logo from '../img/logo.jpeg';
import '../index.css';
import { useNavigate } from "react-router-dom";
import { PageTwo } from './PageTwo';
import { useForm } from '../hooks/useForm';



export const App = () => {

    const initialForm = { email: '', password: '' };

    const navigate = useNavigate();
    const { onResetForm, onChange, validateForm, setFormErrors, formErrors, setIsUserInvalid, email, password, isUserInvalid } = useForm(initialForm);
    const { login } = useContext(AuthContext);

    // const handleRegisterClick = () => {
    //     navigate("/PageTwo"); // Redirige a la ruta "/join"

    const onLogin = async (event) => {
        event.preventDefault();

        const errors = validateForm();
        setFormErrors(formErrors => ({ ...formErrors, ...errors }));

        if (Object.keys(errors).length === 0) {
            axios.post(`${import.meta.env.VITE_BACKEND_BASE_URL}/auth`, { email, password }).then(res => {
                console.log(111111, res);
                login(res.data);
                onResetForm();
                navigate('/learning');
            }).catch(err => {
                console.log(2222, err);
                setIsUserInvalid(true);
            });
        };
    };

    const handleRegisterClick = (event) => {
        event.preventDefault();
        navigate("/PageTwo");
    };
    return (
        <>
            <Routes>
                <Route path="/" element={
                    <div className="container d-flex justify-content-center align-items-center min-vh-100">
                        <div className={`alert alert-danger alert-dismissible fade show ${isUserInvalid ? `` : `d-none`}`} role="alert">
                            <strong>Santos guacamoles!</strong> La contraseña es incorrecta o el usuario no exite.
                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
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
                                        <div className="form-outline mb-4">
                                            <label className="form-label" htmlFor="form3Example3">Email</label>
                                            <input type="email" id="form3Example3" className={`form-control ${!formErrors.email.length > 0 ? `` : `is-invalid`}`}
                                                placeholder="Ingresa tu Email" autoComplete="username" name="email" value={email} onChange={onChange} required />
                                            <div id="form3Example3" className="invalid-feedback">{formErrors.email}</div>
                                        </div>

                                        <div className="form-outline mb-3">
                                            <label className="form-label" htmlFor="form3Example4">Contraseña</label>
                                            <input type="password" id="form3Example4" className={`form-control ${!formErrors.password.length > 0 ? `` : `is-invalid`}`}
                                                placeholder="Ingresa tu contraseña" autoComplete="current-password" name="password" value={password} onChange={onChange} required />
                                            <div id="form3Example4" className="invalid-feedback">{formErrors.password}</div>
                                        </div>

                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="form-check mb-0">
                                                <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                                                <label className="form-check-label" htmlFor="form2Example3">
                                                    Recuerdame
                                                </label>
                                            </div>
                                            {/* <a href="#!" className="text-body">Olvidé mi contraseña?</a> */}
                                        </div>

                                        <div className="text-center mt-3 mt-xxl-5">
                                            <button onClick={onLogin} type="submit" className="btn btn-primary">Iniciar Sesión</button>
                                        </div>

                                        {/* <div className="text-center mt-3 mt-xxl-5">
                                            <button onClick={onLogin} type="submit" className="btn btn-primary">Iniciar Sesión</button>
                                            <p className="small fw-bold mt-3 mt-xxl-5 pt-1 mb-0">
                                                <a href="/registro" className="link-danger">Ayuda</a>
                                            </p>
                                            <p className="small fw-bold mt-3 mt-xxl-5 pt-1 mb-0">No tienes una cuenta? <a href="/registro"
                                                className="link-danger">Registrate</a></p>
                                        </div> */}

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
