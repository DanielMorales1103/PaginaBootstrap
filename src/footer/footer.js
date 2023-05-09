import React, { useState } from "react";
import './footer.css';
import CreateImg from "../imgs/imgs";
import LogoNegro from "../imagenes/LogoNegro.png";
import Object from "../ObjectDiv/object";
import Footertextlink from "../footertextlink/footertextlink";
import FooterLink from "./footerlink";

export default function CreateFooter(){
    const fisrtColumn =[{text:'Home'},{text:'Docs'},{text:'Examples'},{text:'Icons'},{text:'Themes'},{text:'Blog'},{text:'Swag Store'}];
    const secondColumn =[{text:'Getting started'},{text:'Starter template'},{text:'Webpack'},{text:'Parcel'},{text:'Vite'}];
    const thirdColumn =[{text:'Bootstrap 5'},{text:'Bootstrap 4'},{text:'Icons'},{text:'RFS'},{text:'Examples repo'}];
    const fourthColumn =[{text:'Issues'},{text:'Discussions'},{text:'Corporate sponsors'},{text:'Open Collective'},{text:'Stack Overflow'}];

    return(
        <>
            <div className="footer">
                <div className="ContainerFooter1">
                    <div className="TitleContainer">
                        <CreateImg clase={'LogoNegro'} src={LogoNegro}></CreateImg>
                        <Object clase={'FooterTitle'} text={'Bootstrap'}></Object>
                    </div>
                    <Footertextlink firstText={'Designed and built with all the love in the world by the'} 
                        linkedText={'Bootstrap team'} 
                        secondText={'with the help of'} secondlinkedText={'our contributors'}></Footertextlink>
                    <Footertextlink firstText={'Code licensed'} 
                        linkedText={'MIT'} 
                        secondText={', docs'} secondlinkedText={'CC BY 3.0'}></Footertextlink>
                    <Object clase={'TextoFooterNlink'} text={'Currently v5.3.0-alpha3.'}></Object>
                </div>
                <div className="ContainerFooter2">
                    <Object clase={'SecondFooterTitle'} text={'Links'}></Object>
                    {fisrtColumn.map(element =>{
                            return <FooterLink text={element.text}></FooterLink>
                    })}
                </div>
                <div className="ContainerFooter3">
                    <Object clase={'SecondFooterTitle'} text={'Guides'}></Object>
                    {secondColumn.map(element =>{
                            return <FooterLink text={element.text}></FooterLink>
                    })}
                </div>
                <div className="ContainerFooter3">
                    <Object clase={'SecondFooterTitle'} text={'Projects'}></Object>
                    {thirdColumn.map(element =>{
                            return <FooterLink text={element.text}></FooterLink>
                    })}
                </div>
                <div className="ContainerFooter3">
                    <Object clase={'SecondFooterTitle'} text={'Community'}></Object>
                    {fourthColumn.map(element =>{
                            return <FooterLink text={element.text}></FooterLink>
                    })}
                </div>
            </div>
        </>
    )
}