import React, { useState } from "react";
import './object.css';

export default function Object(props){
    return(
        <div className={props.clase}>{props.text}</div>
    )
}