import React, {useEffect, useState} from 'react';
import './textwlink.css'

export default function TextLink6(){
    return(
        <div className='contText'>
            <p className='normalText'>
            Apply any of our included utility classes to our components to customize their appearance, 
            like the navigation example below. There are hundreds of classes available—from
            <span className='linked'>positioning</span> and 
            <span className='linked'>sizing</span> to
            <span className='linked'>colors</span> and
            <span className='linked'>effects</span>.
            Mix them with CSS variable overrides for even more control.
            </p>
        </div>
    )
}