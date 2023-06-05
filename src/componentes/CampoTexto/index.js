import { useState } from "react"
import "./CampoTexto.css"

const CampoTexto = (props) => {
    //const[valor,actualizarValor] = useState("")
    //console.log("Datos : ", props)
    const placeholderModificado = `${props.placeholder}...`
    //Destructuracion se realiza esto debido a que queremos que se comporte como campor te texto o de color
    const { type = "text" } = props//por defecto agarara campo texto y en otro caso campo color 
    //console.log(type)

    const manejarCambio = (e) => {
        //console.log("cambio",e.target.value)
        props.actualizarValorr(e.target.value)//con esto cada vez que se escrie algo  se va almacenando obteniendo
    }

    return <div className="campo-text">
                <label> {props.titulo} </label>
                <input 
                    placeholder = {placeholderModificado} 
                    required={props.required} 
                    value={props.valor}
                    onChange={manejarCambio}
                    type={type}
                />
           </div>
}
export default CampoTexto