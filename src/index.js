import './index.css'
import React from 'react'
import ReactDOOM from 'react-dom'
import App from './app.jsx'
import { BrowserRouter as Router, Route, Switch, BrowserRouter } from 'react-router-dom'
import Upload from './pages/upload.jsx'
import Validate from './pages/validate'


ReactDOOM.render (
    <BrowserRouter> 
        <Switch>
            <Route exact path="/" component={App}/>
            <Route  exact path="/upload" component={Upload}/>
            <Route  exact path="/validate" component={Validate}/>
        </Switch>
    </BrowserRouter>
        ,
    document.getElementById('root')

)