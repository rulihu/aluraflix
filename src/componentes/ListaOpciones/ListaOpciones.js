import "./ListaOpciones.css"
//metodo map -> arreglo.map( (equipo) => {
//
//})
const ListaOpciones = (props) => {

   /* const equipos = [
        "Front End",
        "Back End",
        "Innovacion y gestion",
        "Diseño"
    ]*/

    const manejaCambio = (e) => {
        //console.log("cambio", e.target.value)
        props.actualizarCategoria(e.target.value)
    }

    return <div className="lista-opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejaCambio}>
            <option value="" disabled defaultValue="" hidden>Escoja la categoria</option>
            {props.equipos.map((equipo, index) => <option key={index} value={equipo}>{equipo}</option>)}
        </select>
    </div>
}
export default ListaOpciones