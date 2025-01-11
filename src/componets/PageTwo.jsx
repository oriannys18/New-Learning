import React from 'react'
import logo from '../img/logo.jpeg';
import { useFormRegister } from './hooks/useFormRegister';
import '../index.css';
import axios from 'axios';




export const PageTwo = () => {

    const initialForm = { name: '', surname: '', email: '', password: '', passwordConfirm: '', isStudent: 'true', teacherId: null };

    const navigate = useNavigate();
    const [teachers, setTeachers] = useState([]);
    const [formErrors, setFormErrors] = useState({});
    const { onChange, onResetForm, form } = useFormRegister(initialForm);
    const { name, surname, email, password, passwordConfirm, isStudent, teacherId } = form;

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_BACKEND_BASE_URL}/teachers`)
            .then(res => {
                setTeachers(res.data);
            }).catch(err => {
                console.log(err);
            });
    }, []);

    useEffect(() => setFormErrors({}), [form]);

    const onRegister = async (event) => {
        event.preventDefault();
    
        const errors = validateForm();
        setFormErrors(errors);
    
        if (Object.keys(errors).length === 0) {
            const user = {
                name, surname, email, password,
                isStudent: isStudent === 'true',
                teacherId: isStudent === 'true' ? teacherId : null
            };
    
            try {
                const res = await axios.post(`${import.meta.env.VITE_BACKEND_BASE_URL}/users`, user);
                console.log('registro', res);
                onResetForm();
                navigate('/registro/success');
            } catch (err) {
                console.error('Error registering user:', err);
                setFormErrors(prevErrors => ({ ...prevErrors, apiError: 'Error registering user' }));
            }
        }
    };

    const validateForm = () => {
        const dic = { name: 'nombre', surname: 'apellido', };
        const errors = {};

        for (const key in form) {
            switch (key) {
                case 'name':
                case 'surname':
                    if (form[key].trim() === '') {
                        errors[key] = `El ${dic[key]} es requerido!`;
                    } else if (form[key].trim().length < 4) {
                        errors[key] = `El ${dic[key]} debe ser mayor a 3 caracteres!`;
                    }
                    break;

                case 'email':
                    if (form[key].trim() === '') {
                        errors['email'] = 'El email es requerido!';
                    } else if (!form[key].match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
                        errors['email'] = 'El email es invalido!';
                    }
                    break;

                case 'password':
                case 'passwordConfirm':
                    if (form[key].trim() === '') {
                        errors[key] = 'La contraseña es requerida!';
                    } else if (form[key].trim().length < 6) {
                        errors[key] = 'La contraseña deberia ser mayor a 5 digitos!';
                    } else if (form['password'] !== form['passwordConfirm']) {
                        errors['passwordConfirm'] = errors['password'] = 'La contraseña no coincide!';
                    }
                    break;

                case 'teacherId':
                    if (form[key] === null && form['isStudent'] === 'true') {
                        errors[key] = 'Debe seleccionar un profesor!';
                    }
                    break;
                default:
                    break;
            }
        }

        return errors;
    }


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
                            <label htmlFor="inputName" className="form-label small">Nombre</label>
                            <input
                                value={name}
                                onChange={onChange}
                                name="name"
                                type="text"
                                id="inputName"
                                placeholder="Ingresa tu nombre"
                                className={`form-control form-control-sm  ${formErrors.name && `is-invalid`}`} required
                            />
                            <div id="inputName" className="invalid-feedback">{formErrors.name}</div>
                        </div >
                        <div className="col-12 col-sm-6">
                            <label htmlFor="inputLastName" className="form-label small">Apellido</label>
                            <input
                                value={surname} 
                                onChange={onChange} 
                                name="surname"
                                type="text"
                                id="inputLastName"
                                placeholder="Ingresa tu apellido"
                                className={`form-control form-control-sm  ${formErrors.surname && `is-invalid`}`} required 
                               
                            />
                            <div id="inputLastName" className="invalid-feedback">{formErrors.surname}</div>
                        </div>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="email" className="form-label small">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Ingresa tu email"
                            className={`form-control form-control-sm  ${formErrors.email && `is-invalid`}`} required 
                        />
                        <div id="email" className="invalid-feedback">{formErrors.email}</div>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="inputPassword" className="form-label small">Contraseña</label>
                        <input
                            value={email} 
                            onChange={onChange} 
                            name="password"
                            type="password"
                            id="inputPassword"
                            placeholder="Ingresa tu contraseña"
                            className={`form-control form-control-sm  ${formErrors.password && `is-invalid`}`} required 
                        />
                        <div id="password" className="invalid-feedback">{formErrors.password}</div>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="inputPasswordConfirm" className="form-label small">Asegurémonos que sea la misma</label>
                        <input
                            value={passwordConfirm}
                            onChange={onChange} 
                            name="passwordConfirm"
                            type="password"
                            id="inputPasswordConfirm"
                            placeholder="Ingresa tu contraseña nuevamente"
                            className={`form-control form-control-sm  ${formErrors.passwordConfirm && `is-invalid`}`} autoComplete="new-password" required 
                        />
                        <div id="inputEmail" className="invalid-feedback">{formErrors.passwordConfirm}</div>
                    </div>
                    <div className="mb-3">
                        <p className="small mb-2">¿Cómo te registras en Learning?</p>
                        <div className="d-flex gap-2 mb-2">
                            <div>
                                <input
                                    type="radio"
                                    id="flexRadioDefault2"
                                    name="isStudent"
                                    value={true}
                                    onChange={onChange}
                                    className="me-1"
                                    defaultChecked
                                />
                                <label htmlFor="flexRadioDefault2" className="small">Soy Estudiante</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    id="flexRadioDefault1"
                                    name="isStudent"
                                    value={false}
                                    onChange={onChange} 
                                    className="me-1"
                                />
                                <label htmlFor="flexRadioDefault1" className="small">Soy Docente</label>
                            </div>
                        </div>
                        <div className= {`mb-2 ${isStudent === 'false' ? 'd-none' : ''}`}>
                            <label htmlFor="inputDocente" className="form-label small">Soy alumno de:</label>
                            <select id="inputDocente" className={ `form-select form-select-sm ${formErrors.teacherId && `is-invalid`}`} name="teacherId" onChange={onChange} aria-describedby="inputDocenteFeedback">
                                <option defaultValue  value="null" disabled selected>
                                    Seleccione una opción
                                </option>
                                {teachers.map(teacher => (
                                        < option key={teacher.email} value={teacher.email} >{teacher.name} {teacher.surname}, {teacher.email}</option>
                                    ))}
                            </select>
                            <div id="inputDocenteFeedback" className="invalid-feedback"> {formErrors.teacherId} </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <button type="submit" onClick={onRegister} className="btn btn-primary btn-sm w-20">
                            Quiero unirme
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

