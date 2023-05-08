import React, {useEffect, useState} from 'react';
import './textwlink.css'

export default function Text1Link(props){
    return(
        <div className='contText'>
            <p className='normalText'>
            {props.normalText}
            <span className='linked'>{props.linkedText}</span>
            
            </p>
        </div>
    )
}