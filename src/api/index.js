import axios from 'axios';

const Url = 'http://covid19.mathdro.id/api';

export const fetchData = async () => {
    
    try {
       const { data: { confirmed, recovered, deaths, lastUpdate }} = await axios.get(Url) ;
       
       return { confirmed, recovered, deaths, lastUpdate };

 
  } catch(error) {

  }
}


export const fetchDailyData = async () => {
    
  try {
     const { data } = await axios.get('${Url}/daily');
     
     const modifiedData = data.map((dailyData) => ({
       confirmed: dailyData.confirmed.total,
       deaths: dailyData.deaths.total,
       date: dailyData.date.total,
     }));
    // console.log(data);
     return modifiedData;
    


} catch(error) {

}
}


