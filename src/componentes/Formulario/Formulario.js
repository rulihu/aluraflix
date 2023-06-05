import { useState } from "react"
import {v4 as uuid} from "uuid"
import "./Formulario.css"
import CampoTexto from "../CampoTexto/index"
import TextArea from "../CampoTextArea/CampoTextArea"
import ListaOpciones from "../ListaOpciones/ListaOpciones"
import Boton from "../boton/Boton"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";

const initialFromColaborador = {
    id: null,
    titulo:"",
    video: "",
    image:"",
    categoria:"",
    descripcion:""
}

const Formulario = (props) => {

    const[titulo,actualizarTitulo] = useState("")
    const[video,actualizarLinkVideo] = useState("")
    const[image,actualizarLinkImage] = useState("")
    const[categoria,actualizarCate]= useState("")
    const[descripcion,actualizaDescri]= useState("")
    //destructuracion
    const { registrarColaboradorr } = props //la variable registrarColaboradorr viene desde APP y ese se asigna aca lo mismo pasa en los de mas casos
    
    const handleReset = (e) => {//control de boton de limpieza
        console.log("hizo clic en limpiar variables")
        /*setFromEquipo(initialFromEquipo)*/
        actualizarTitulo(initialFromColaborador.titulo)
        actualizarLinkVideo(initialFromColaborador.video)
        actualizarLinkImage(initialFromColaborador.image)
        actualizarCate(initialFromColaborador.categoria)
        actualizaDescri(initialFromColaborador.descripcion)
        /*setDataToEdit(null)*/
    }
    const handleCambioPagina = (e) => {//funcion para verificar el clic
        console.log("hizo clic registro nueva categoria")
    }

    const navigate = useNavigate();

    const manejaEnvio = (evento) => {
        evento.preventDefault()
        console.log("Maneja  el envio",evento)
        //arma un objeto para enviar datos
        let datosAEnviar = {
            id: uuid(),
            titulo,
            video,
            image,
            categoria,
            descripcion
        }
        //console.log(datosAEnviar) muestra objeto que se enviar
        registrarColaboradorr(datosAEnviar);//envia datos a APP
        navigate('/')
    }

    return <section className="formulario">
                <form onSubmit={manejaEnvio}>
                    <h2>Nuevo video</h2> 
                    <CampoTexto 
                        titulo="Titulo" 
                        placeholder="Ingrese titulo" 
                        required
                        valor={titulo}
                        actualizarValorr={actualizarTitulo}
                    />
                    <CampoTexto 
                        titulo="Link del video" 
                        placeholder="Ingrese link video" 
                        required
                        valor={video}
                        actualizarValorr={actualizarLinkVideo}
                    />
                    <CampoTexto 
                        titulo="Link imagen del video" 
                        placeholder="Ingrese link de imagen" 
                        required
                        valor={image}
                        actualizarValorr={actualizarLinkImage}
                    />
                    <ListaOpciones 
                        valor={categoria} 
                        actualizarCategoria={actualizarCate}
                        equipos={props.equipos}

                    />
                    <TextArea
                        valor={descripcion}
                        actualizarDescripcion={actualizaDescri}
                        
                    />
                    <Boton
                        nombre="Guardar"
                        presionaRegistro={manejaEnvio}
                    />
                    <Boton
                        nombre="Limpiar"
                        presionaRecet={handleReset}
                    />
                    <Link to={"/FormularioEquipo"}>
                        <Boton
                            nombre="Nueva Categoria"
                            presionaCambio={handleCambioPagina}
                        /> 
                    </Link>              
                </form>
           </section>
}

export default Formulario