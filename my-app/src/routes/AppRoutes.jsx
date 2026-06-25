import { Routes, Route } from "react-router-dom";

import EjercicioUno from "../views/Home/EjercicioUno";
import EjercicioDos from "../views/Home/EjercicioDos";
import EjercicioTres from "../views/Home/EjercicioTres";

function AppRoutes(){

    return (
        <Routes>
            <Route 
                path="/"
                element={<EjercicioUno />}
            />

            <Route 
                path="/ejercicio-dos"
                element={<EjercicioDos />}
            />

            <Route 
                path="/ejercicio-tres"
                element={<EjercicioTres />}
            />
        </Routes>
    )
}


export default AppRoutes;