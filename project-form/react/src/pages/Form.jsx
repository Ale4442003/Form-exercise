import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { salvaForm } from "../store/features/infoSlice";


const Form = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const info = useSelector((state) => state.info );

    const [form, setForm] = useState({
        name: info.name,
        surname: info.surname,
        email: info.email,
        phone: info.phone,
    })

    const handleChange = (event) => { //aggirona i dati del form mentre scrivo
        const name = event.target.name;
        const value = event.target.value;
        setForm((form) => {
            return {
                ...form, //copio i vecchi valori
                [name]: value,
            }
        })

    }
    const handleSubmit = (e) => {
        e.preventDefault(); //non ricaricare la pagina quando invii il form

        //controlla che i campi non siano vuoti e poi manda i dati
        if (!form.name || !form.surname || !form.email || !form.phone) {
            alert("Compila tutti i campi");
            return;
        }

        dispatch(salvaForm(form)) //invia i dati a redux
        navigate('/richiesta'); //porta a '/richiesta'
    }

    return (
        <>
            <h1>Form</h1>
            <form onSubmit={handleSubmit}>
                <label
                    htmlFor="name">
                    Name
                </label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={form.name}
                    onChange={handleChange} />
                <label
                    htmlFor="surname">
                    Surname
                </label>
                <input
                    type="text"
                    name="surname"
                    id="surname"
                    value={form.surname}
                    onChange={handleChange} />
                <label
                    htmlFor="email">
                    Email
                </label>
                <input
                    type="text"
                    name="email"
                    id="email"
                    value={form.email}
                    onChange={handleChange} />
                <label
                    htmlFor="phone">
                    Phone
                </label>
                <input
                    type="text"
                    name="phone"
                    id="phone"
                    value={form.phone}
                    onChange={handleChange} />
                <button type="submit">Invia</button>
            </form>
        </>
    )
}
export default Form