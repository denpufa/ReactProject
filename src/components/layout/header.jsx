import './button.css'
import React from 'react'

import {useHistory} from "react-router-dom";



export default (args) => {
    let history =useHistory();

    function defaultFirstClick(){
        history.push('/upload')
    }
    function defaultSecondClick(){
        history.push('/validate')
    }
   
   return  <div className="header">
        <button className="button" onClick={args.firstOn || defaultFirstClick}>{args.firstButton || 'Upload'}</button>
        <button className="button" onClick={args.secondOn || defaultSecondClick}>{args.secondButton || 'Validate'}</button>
        <h1>{args.show}</h1>
    </div>

}