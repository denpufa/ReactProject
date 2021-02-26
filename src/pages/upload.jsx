import React from 'react'
import Head from '../components/layout/header.jsx'
import '../components/layout/button.css'
import {useHistory} from "react-router-dom"
import axios from 'axios'



export default (args) => { 
    
    let history = useHistory()
    let isValid = 'false'
    
    function firstClick(){
        history.push('/')
    }
    function secondClick(){
        history.push('/validate')
    }
    
    function criarKey() {
        var resultado = '';
        var caracs       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var caracs_len = caracs.length;
        for ( var i = 0; i < 5; i++ ) {
           resultado += caracs.charAt(Math.floor(Math.random() * caracs_len));
        }
        return resultado;
     }
     function setTrue(){
        if(isValid == 'false'){    
            isValid = 'true'
        }    
        else{
            isValid = 'false'
        }
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
        picture.append("image",picture)
        let chave = criarKey(10)
        try {
        let response = axios.post(`http://localhost:8080/${chave}/${isValid}`,picture,{headers : {
            'Content-Type' : 'multipart/form-data'
            }
        }
        )
        }catch(e){
                console.log("post")
        }
    }

    return <div>
                <Head show="Upload your picture"  firstButton="Home" secondButton="Validate" firstOn={firstClick} secondOn={secondClick}/>
                <form >
                    <input className="button" type="file" id="myfile" onChange={enviarImagem} />
                    <img id='imagemPrevia'></img>
                    <label>do you want upload a picture valid? check this checkbox</label>
                    <input type="checkbox" onChange={setTrue}></input>

                    <h3>After you select the upload is done</h3>
                </form>
            </div>


}
