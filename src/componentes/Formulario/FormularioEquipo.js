import { useEffect, useState } from "react";
import {v4 as uuid} from "uuid"
import "./Formulario.css"
import CampoTexto from "../CampoTexto";
import TextArea from "../CampoTextArea/CampoTextArea";
import Boton from "../boton/Boton"
import { Link } from "react-router-dom"

/*valores iniciales del fomrulario de Equipo categoria */
const initialFromEquipo = {
    id: null,
    titulo:"",
    colorPrimario: "",
    descrip:"",
    codigo:""
}

const FormularioEquipo = (props) => {
    //valores inicializados en blanco
    const[titulo,actualizaNombre] = useState(initialFromEquipo.titulo)
    const[descrip,actualizaDescrip] = useState(initialFromEquipo.descrip)
    const[colorPrimario,actualizaColor] = useState(initialFromEquipo.colorPrimario)
    const[codigo,actulizaCodigo] = useState(initialFromEquipo.codigo)
    /*const[formEquipo,setFromEquipo] = useState(initialFromEquipo)*/

    //destruturacion
    const {dataToEdit,setDataToEdit,} = props//datos que vienen deesde del componenete principal

    useEffect(() => {
        if (dataToEdit){
            actualizaNombre(dataToEdit.titulo)
            actualizaDescrip(dataToEdit.descrip)
            actualizaColor(dataToEdit.colorPrimario)
            actulizaCodigo(dataToEdit.codigo)
        }
        else{
            actualizaNombre(initialFromEquipo.titulo)
            actualizaDescrip(initialFromEquipo.descrip)
            actualizaColor(initialFromEquipo.colorPrimario)
            actulizaCodigo(initialFromEquipo.codigo)
        }
    },[dataToEdit])

    const handleChange = (e) => {}//manjea cambio que sustituye a la fucnion de tabla manjaCambio
    const handleSubmit = (e) => {}//control de envio es la misma funcion "manejaEnvio_e" abajo designdao
    const handleReset = (e) => {//control de boton de limpieza
        console.log("hizo clic en limpiar variables")
        /*setFromEquipo(initialFromEquipo)*/
        actualizaNombre(initialFromEquipo.titulo)
        actualizaDescrip(initialFromEquipo.descrip)
        actualizaColor(initialFromEquipo.colorPrimario)
        actulizaCodigo(initialFromEquipo.codigo)
        /*setDataToEdit(null)*/
    }

    const { registrarColaborador_e} = props//funcion enviada desde APP "editEquipo"

    const manejaEnvio_e = (evento) => {
        evento.preventDefault()
        console.log("Maneja  el envio equipo",evento)
        let datosAEnviar_e = {
            id: uuid(),
            titulo,
            descrip,
            colorPrimario,
            codigo
        }
        console.log(datosAEnviar_e)//mostrala por consola el objero json eniado
        registrarColaborador_e(datosAEnviar_e)
    }

    return <section className="formulario">
        <form onSubmit={manejaEnvio_e}>
            <h2>Nueva Categoría</h2>
            <CampoTexto 
                titulo="Nombre" 
                placeholder="Ingrese Nombre" 
                required
                valor={titulo}
                //valor={formEquipo.titulo}
                //actualizarValorr={setDataToEdit}
                actualizarValorr={actualizaNombre}
            />
            <TextArea
                valor={descrip}
                //alor={formEquipo.descrip}
                //actualizarValorr={setDataToEdit}
                actualizarDescripcion={actualizaDescrip}
            />
            <CampoTexto 
                titulo="Color" 
                placeholder="Ingrese Color en hexadecimal" 
                required
                valor={colorPrimario}
                //valor={formEquipo.colorPrimario}
                //actualizarValorr={setDataToEdit}
                actualizarValorr={actualizaColor}
                type="color"//este detectera en componente texto caso contrario sera textto
            />
            <CampoTexto 
                titulo="Codigo" 
                placeholder="Ingrese codigo de seguridad" 
                required
                valor={codigo}
                //valor={formEquipo.codigo}
                //actualizarValorr={setDataToEdit}
                actualizarValorr={actulizaCodigo}
            />
            <Boton 
                nombre="Guardar"
            />
            <Boton 
                nombre="Limpiar"
                //onClick={handleReset} //no funciona esta linea debido que se neceita que se comunque con el otro componente hijo
                presionaRecet={handleReset}
            />
            <Link to={"/Formulario"}>
                <Boton 
                    nombre="Volver"
                />
            </Link>
        </form>

    </section>
} 

export default FormularioEquipo
