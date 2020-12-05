import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
const data=[ {

    datasets: [{
                county:"ספרד",
                data: [22,2710],
                backgroundColor: ['#344f69', '#dadcdb',],
        }],
            labels: [` כשירות `, ` בטיפול `],
    }]
 const z=()=>{
    return(
        <div>
            <App  data={data}/>

        </div>
    )
 }



ReactDOM.render(
    z(),
  document.getElementById('root')
);


