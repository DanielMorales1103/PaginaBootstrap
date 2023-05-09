import React, {useEffect, useState} from 'react';
import './plugin.css'

export default function CreatePlugin(props){
    return(
        <div className='Plugin'>
            <p className='Title'>
            {props.title}
            </p>
            <p className='text'>
            {props.text}
            </p>
        </div>
    )
}