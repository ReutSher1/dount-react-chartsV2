import './TopMenu.css'
import formatNumber from "../formatNumber/number";
import React from "react";


export const TopMenu = (props) => {

    return (

        <div className="main">
            <a href="#" className="previous round">&#8249;</a>
            <div className='number'>
                <div className={'triangule'}></div>
                {formatNumber(props.data.datasets[0].data[0] + props.data.datasets[0].data[1])}
            </div>
            <div className='Country'>
                {props.data.datasets[0].county}
            </div>
        </div>
    )
}