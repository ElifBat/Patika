import { useState, useEffect } from 'react';
import arrow1 from './arrow-icon.svg'
import arrow2 from './whitearrow.svg'


function Form({ list, setList }) {
    const [form, setForm] = useState({ text: "", done: [true] });
    let changeColorDOM = document.querySelector("#changeColor")
    let listDOM = document.getElementsByClassName("toggle")

    let counter = 0;

    useEffect(() => {
        setForm({ text: "", done: [true] })
    }, [list]);

    const changeForm = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value })
    };
    const onClick = () => {
        counter++;
        deneme();

        if (counter % 2 !== 0) {
            for (let i = 0; i < list.length; +i++) {
                list[i].done = true;
            }
            changeColorDOM.setAttribute("src", arrow1);
            deneme();
        }

        if (counter % 2 === 0) {
            for (let i = 0; i < list.length; +i++) {
                list[i].done = false;
            }
            deneme();
            changeColorDOM.setAttribute("src", arrow2);
        }
    };

    const onSubmit = (event) => {
        event.preventDefault();

        if (form.text === "") {
            return false;
        }

        form.text.trim();
        setList([...list, form])
    };

    function deneme() {
        for (let i = 0; i < list.length; i++) {
            if (list[i].done == true) {
                console.log("çalışıyor");
            }
        }
    }

    return <div>
        <h1>todos</h1>
        <form className={"view"} onSubmit={onSubmit}>
            <img onClick={onClick} id={"changeColor"} className={"changeColor"} src={arrow2} />
            <input
                className={"new-todo"}
                name={"text"}
                placeholder={"What needs to be done?"}
                value={form.text}
                onChange={changeForm}
            />
        </form>
    </div>;
}

export default Form;
