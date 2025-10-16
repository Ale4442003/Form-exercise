import { useDispatch } from "react-redux"
import { clearInfo } from "../store/features/infoSlice"
import { useNavigate } from "react-router-dom"

const Success = () => {
        const dispatch = useDispatch()
        const navigate = useNavigate()

        const handleBack = () => {
            dispatch(clearInfo())
            navigate('/')
        }
    
    return (
        <>
            <div>
                <p>Abbiamo registrato i tuoi dati!</p>
                <button onClick={handleBack}>Torna al form</button>
            </div>
        </>
    )
}

export default Success