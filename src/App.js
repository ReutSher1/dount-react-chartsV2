import React, { useState } from 'react';
import './style.css'
import Graph from './components/canvas/drawGraph/Graph'
import Legend from "./components/legendCanvas/Legend";
import {TopMenu} from './components/TopMenu/TopMenu'

export default function App(props){

    const [count, setCount] = useState(props.data[0]);
    return(
        <div  className="Context">
            <TopMenu data={count}/>
            <div  className='contextBody'>
                <Legend  data={count} />
                <Graph  data={count}/>
                
            </div>


        </div>
    )
}
