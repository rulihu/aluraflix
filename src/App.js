
import { useState, useEffect } from 'react';
import {v4 as uuid} from "uuid"
import './App.css';
import Header from './componentes/Header/Header';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario/Formulario';
import FormularioEquipo from './componentes/Formulario/FormularioEquipo';
import TableEquipo from './componentes/TablaEquipo/TablaEquipo';
import Footer from './componentes/Footer/Footer';
import Miorg from './componentes/Miorg/Miorg';
import Equipo from './componentes/Equipo/Equipo';
import Colaborador from './componentes/Colaborador/Colaborador';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Error404 from './componentes/Error404/Error404';
import { helpHttp } from './helpers/helpHttp';

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(true)//hucs para esconder el fomrulio NuevoVideo y mostra al principio
  const [mostrarFormulario2, actualizarMostrar2] = useState(true)//hucs para esconder el fomrulio Nueva categoria y mostra al principio
  //const [colaboradores, actualizarColaboradores] = useState([])//es una forma de inicializar en blanco la pagina
  /*const [colaboradores, actualizarColaboradores] = useState([{//con este incializamos con un registro estatico tomara este primer dato
      id: uuid(), 
      categoria:"Front End",
      descripcion:"recomendado",
      image:"https://github.com/rulihu/imagenesFlix/blob/master/imgBack1.png?raw=true",
      titulo:"Buenoooo",
      video:"https://github.com/rulihu/imagenesFlix/blob/master/imgBack1.png?raw=true"
    },
    {
      id: uuid(),
      categoria:"Back End",
      descripcion:"recomendado",
      image:"https://github.com/rulihu/imagenesFlix/blob/master/imgFron1.png?raw=true",
      titulo:"Buenoaaa",
      video:"https://github.com/rulihu/imagenesFlix/blob/master/imgFron1.png?raw=true"
    },
    {
      id: uuid(),
      categoria:"Innovacion y gestion",
      descripcion:"recomendado",
      image:"https://github.com/rulihu/imagenesFlix/blob/master/imgInGes1.png?raw=true",
      titulo:"Buenoss",
      video:"https://github.com/rulihu/imagenesFlix/blob/master/imgInGes1.png?raw=true"
    }
  ])*/
  const [colaboradores, actualizarColaboradores] = useState([])

  let api = helpHttp()
  /*let url2 = "http://localhost:5000/colaboradores"*/
  let url2 = "https://my-json-server.typicode.com/rulihu/Api_Flix/colaboradores"
  useEffect( () => {
    api.get(url2).then((res) => {
      /*console.log("Respuesta ----> ",res)*/
      if(!res.err){
        actualizarColaboradores(res)
      }else{
        actualizarColaboradores(null)
      }
    })
  },[])
    //ternario --> condicion ? seMuestra : noSeMuestra
  /*const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }*/

  //Registrar colaborador mediante el formulario
  const registrarColaborador = (colaborador) => {
    console.log("Nuevo colaborador", colaborador)
    let option = {
      body:colaborador,
      headers:{"content-type":"application/json"}
    }
    //Spread operato
    api.post(url2,option).then((res) => {
      console.log(res)
      if(!res.err){
          //actualizarColaboradores([...colaboradores, colaborador])
          actualizarColaboradores([...colaboradores, res])
      }else{
          console.log("error de registro",res)
      }
    })
  }

  //Eliminar colaborador
  const eliminarColaborador = (id) => {
    console.log("Eliminar colaborador: ",id)//deberia eliminar un componente equipo
    let endpoint = `${url2}/${id}`
    let option = {
      headers:{"content-type":"application/json"},
    }
    api.del(endpoint,option).then((res) => {
      console.log("-----Respuesta API: ",res)
      if(!res.err){
        const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)//si es distinto guardamos en el array nuevo/filter realiza un nuevo arreglo/la linea de codigo resumido sobrenetendemos que tiene un return
        //console.log(nuevosColaboradores)//muestra un array menos el eliminado
        actualizarColaboradores(nuevosColaboradores)//la funcion que se creo volvera a filtar 
      }else{
        console.log("error de eliminar colaborador",res)
      }
    })
    
  }

  //lista de equipos
  /*const equipos = [
    {
      id: uuid(),
      titulo:"Front End",
      colorPrimario: "#6BD1FF"
    },

    {
      id: uuid(),
      titulo:"Back End",
      colorPrimario: "#00C86F"
    },
    {
      id: uuid(),
      titulo:"Innovacion y gestion",
      colorPrimario: "#FE8C2A"
    },
    {
      id: uuid(),
      titulo: "Diseño",
      colorPrimario: "#A6D157"
    }
  ]*/
  /*const [equipos, actualizarEquipo]= useState([
    {
      id: uuid(),
      titulo:"Front End",
      colorPrimario: "#6BD1FF",
      descrip:"prueba",
      codigo:"123"
    },

    {
      id: uuid(),
      titulo:"Back End",
      colorPrimario: "#00C86F",
      descrip:"prueba",
      codigo:"123"
    },
    {
      id: uuid(),
      titulo:"Innovacion y gestion",
      colorPrimario: "#FE8C2A",
      descrip:"prueba",
      codigo:"123"
    },
    {
      id: uuid(),
      titulo: "Diseño",
      colorPrimario: "#A6D157",
      descrip:"prueba",
      codigo:"123"
    }
  ])*/
  const [equipos, actualizarEquipo]= useState([])
  let api2 = helpHttp()
  /*let url1 = "http://localhost:5000/equipos"*/
  let url1 = "https://my-json-server.typicode.com/rulihu/Api_Flix/equipos"
  useEffect(() => {
    api2.get(url1).then((res) => {
      if(!res.err){
        actualizarEquipo(res)
      }else{
        actualizarEquipo(res)
      }
    })
  },[])

  //registar equipo mediante el fomulario
  const registrarEquipo = (equipoo) => {//recibe desde el formulario un equipo
    console.log("Nuevo equipo categoria registrado",equipoo)
    let option = {
      body:equipoo,
      headers:{"content-type":"application/json"}
    }
    api.post(url1,option).then((res)=>{
      if(!res.err){
        //actualizarEquipo([...equipos, equipoo])
        actualizarEquipo([...equipos, res])
      }else{
        console.log("error de registro equipo",res)
      }
    })
  }

  //elimina equipo -> (Colaborador categoria)
  const eliminaEquipo = (id) => {
    console.log("Eliminar fila tabla equipo categoria :",id)
    let endpoint = `${url1}/${id}`
    let option = {
      headers:{"content-type":"application/json"},
    }
    api.del(endpoint,option).then((res) => {
      console.log("-----Respuesta API: ",res)
      if(!res.err){
        const nuevosEquipos = equipos.filter((equipo) => equipo.id !== id)
        actualizarEquipo(nuevosEquipos) 
      }else{
        console.log("error de eliminar equipo",res)
      }
    })
    
  }

  //const [dataToEdit, setDataToEdit] = useState(null)//dato de inicio vacio sin datos
  const [dataToEdit, editarEquipo] = useState(null)//estado inicial estari en null
  //es decir cuando este nulo se va hacer una insercion en caso de tener true sera una actualizacion
  //editar equipo -> (Colaborador categoria)
  /*const editarEquipooo = (id,titulo,colorPrimario,descrip) => {
    console.log("id fila tabla equipo categoria a editar:","ID:",id,"TITULO:",titulo,"COLOR:",colorPrimario,"DESCRI:",descrip)
  }*/

  const updateDataEqipo = (equipo) => {
    let endpoint = `${url1}/${equipo.id}`
    let option = {
      body:equipo,
      headers:{"content-type":"application/json"}
    }
    api.put(url1,option).then((res) => {
      console.log(res)
      if(!res.err){
        let dataEquipo = equipos.map(equip => equip.id===equipo.id?equipo:equip)
        actualizarEquipo(dataEquipo)
      }else{
        console.log("error de actualiza equipo",res)
      }
    })
  }
 
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element=
          {
           <><Header/><Banner/>
           {equipos.map((equipo) => <Equipo 
                datos={equipo} 
                key={equipo.titulo}
                /*colaboradoress={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}*/
                colaboradoress={colaboradores.filter(colaborador => colaborador.categoria === equipo.titulo)}//este filtra la categoria y titulo solo coencidentes para order en los respectivos equipos pertenecientes
                /*ests solo es un nombre asignado que recive en el otro lado ->*/eliminarColaboradorr = {eliminarColaborador}//este funcion se requiere para eliminar equipo pero es para comunicarse con el componente atraves de la props 
                />)
            }
            </>
          }/>
          
          <Route path='/' element={<Miorg/>}/>
          
          <Route path='/Formulario' element=
          {   <><Header/>
              {mostrarFormulario && <Formulario 
              equipos={equipos.map((equipo) => equipo.titulo)} 
              registrarColaboradorr={registrarColaborador}
              />}
              </>
          }/>

          <Route path='/FormularioEquipo' element = {
                mostrarFormulario2 && <><Header/><FormularioEquipo 
                  registrarColaborador_e={registrarEquipo}
                  updateDataEqipo = {updateDataEqipo}
                  dataToEdit = {dataToEdit}//pasara un valor y sabe si es null o con id
                  //setDataToEdit = {setDataToEdit}//un funcion
                  setDataToEdit = {editarEquipo}
                  />
                  <div className="tabla">
                    <TableEquipo 
                      actualtable = {equipos}//adicion para tablas
                      editEquipoe = {editarEquipo}//editar tabla
                      //setDataToEdit = {setDataToEdit}//con esto se sabra si esta activado para pasar los datos a la tabla
                      eliFilatable = {eliminaEquipo}//liminacion para tablas
                    />
                  </div>
                  </>
                }
          />
          <Route path='*' element={<Error404/>}/>
        </Routes>
      </Router>
      
      <Footer/>
      
    </div>
  );
}


export default App;
