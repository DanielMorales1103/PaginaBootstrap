import React,{ useState } from "react";
import './copy.css'
import CreateImg from "../imgs/imgs";
import Clipboard from "../imagenes/Clipboard.png"

export default function Copy(props){
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
                <div className={props.textclase}><CreateImg clase={props.claseimg} src={props.src}></CreateImg> </div>
                <div className="CopyElement"> 
                <img className="ClipBoardimg" src={Clipboard} onMouseEnter={mostrar} onMouseLeave={ocultar}></img></div>           
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