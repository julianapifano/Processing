//import { P5Canvas } from "@p5-wrapper/react";
//import "./Ejercicios.css";

//function sketch(p5) {
//  p5.setup = () => {
//    p5.createCanvas(400, 400);
//  };

//  p5.draw = () => {
  //  p5.background(220);
    
  //  p5.stroke(0);
 //   p5.strokeWeight(2);

   // p5.line(0, 200, 400, 200);

   // p5.line(200, 0, 200, 400);
//  };
// }

//function EjercicioUno(){
  //  return(
    //    <div className="ejercicio-container">
      //      <h1>Ejercicio Uno</h1>
        //    <P5Canvas sketch={sketch}/>
//
  //      </div>
    //)
// }


//export default EjercicioUno;


import React from "react";
import Sketch from "react-p5";
import "./Ejercicios.css";

const EjercicioUno = () => {
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(400, 400).parent(canvasParentRef);
  };

  const draw = (p5) => {
    p5.background(220);
    
    p5.stroke(0);
    p5.strokeWeight(2);

    p5.line(0, 200, 400, 200);

    p5.line(200, 0, 200, 400);
  }

  return (
    <div className="ejercicio-container">
      <h1>Ejercicio Uno</h1>
    <Sketch setup={setup} draw={draw} />
    </div>
   );

};


export default EjercicioUno;
