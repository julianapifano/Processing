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
                path="/EjercicioDos"
                element={<EjercicioDos />}
            />

            <Route 
                path="/EjercicioTres"
                element={<EjercicioTres />}
            />
        </Routes>
    )
}


export default AppRoutes;