import "./Colaborador.css"
import {AiFillCloseCircle} from "react-icons/ai"


const Colaborador = (props) => {
    const {video, categoria, equipo, id} = props.datoss //es destructuracion de de objetos de Eqipo
    const {eliminarColaboradore} = props//otro objeto al hacer clic funcion se activa y elimina que viene desde el APP

    return <div className="colaborador">
        <AiFillCloseCircle className="eliminar" onClick={() => eliminarColaboradore(id)}/>
        <img src={video} alt={categoria}></img>
    </div>
}

export default Colaborador