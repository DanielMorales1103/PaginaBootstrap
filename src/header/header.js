import React, { useState } from "react";
import './header.css';
import Menu from "../menu/menu";
import Menu2 from "../menu/menu2";
import Iconos from "../imagenes/Iconos.jpg"
import LogoBlanco from "../imagenes/Logo_Blanco.png"
import CreateImg from "../imgs/imgs";

export default function CreateHeader(){
    const ModosVisivilidad = [{modo: '☀ Light ✔'},{modo: '☾ Dark'},{modo: 'ⵀ Auto'}];

    return(
        <>
            <div className="NavBar">
                <div className="ContIzquierda">
                    <CreateImg clase={'LogoBlanco'} src={LogoBlanco}></CreateImg>
                </div> 
                <div className="ContTextos"> 
                    <p className="texts">Docs</p>
                    <p className="texts">Examples</p>
                    <p className="texts">Icons</p>
                    <p className="texts">Themes</p>
                    <p className="texts">Blog</p>   
                </div>                        
                <div className="ContDerecha">
                    <CreateImg clase={'ImgIconos'} src={Iconos}></CreateImg>
                    <Menu2/>
                    <Menu inicio={'☀ ⏷'} elements={ModosVisivilidad}/>
                </div>                
            </div>
            
        </>
    )
}