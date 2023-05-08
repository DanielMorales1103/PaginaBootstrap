import React, { useState } from "react";
import './imgs.css';

export default function CreateImg(props){
    return(
        <img className={props.clase} src={props.src}></img>
    )
}