import React, { useState } from "react";
import './footer.css';
import CreateImg from "../imgs/imgs";
import LogoNegro from "../imagenes/LogoNegro.png";
import Object from "../ObjectDiv/object";

export default function CreateFooter(){
    return(
        <>
            <div className="footer">
                <div className="ContainerFooter1">
                    <div className="TitleContainer">
                        <CreateImg clase={'LogoNegro'} src={LogoNegro}></CreateImg>
                        <Object clase={'FooterTitle'} text={'Bootstrap'}></Object>
                    </div>
                </div>
            </div>
        </>
    )
}