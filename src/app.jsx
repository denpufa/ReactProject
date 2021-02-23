import './app.css'
import React, { createElement } from 'react'
import Card from './components/layout/cardPicture.jsx'
import Head from './components/layout/header.jsx'



function allCards()
{
    var list = []
    
    for(var i=0;i<3;i++){
    list.push(i)
    }
    return list.map(i =>
        <Card key={i}></Card>
        )
}


export default (args) =>
    <div className="app">
        <Head show="Welcome to gallery :)"></Head>
        <div className="cards">
            <h2>Here just picture valid</h2>
            {allCards()}
            

        </div>
    </div>
