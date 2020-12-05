import React, { Component} from 'react';
import './style.css'
import Graph from './components/canvas/drawGraph/Graph'
import Legend from "./components/legendCanvas/Legend";
import {TopMenu} from './components/TopMenu/TopMenu'

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data[0]        //data from index.js
        }
    }

    render() {
        return (
           <div  className="Context">
               <TopMenu data={this.state}/>
               <div  className='contextBody'>
                   <Legend  data={this.state} />
                   <Graph  data={this.state}/>
               </div>


           </div>
        )
    }
}

