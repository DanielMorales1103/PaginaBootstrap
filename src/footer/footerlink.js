import React, {useEffect, useState} from 'react';
import './footer.css'

export default function FooterLink(props){
    return(
        <div className='footerlink'>
            {props.text}
        </div>
    )
}