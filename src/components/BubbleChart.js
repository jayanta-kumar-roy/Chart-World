import React from 'react'
import {Bubble} from 'react-chartjs-2'
import './BubbleChart.css'

const BubbleChart = () => {
    const data = {
        datasets: [{
          label: 'First Dataset',
          data: [{
            x: 20,
            y: 30,
            r: 15
          }, {
            x: 40,
            y: 10,
            r: 10
          },
          {
            x: 30,
            y: 20,
            r: 10
          }
        ],
          backgroundColor: 'rgb(255, 99, 132)'
        }]
      };
    return (
        <div className="chart">
            <h1>Bubble Chart</h1>
            <Bubble
                data={data}
            />
        </div>
    )
}

export default BubbleChart
