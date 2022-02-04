import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';

const initialFormValue = { fullname: "", number: "" }

function Form({ contacts, addContact }) {
    const [form, setForm] = useState(initialFormValue);

    useEffect(() => {
        setForm(initialFormValue)
    }, [contacts])

    const changeForm = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const onSubmit = (event) => {
        event.preventDefault();

        if (form.fullname === "" || form.number === "") {
            return false;
        }

        addContact([...contacts, form]);
    }

    return (
        <form onSubmit={onSubmit} >
            <div>
                <input
                    className="addInput"
                    name={"fullname"}
                    value={form.fullname}
                    placeholder={"I Name"}
                    onChange={changeForm} />
            </div>

            <div>
                <input
                    name={"number"}
                    value={form.number}
                    placeholder={"I Phone Number"}
                    onChange={changeForm} />
            </div>

            <div className="btn">
                <button >Add</button>
            </div>

        </form>
    )
}

export default Form;
