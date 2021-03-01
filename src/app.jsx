import './app.css'
import React, { createElement, useState, useEffect } from 'react'
import Card from './components/layout/cardPicture.jsx'
import Head from './components/layout/header.jsx'
import { useHistory } from 'react-router-dom'

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
              <Card key={i.link} src={i.link}></Card>)}
                </>
            );
}
export default (args) =>
    <div className="app">
        <Head show="Welcome to gallery :)"></Head>
        <div className="cards">
            <h2>Here just picture valid</h2>
            {allCards()}
            

        </div>
    </div>
