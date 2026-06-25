import React from "react";
import Sketch from "react-p5";

const EjercicioTres = () => {
    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(400, 400).parent(canvasParentRef);
    };

    const draw = (p5) => {
        p5.background(220);

        p5.rect(0,0,50,50);
        p5.rect(350,0,50,50);
        p5.rect(0,350,50,50);
        p5.rect(350,350,50,50);
    }

    return(
        <div className="ejercicio-container">
            <h1>Ejercicio Tres</h1>
    <Sketch setup={setup} draw={draw} />
        </div>
    )
}


export default EjercicioTres;