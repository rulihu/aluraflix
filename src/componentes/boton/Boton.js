import "./Boton.css"

const Boton = (props) => {
    /*return <button className="boton">{props.children}</button>*/
    //return <button className="boton">{props.nombre}</button>
    return <button className="boton" onClick={props.presionaRecet||props.presionaCambio||props.presionaRegistro}>{props.nombre}</button>
}

export default Boton