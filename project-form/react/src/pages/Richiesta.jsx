import { useSelector } from "react-redux" // per leggere i dati salvati in redux
import { Link } from 'react-router-dom'

const Richiesta = () => {
    const info = useSelector((state) => state.info) //prendo i dati salvati in redux
        
    return (
        <>
            <h1>Richiesta</h1>
            <p>I tuoi dati sono corretti?</p>
            {/* ?. = se esiste, accedi alla proprietà */}
            {/* se esiste lastInfo mostra name*/}
            <p>Name: {info?.name}</p>
            <p>Surname: {info?.surname}</p>
            <p>Email: {info?.email}</p>
            <p>Phone: {info?.phone}</p>
            <div>
                <Link to="/">Modifica</Link>
            </div>
            <div>
                <Link to="/conferma">Conferma</Link>
            </div>
        </>
    )
}
export default Richiesta