import React, {useEffect, useState} from 'react';
import './footertextlink.css'

export default function Footertextlink(props){
    return(
        <div className='cointainer_text'>
            <p className='normalTextFooter'>
            {props.firstText}
            <span className='linkedFooter'>{props.linkedText}</span>
            {props.secondText}
            <span className='linkedFooter'>{props.secondlinkedText}</span>.
            </p>
        </div>
    )
}