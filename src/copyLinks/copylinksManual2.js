import React,{ useState } from "react";
import './copylinks.css'
import Clipboard from "../imagenes/Clipboard.png"

export default function CopylinksManual2(props){
    const [mostrarMensaje, setMostrarMensaje] = useState(false);

    const mostrar = () => {
        console.log("true");
        setMostrarMensaje(true);
    };
    
      const ocultar = () => {
        console.log("false");
        setMostrarMensaje(false);
    };
    const line1 = '<div class="dropdown">';
    const line2 = '<button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">';
    const line3 = 'Dropdown'
    const line4 = '</button>'
    const line5 = '<ul class="dropdown-menu">'
    const line6 = '<li><button class="dropdown-item" type="button">Dropdown item</button></li>'
    const line7 = '<li><button class="dropdown-item" type="button">Dropdown item</button></li>'
    const line8 = '<li><button class="dropdown-item" type="button">Dropdown item</button></li>'
    const line9 = '</ul>'
    const line10 = '</div>'
    
    
    return(
        <>
        <div className={props.clase}>
                <div className={props.textclase}>                
                    <p>{line1}</p>
                    <p className="pos2">{line2}</p>
                    <p className="pos3">{line3}</p>
                    <p className="pos2">{line4}</p>
                    <p className="pos2">{line5}</p>
                    <p className="pos3">{line6}</p> 
                    <p className="pos3">{line7}</p>
                    <p className="pos3">{line8}</p>
                    <p className="pos2">{line9}</p> 
                    <p className="pos1">{line10}</p> 
                </div>
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