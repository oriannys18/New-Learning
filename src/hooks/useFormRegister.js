import { useState } from "react"

export const useFormRegister = (initialForm) => {
    const [form, setForm] = useState(initialForm);

    const onChange = ({ target }) => {
        const { name, value } = target;

        setForm(form => ({ ...form, [name]: value }));
    }

    const onResetForm = () => {
        setForm(initialForm);
    }

    return { form, ...form, onChange, onResetForm };
}
