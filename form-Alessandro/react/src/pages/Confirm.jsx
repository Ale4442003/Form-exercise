import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const Confirm = () => {
    const info = useSelector(state => state.info)
    return (
        <>
        <div>
            <p>FirstName:{info.firstName}</p>
            <p>LastName:{info.lastName}</p>
            <p>Email:<a href={`mailto:${info.email}`}>{info.email}</a></p>
            <p>Phone:<a href={`tel:${info.phone}`}>{info.phone}</a></p>
        </div>
        <div>
            <p>I tuoi dati sono corretti?</p>
            <div>
                <Link to='/'>Modifica</Link>
                <Link to='/success'>Conferma</Link>
            </div>
        </div>
        </>
    )
}

export default Confirm