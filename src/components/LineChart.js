import React from 'react'
import {Line} from 'react-chartjs-2'
const LineChart=()=>{
    
    return(
     <div className="chart">
        <h1>Line Chart</h1>
        <Line
        data={{
            labels: ['a','b','c','d','e','f','g'],
            datasets: [{
              label: 'My First Dataset',
              data: [65, 59, 80, 81, 56, 55, 40],
              fill: false,
              borderColor: 'rgb(75, 192, 192)',
              tension: 0.1
            }]
          }}
        />
    </div>
    )
}

export default LineChart;   