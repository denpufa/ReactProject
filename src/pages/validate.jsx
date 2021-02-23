import React, { createElement } from 'react'
import Card from '../components/layout/cardPicture.jsx'
import Head from '../components/layout/header.jsx'
import '../components/layout/button.css'




export default (args) => {
  
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
  
  
  
  
  
  return <div className="validate">
                <Head title="to validate a picture click on check box above,after click on finish button"></Head>
                <div className="cards">
                    <button className="Button">Finish</button>
                    {allCards()}
            

                </div>
        </div>
}