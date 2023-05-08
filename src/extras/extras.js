import React, {useEffect, useState} from 'react';
import './extras.css'

export default function CreateExtras(){
    return(
        <div className='ContExtras'>
            <div className='Text'>Currently</div>
            <div className='Version'>v5.3.0-alpha3</div>
            <div className='point'>.</div>
            <div className='Underline'>Download</div>
            <div className='point'>.</div>
            <div className='Underline'>v4.6.x docs</div>
            <div className='point'>.</div>
            <div className='Underline'>All releases</div>
        </div>
    )
}