import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Router} from '@reach/router';
import Menu from "../views/Menu"
import Home from "../views/Home"
import Catering from "../views/Catering"

class Header extends Component {
    render(){
    
        return(
        <>
       <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="/">The Shift</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
             </button>
             
             <div class="collapse navbar-collapse" id="navbarNav">
                
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="/">Home </a>
                    </li>
                    
                    <li class="nav-item">
                        <a class="nav-link" href="/menu">Menu</a>
                    </li>
                    
                    <li class="nav-item">
                        <a class="nav-link" href="/catering">Catering</a>
                    </li>
                    
            
                </ul>
            
            </div>
        </nav>

        <Router>
            
            <Home path ="/"/>
            <Menu path="/menu"/>
            <Catering path="/catering"/>
        </Router>
        
        </>
    );
    }
}

export default Header;