import { NavLink } from "react-router-dom";
import "./NavBar.css";
import EjercicioUno from "./../views/Home/EjercicioUno";
import EjercicioDos from "./../views/Home/EjercicioDos";
import EjercicioTres from "./../views/Home/EjercicioTres";


function NavBar() {
    return (
        <nav className="navbar">
            <NavLink 
                to="/" 
                className="navbar__tab"
            >
                Ejercicio 1
            </NavLink>

            <NavLink 
                to="/EjercicioDos" 
                className="navbar__tab"
            >
                Ejercicio 2
            </NavLink>

            <NavLink 
                to="/EjercicioTres" 
                className="navbar__tab"
            >
                Ejercicio 3
            </NavLink>
        </nav>
    );
}

export default NavBar;