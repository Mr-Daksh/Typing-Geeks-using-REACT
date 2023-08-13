import React, { useState, useEffect, useRef } from "react"
import './game2.css';


export default function Game2word(props) {
    const canvas = useRef(null)
    var x = 100;
    var y = 100;
    var dx = 2;
    var dy = 1;
    var c = 17;


    useEffect(() => {
        if (canvas) {
            const ctx = canvas.current.getContext("2d")
            animate()

            function animate() {
                requestAnimationFrame(animate);
                ctx.clearRect(0, 0, 500, 550);

                ctx.beginPath();
                ctx.fillStyle = "black"
                ctx.beginPath();
                ctx.font = "20px Comic Sans MS"
                ctx.lineWidth = 10;
                var gradient = ctx.createLinearGradient(0, 0, 400, 0);
                gradient.addColorStop("0", " magenta");
                gradient.addColorStop("0.5", "blue");
                gradient.addColorStop("1.0", "red");
                // ctx.fillRect(x, y, 100, 100)
                ctx.fill();
                ctx.beginPath();
                ctx.fillStyle = gradient;
                ctx.textAlign = "center"

                ctx.fillText(props.name, x, y + 20);
                ctx.fill();

                if (x + (c * 10) > 420 || x < 0 + 42) {
                    dx = -dx;
                }
                if (y + 20 > 145 || y < 0) {
                    dy = -dy;
                }
                x += dx;
                y += dy;
            }
        }
    }, [canvas, props.name])


    return (
        <div className="canva-cont">
            <canvas
                ref={canvas}
                // width={400}u
                // height={230}
                className="canva" />
            {/* <h2>{props.name}</h2> */}
        </div>
    )
}


// var canvas1 = document.getElementById("canvas");
// var context = canvas1.getContext("2d");

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// var x = 100;
// var y = 100;
// var dx = 2;
// var dy = 1;
// var radius = 30;
// var c = 17;

// function animate() {
//   requestAnimationFrame(animate);

//   context.clearRect(0, 0, innerWidth, innerHeight);

//   context.beginPath();
//   context.fillStyle = "yellow";
//   context.strokeStyle = "black";
//   context.font = "20px Georgia";
//   context.lineWidth = 10;
//   context.fillRect(x, y, c * 10, 20);
//   context.fill();
//   context.beginPath();
//   context.fillStyle = "red";

//   context.fillText("Hello World! mimi", x, y + 20);
//   context.fill();

//     if (x + (c * 10)> innerWidth || x < 0) {
//       dx = -dx;
//     }

//     if (y + 20 > innerHeight || y < 0) {
//       dy = -dy;
//     }

//     x += dx;
//     y += dy;
// }

// animate();