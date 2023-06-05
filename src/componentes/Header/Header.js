import { Link } from "react-router-dom"
import "./Header.css"
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    /*const handleClick = ()=> {
        // previously
        // history.push("/store");
        console.log("clic en bton nuevo");
        navigate("/Formulario");
      }*/
    /*const clicl = () =>{
        console.log("clic en bton nuevo");
        <Link to={"/Formulario"}>Otro</Link>
    }*/
    return <header className="header">
                <img src="/img/header.png" alt="logoAlura"/>
                <button type="button" onClick={()=>{navigate('/Formulario')}}>Nuevo Videoo</button>
           </header> 
}

export default Header