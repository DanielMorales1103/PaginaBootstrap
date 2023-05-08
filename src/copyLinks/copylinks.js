import React,{ useState } from "react";
import './copylinks.css'
import Clipboard from "../imagenes/Clipboard.png"

export default function Copylinks(props){
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
                <div className={props.textclase}>{props.text}</div>
                <div className="CopyElement" > 
                <img className="ClipBoard" onMouseEnter={mostrar} onMouseLeave={ocultar} src={Clipboard}></img></div>           
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