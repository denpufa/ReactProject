import React from 'react'
import Head from '../components/layout/header.jsx'
import '../components/layout/button.css'
import {useHistory} from "react-router-dom"
import axios from 'axios'



export default (args) => { 
    
    let history = useHistory()
    
    function firstClick(){
        history.push('/')
    }
    function secondClick(){
        history.push('/validate')
    }
     
    function enviarImagem(){
        var file = document.getElementById("myfile").files
        if (file.length > 0){
            var fileReader = new FileReader()
            fileReader.onload = function (event) {
                document.getElementById('imagemPrevia').setAttribute("src",event.target.result)
            }
            fileReader.readAsDataURL(file[0])
        }
        var picture = new FormData()
        picture.append("image",event.target.file[0])
        try {
        let response = axios.post('http://localhost:8080/',picture,{headers : {
            'Content-Type' : 'multipart/form-data;'
            }
        }
        )
        }catch(e){
                console.log("post")
        }
    }

    return <div>
                <Head show="Upload your picture"  firstButton="Home" secondButton="Validate" firstOn={firstClick} secondOn={secondClick}/>
                    <input className="button" type="file" id="myfile" onChange={enviarImagem} />
                    <img id='imagemPrevia'></img>
                    <h3>After you select the upload is done</h3>
            </div>


}
