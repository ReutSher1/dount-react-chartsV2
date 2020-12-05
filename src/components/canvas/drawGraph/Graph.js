import React, { Component} from 'react';
import {elipce} from '../optionsCanvas/elipceCenter'
import { Doughnut } from 'react-chartjs-2'
import {line} from "../optionsCanvas/greenLineOnGraph"
import {optionsData} from '../optionsCanvas/optionChart'
import Chart from 'chart.js';
import {drawTriangle} from '../optionsCanvas/triangleCanvas'
import './Graph.css'

export default class Graph extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data.data        //data from index.js
        }
    }

    render() {

        let originalDoughnutDraw = Chart.controllers.doughnut.prototype.draw;
        Chart.helpers.extend(Chart.controllers.doughnut.prototype, {
            draw: function() {
                originalDoughnutDraw.apply(this, arguments);
                let chart = this.chart;
                let width = chart.chart.width,
                    height = chart.chart.height,
                    ctx = chart.chart.ctx;
                let fontSize = (height / 200);
                ctx.font = fontSize + "em sans-serif";
                ctx.textBaseline = "middle";
                let summ=Math.round(chart.config.data.datasets[0].data[0]*100/(chart.config.data.datasets[0].data[0]+chart.config.data.datasets[0].data[1]))
                line(ctx,height)
                ctx.fillStyle="#3e586d"
                ctx.font=(height / 70)+ "em sans-serif";//color text center
                drawTriangle(ctx,width/2.19,height/5.5,height/12,width/12)
                ctx.fillText(summ+'%', height/1.45, width/3.5);       //draw summ
                ctx.font=(height / 280)+ "em sans-serif";
                if (summ<=30){
                    ctx.fillStyle = "green";
                    ctx.strokeStyle = 'green';
                }if( summ>30 && summ<70){
                    ctx.fillStyle = "yellow";
                    ctx.strokeStyle = 'yellow';
                }
                if(summ>70){
                    ctx.fillStyle = "#d4644e";
                    ctx.strokeStyle = '#d4644e';
                }


                elipce(ctx, height/1.36, height/1.5, height/3.4, height/19, height/32, true);
                ctx.fillStyle = "white";
                ctx.fillText("כשרות",height/1.23,height/1.45)



            }

        });

        return (
            <div  className='canvas'>

                <Doughnut
                    data={this.state.data}
                    width={90}
                    height={50}
                    options={optionsData}
                />
            </div>
        )
    }
}