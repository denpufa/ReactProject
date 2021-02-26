import React, { createElement, useState, useEffect } from 'react'
import Card from '../components/layout/cardPicture.jsx'
import Head from '../components/layout/header.jsx'
import '../components/layout/button.css'
import { useHistory } from 'react-router-dom'
import axios from 'axios'


export default (args) => {
    let history = useHistory()
    
    const [toSend,setToSend] = useState([])
    
    function AllCards() {    
        const [date, setDate] = useState([])
        
        useEffect(()=>{
            
            let response = axios.get('http://localhost:8080/img/false')
            response.then((dados) => {
                console.log(dados.data)
                    setDate(dados.data)
            })           
        },[])
        return ( <> 
                {date.map(i => 
                <>
                <Card key={i.link} src={i.link}></Card>
                <input type="checkbox"  onChange={()=>{setToSend(toSend+[i.link])}}/>
                </>
                )}
                </>
            );
    }
        

    
    function firstClick() {
        history.push("/")
    }
    function secondClick() {
        history.push("/upload")
    }
    function validateImg() {
        axios.post('http://localhost:8080/'
            
        )

    }

   
    
    

    return <div className="validate">
        <Head show="to validate a picture click on check box above,after click on finish button" firstOn={firstClick} firstButton="Home" secondButton="upload" secondOn={secondClick}></Head>
        <div className="cards">
            <form>
                <button className="Button" onClick={validateImg}>Finish</button>
                {AllCards()}
            </form>

        </div>
    </div>
}
