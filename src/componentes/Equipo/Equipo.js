import "./Equipo.css"
import Colaborador from "../Colaborador/Colaborador"

const Equipo = (props) => {
    //destructuracion
    const {colorPrimario} = props.datos
    const {colaboradoress, eliminarColaboradorr} = props //la nom de funcion lo recibe desde APP

    //console.log(colaboradoress.length)//el tamno

    return <>
        {
            colaboradoress.length > 0 && //con esta condicion mostraremos solo aquellos colaborares que esten con algun elelemnto caso contrario no se mostraria y se coloca esa etiqueya <></>
            <section className="equipo">
                <div className="cabeceraColaorador">
                    <button style={{backgroundColor : colorPrimario}}>{props.datos.titulo}</button>
                    <h3>Formacion {props.datos.titulo} de Alura Latam</h3>
                </div>
                <div className="colaboradores">
                    {
                        colaboradoress.map((colaborador, index) => <Colaborador 
                            datoss={colaborador} 
                            key={index}
                            eliminarColaboradore ={eliminarColaboradorr}//el nom de fun se envio a todos los componentes Equipo
                        />)
                    }
                </div>
            </section>
        }
    </>
}

export default Equipo