import React,{ useState } from "react";
import './copylinks.css'
import Clipboard from "../imagenes/Clipboard.png"

export default function CopylinksManual(props){
    const [mostrarMensaje, setMostrarMensaje] = useState(false);

    const mostrar = () => {
        console.log("true");
        setMostrarMensaje(true);
    };
    
      const ocultar = () => {
        console.log("false");
        setMostrarMensaje(false);
    };
    const line1 = '<ul class="nav nav-pills nav-fill gap-2 p-1 small bg-primary rounded-5 shadow-sm" id="pillNav2" role="tablist" style="--bs-nav-link-color: var(--bs-white); --bs-nav-pills-link-active-color: var(--bs-primary); --bs-nav-pills-link-active-bg: var(--bs-white);">';
    const line2 = '<li class="nav-item" role="presentation">';
    const line3 = '<button class="nav-link active rounded-5" id="home-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="true">Home</button>'
    const line4 = '</li>'
    const line5 = '<li class="nav-item" role="presentation">'
    const line6 = '<button class="nav-link rounded-5" id="profile-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">Profile</button>'
    const line7 = '</li>'
    const line8 = '<li class="nav-item" role="presentation">'
    const line9 = '<button class="nav-link rounded-5" id="contact-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">Contact</button>'
    const line10 = '</li>'
    const line11 = '</ul>'
    
    
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
                    <p className="pos2">{line7}</p>
                    <p className="pos2">{line8}</p>
                    <p className="pos3">{line9}</p> 
                    <p className="pos2">{line10}</p>
                    <p className="pos1">{line11}</p>   
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