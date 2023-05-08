import React, {useEffect, useState} from 'react';
import './icon.css'

export default function Icon(props){
    return(
        <div className={props.clase}>
            <img className={props.imgClase} src={props.src}></img>
        </div>
    )
}
