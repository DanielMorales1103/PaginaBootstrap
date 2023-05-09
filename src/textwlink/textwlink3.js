import React, {useEffect, useState} from 'react';
import './textwlink.css'

export default function TextLink3(props){
    return(
        <div className='contText'>
            <p className='normalText'>            
            <span className='linked'>{props.linked} </span>
            {props.normal}
            
            </p>
        </div>
    )
}