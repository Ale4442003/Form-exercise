import { useState } from "react";
import {  useDispatch } from 'react-redux'
import { setInfo } from "../store/features/infoSlice";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate

    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
    })

    const handleInput = (event) => {
        const{target:{name, value}} = event
        setForm(f => ({...f, [name]:value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(setInfo(form))
        navigate('/confirm')
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="firstName">FirstName</label>
                    <div>
                        <input onInput={handleInput} value={form.firstName} type="text" id='firstName' name="firstName" />
                    </div>
                </div>
            </form>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="lastName">LastName</label>
                    <div>
                        <input onInput={handleInput} value={form.lastName} type="text" id='lastName' name="lastName" />
                    </div>
                </div>
            </form>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email</label>
                    <div>
                        <input onInput={handleInput} value={form.email} type="email" id='email' name="email" />
                    </div>
                </div>
            </form>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="phone">Phone</label>
                    <div>
                        <input onInput={handleInput} value={form.phone} type="tel" id='phone' name="phone" />
                    </div>
                </div>
            </form>
            <div>
                <button type="submit">Save</button>
            </div>
        </>
    )
}

export default Home