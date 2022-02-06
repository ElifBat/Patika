import { useState, useEffect } from 'react';

const initialFormValue = { text: "", done: false };

function Form({ list, setList, setFilteredList, selectAllItems, isSelectAll }) {
    const selectedArrow = 'arrow-icon.svg';
    const unSelectedArrow = 'whitearrow.svg';

    const [form, setForm] = useState(initialFormValue);

    useEffect(() => {
        setForm(initialFormValue)
    }, [list]);

    const addItem = (event) => {
        setForm({ ...form, text: event.target.value})
    };

    const onSubmit = (event) => {
        event.preventDefault();
    
        if (form.text.trim() === "") {
            return false;
        }

        setList([...list, form])
        setFilteredList([...list, form])
    };

    return <div>
        <h1>todos</h1>
        <form className={"view, new-todo"} onSubmit={onSubmit}>
            <img onClick={selectAllItems} className={"changeColor"} src={`./${isSelectAll ? selectedArrow : unSelectedArrow}`} />
            <input
                name={"text"}
                placeholder={"What needs to be done?"}
                value={form.text}
                onChange={addItem}
            />
        </form>
    </div>;
}

export default Form;
