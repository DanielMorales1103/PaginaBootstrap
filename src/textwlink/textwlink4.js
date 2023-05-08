import React, {useEffect, useState} from 'react';
import './textwlink.css'

export default function TextLink4(){
    return(
        <div className='contText'>
            <p className='normalText'>
            Use any of our            
            <span className='linked'> global :root variables</span>
            to write new styles. CSS variables use the
            <span className='red'>var(--bs-variableName)</span>
            syntax and can be inherited by children elements.
            </p>
        </div>
    )
}