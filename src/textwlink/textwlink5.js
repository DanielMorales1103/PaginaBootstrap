import React, {useEffect, useState} from 'react';
import './textwlink.css'

export default function TextLink5(props){
    return(
        <div className='contTextOut'>
            <p className='normalText'>
            {props.firstText}
            <span className='linked'>{props.linkedText}</span>
            {props.secondText}
            </p>
        </div>
    )
}