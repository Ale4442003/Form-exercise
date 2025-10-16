import { useState } from "react";

const Home = () => {
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
    })
    return (
        <>
            <form>
                <div>
                    <label htmlFor="firstName">FirstName</label>
                    <div>
                        <input type="text" id='firstName' name="firstName" />
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