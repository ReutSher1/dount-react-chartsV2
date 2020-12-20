import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
const data = {
  labels: [` כשירות `, ` בטיפול `],
  datasets: [{
    county: "ספרד",
    data: [3000, 2710],
    backgroundColor: ['#344f69', '#dadcdb'],
  }],
}




ReactDOM.render(
  <App data={data} />,
  document.getElementById('root')
);


