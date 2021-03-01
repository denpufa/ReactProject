import React, { createElement, useState, useEffect } from 'react'
import Card from '../components/layout/cardPicture.jsx'
import Head from '../components/layout/header.jsx'
import '../components/layout/button.css'
import { useHistory } from 'react-router-dom'
import axios from 'axios'


export default (args) => {
    let history = useHistory()    
    function AllCards() {    
        const [date, setDate] = useState([])
        
        useEffect(()=>{
            
            let response = axios.get('http://localhost:8080/img/false')
            response.then((dados) => {
                console.log(dados.data[0])
                    setDate(dados.data[0])
            })           
        },[])
        return ( <> 
                {date.map(i => 
                <>
                <Card key={i.link} src={i.link}></Card>
                <input type="checkbox"  onChange={()=>{
                  let link = i.link
                  let response = axios.post(`http://localhost:8080/valid/${link}`)
                }}/>
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

   return <div className="validate">
        <Head show="to validate a picture click on check box above" firstOn={firstClick} firstButton="Home" secondButton="upload" secondOn={secondClick}></Head>
        <div className="cards">
                {AllCards()}
        </div>
    </div>
}
