import React from "react";
import Sketch from "react-p5";
import "./Ejercicios.css";

const EjercicioDos = () => {
    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(400, 400).parent(canvasParentRef);
    };

    const draw = (p5) => {
        p5.background(245, 235, 255);
        p5.noStroke();

        p5.fill(180, 170, 250);
        p5.ellipse(200, 200, 600, 600);

        p5.fill(150, 120, 200);
        p5.ellipse(200, 200, 500, 500);

        p5.fill(100, 100, 200);
        p5.ellipse(200, 200, 400, 400);

        p5.fill(170, 115, 240);
        p5.ellipse(200, 200, 300, 300);

        p5.fill(255, 160, 190);
        p5.ellipse(200, 200, 200, 200);

        p5.fill(255, 240, 150);
        p5.ellipse(200, 200, 100, 100);
    };

    return(
        <div className="ejercicio-container">
            <h1>Ejercicio Dos</h1>
            <Sketch setup={setup} draw={draw} />
        </div>
    )
}
    


export default EjercicioDos;