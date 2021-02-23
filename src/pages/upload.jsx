import React from 'react'
import Head from '../components/layout/header.jsx'
import '../components/layout/button.css'
import {useHistory} from "react-router-dom";

export default (args) => { 
    
    let history = useHistory()
    
    function firstClick(){
        history.push('/')
    }
    function secondClick(){
        history.push('/validate')
    }




    return <div>
                <Head show="Upload your picture"  firstButton="Home" secondButton="Validate" firstOn={firstClick} secondOn={secondClick}/>
                <button className="button">Select</button>
            </div>


}
