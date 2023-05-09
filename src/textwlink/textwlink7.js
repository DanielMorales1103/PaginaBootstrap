import React, {useEffect, useState} from 'react';
import './textwlink.css'

export default function TextLink7(props){
    return(
        <div className='contText'>
            <p className='normalText'>
            Learn more about
            <span className='linked'>our JavaScript as modules</span> and
            <span className='linked'>using the programmatic API</span>.
            </p>
        </div>
    )
}