import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
//import { BrowserRouter, Router } from 'react-router-dom'
import Cycle from '../components/cycles';
import NouveauCal from '../components/nouveauCal';


function bureau() {
    
        return (
            <div>
                <Router>
                    <Route path="/" exact component={NouveauCal}/>
                    <Route path="/modifier" exact component={Cycle}/>
                </Router>
                
            </div>
        );
    
}
export default bureau;
