import { useEffect, useMemo, useState } from 'react';

export const useNewForm = (initialForm = {}, formValidations = {}) => {
    const [formState, setFormState] = useState(initialForm);
    const [formValidation, setFormValidation] = useState({});

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => { createValidators() }, [formState]);
    useEffect(() => { setFormState(initialForm) }, [initialForm]);

    const isFormValid = useMemo(() => {
        for (const key in formValidation) {
            if (formValidation[key] !== null) return false;
        }
        return true;
    }, [formValidation]);

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        });
    };

    const onResetForm = () => {
        setFormState(initialForm);
    };

    const onSetForm = (valuesForm) => {
        setFormState(valuesForm);
    };

    const createValidators = () => {
        const formCheckedValues = {};

        for (let key in formValidations) {
            const [fn, error] = formValidations[key];
            formCheckedValues[`${key}Valid`] = fn(formState[key]) ? null : error;
        }

        setFormValidation(formCheckedValues);
    };

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
        onSetForm,
        isFormValid,
        formValidation,
        setFormErrors: setFormValidation,
        validateForm: createValidators,
    };
};