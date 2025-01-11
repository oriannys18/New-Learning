import { useState } from "react";

export const useForm = (initialForm) => {
    const [form, setForm] = useState(initialForm);
    const [formErrors, setFormErrors] = useState(initialForm);
    const [isUserInvalid, setIsUserInvalid] = useState(false);

    const onChange = ({ target }) => {
        const { name, value } = target;

        setForm(form => ({ ...form, [name]: value }));
        setFormErrors(formErrors => ({ ...formErrors, [name]: '' }));
        setIsUserInvalid(false);
    }

    const onResetForm = () => {
        setForm(initialForm);
    }

    const validateForm = () => {
        const errors = {};
        for (const key in form) {
            switch (key) {
                case 'email':

                    if (form[key].trim() === '') {
                        // setFormErrors(formErrors => ({ ...formErrors, email: 'El Email es requerido!' }));
                        errors['email'] = 'El email es requerido!';
                    } else if (!form[key].match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
                        // setFormErrors(formErrors => ({ ...formErrors, email: 'El Email es invalido!' }));
                        errors['email'] = 'El email es invalido!';
                    }
                    break;

                case 'password':
                    if (form[key].trim() === '') {
                        // setFormErrors(formErrors => ({ ...formErrors, password: 'La contraseña es requerida!' }));
                        errors['password'] = 'La contraseña es requerida!';
                    } else if (form[key].length < 6) {
                        // setFormErrors(formErrors => ({ ...formErrors, password: 'La contraseña deberia ser mayor a 5 digitos!' }));
                        errors['password'] = 'La contraseña deberia ser mayor a 5 digitos!';
                    }
                    break;
                default:
                    break;
            }
        }

        return errors;
    }

    return { ...form, form, onChange, onResetForm, validateForm, formErrors, setFormErrors, setIsUserInvalid, isUserInvalid };
}
