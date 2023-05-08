import React,{ useState } from "react";
import './instalation.css'
import Clipboard from "../imagenes/Clipboard.png"

export default function Instalation(props){
    const [mostrarMensaje, setMostrarMensaje] = useState(false);

    const mostrar = () => {
        console.log("true");
        setMostrarMensaje(true);
      };
    
      const ocultar = () => {
        console.log("false");
        setMostrarMensaje(false);
      };

    return(
        <>       
            <div className={props.clase}>
                <div className="Dollar"> $ </div>
                <div className={props.textclase}>{props.text}</div>
                <div className="CopyElement" > 
                <img className="ClipBoard" src={Clipboard} onMouseEnter={mostrar} onMouseLeave={ocultar} ></img></div>           
            </div>
                {mostrarMensaje &&(
                    <>
                    <div className={props.pop}>
                        Copy to clipboard                    
                    </div> 
                    <div className={props.tri}></div>
                    </>
                )}
         
        </>
    )
}