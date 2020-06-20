import React, { useState, useEffect }from 'react';
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';
import styles from './Chart.module.css';


const Chart = () => {
  const [ dailyData, setDailyData ] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
        setDailyData( await fetchDailyData());
    }  

    
        fetchAPI();  
        //console.log(dailyData)
    
        
  });
  //const hh = ( dailyData ? (console.log(dailyData.length)): null);
  const lineChart = (
       dailyData
     ? (
        <Line
         data = {{
             labels: dailyData.map(({ date }) => date ),
             dataSets: [ { 
                 data: dailyData.map(({ confirmed }) => confirmed ),
                 label: 'infected',
                 borderColor: '#3333ff',
                 fill: true,
             }, {
                 data: dailyData.map(({ deaths }) => deaths ),
                 label: 'deaths',
                 borderColor: 'red',
                 backgroundColor: 'rgba( 255, 0, 0, 0.5)',
                 fill: true,
             } ],

        }} 
       />
       //     console.log(dailyData.length)
       ) : null
   );

    return(
        <div className = {styles.container}>
           { lineChart }
           </div>
    )
}

export default Chart;