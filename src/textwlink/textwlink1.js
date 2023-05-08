import React, {useEffect, useState} from 'react';
import './textwlink.css'

export default function TextLink1(){
    return(
        <div className='contText'>
            <p className='normalText'>
            Install Bootstrap’s source Sass and JavaScript files via npm, RubyGems, Composer, or Meteor. 
            Package managed installs don’t include documentation or our full build scripts. You can also 
            <span className='linked'>use any demo from our Examples repo</span>
            to quickly jumpstart Bootstrap projects.
            </p>
        </div>
    )
}