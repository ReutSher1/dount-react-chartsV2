import React, { Component} from 'react';
import './Legend.css'
import formatNumber from'../formatNumber/number'

export default class Legend extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data.data        //data from index.js
        }
    }

    render() {
        let newObj=[]
        for(let el=0;el<this.state.data.datasets[0].data.length;el++){
            newObj.push({number:this.state.data.datasets[0].data[el],color:this.state.data.datasets[0].backgroundColor[el],name:this.state.data.labels[el]})
        }

     let listArr=newObj.map(i=>{
         let style={
             backgroundColor:i.color,
             width:2+'vw',
             height:2+'vw',
             marginLeft:1+"vw"


         }
        return( <li>
                <div className={'triangule'+i.name}></div>
                <div>{formatNumber(i.number)}</div>
                <div>:{i.name}</div>
                <div style={style}> </div>
                </li>
        )})



        return (
            <div  className='Legend'>
                <ul>
                    {listArr}
                    <li className='totLost'><div className='triangule'></div><div>{formatNumber(newObj[0].number+newObj[1].number)} :</div><div>טוטלוסט</div></li>
                </ul>


            </div>
        )
    }
}
