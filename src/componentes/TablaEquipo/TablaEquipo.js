import "./TablaEquipo.css"
import {AiOutlineDelete, AiOutlineEdit} from "react-icons/ai"

function TableEquipo(props) {
    const {eliFilatable,editEquipoe} = props
    //"actualtable" viene desde APP la fucion "elemento.id,elemento.titulo,elemento.colorPrimario,elemento.descrip"

    return <table className="tablaEquipos">
                <thead>
                    <tr>
                        <th className="c1">Nombre</th>
                        <th className="c2">Descripcion</th>
                        <th className="c3">Editar</th>
                        <th className="c4">Remover</th>
                    </tr>
                </thead>
                <tbody>
                        { props.actualtable.map((elemento) => 
                            <tr>
                                <td>{elemento.titulo}</td>
                                <td>{elemento.descrip}</td>
                                <td className="c3"><AiOutlineEdit onClick={() => editEquipoe(elemento)}/></td>
                                <td className="c4"><AiOutlineDelete onClick={() => eliFilatable(elemento.id)}/></td>
                            </tr> 
                        )}
                </tbody>
              
           </table>
}

export default TableEquipo