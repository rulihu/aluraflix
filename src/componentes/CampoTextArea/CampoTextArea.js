import "./CampoTextArea.css"

function TextArea(props) {

    const manejaCambioTextAre = (e) => {
        //console.log("cambio en textArea", e.target.value)
        props.actualizarDescripcion(e.target.value)
    }

    return <textarea name="textarea" rows="4" cols="60" value={props.valor} onChange={manejaCambioTextAre}>
              Descripcion prueba
           </textarea>
}

export default TextArea