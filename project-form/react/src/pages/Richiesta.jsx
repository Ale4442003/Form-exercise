import { useSelector } from "react-redux" // per leggere i dati salvati in redux
import { Link } from 'react-router-dom'

const Richiesta = () => {
    const info = useSelector((state) => state.info) //prendo i dati salvati in redux
    const lastInfo = info[info.length - 1];  // prendere l'ultimo salvato in redux
    
    return (
        <>
            <h1>Richiesta</h1>
            <p>I tuoi dati sono corretti?</p>
            {/* ?. = se esiste, accedi alla proprietà */}
            {/* se esiste lastInfo mostra name*/}
            <p>Name: {lastInfo?.name}</p>
            <p>Surname: {lastInfo?.surname}</p>
            <p>Email: {lastInfo?.email}</p>
            <p>Phone: {lastInfo?.phone}</p>
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