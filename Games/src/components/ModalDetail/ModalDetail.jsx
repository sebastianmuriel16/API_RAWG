import { Carrusel } from "../Carrusel/Carrusel"
import './ModalDetail.css'
function ModalDetail({ game }) {
    if(!game) return null
    

    return (
        <div className="modal">
            <div className="modal-content">
                <Carrusel />
            </div>
        </div>
    )
}

export { ModalDetail }