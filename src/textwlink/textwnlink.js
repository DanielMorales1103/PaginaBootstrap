import React, {useEffect, useState} from 'react';
import './textwlink.css'

export default function TextnLink(props){
    return(
        <div className='contText'>
            <p className='normalText'>            
            {props.text}
            </p>
        </div>
    )
}