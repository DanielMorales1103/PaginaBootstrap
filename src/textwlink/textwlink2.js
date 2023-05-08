import React, {useEffect, useState} from 'react';
import './textwlink.css'

export default function TextLink2(){
    return(
        <div className='contText'>
            <p className='normalText'>
            When you only need to include Bootstrap’s compiled CSS or JS, you can use
            <span className='linked'> jsDelivr</span>. See it in action with our simple
            <span className='linked'>quick start</span>, or <span className='linked'>browse the examples</span>
            to jumpstart your next project. You can also choose to include Popper and our JS
            <span className='linked'>separately</span>.
            </p>
        </div>
    )
}