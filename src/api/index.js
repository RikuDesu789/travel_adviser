import axios from 'axios';

const URL = 'https://documenu.p.rapidapi.com/restaurants/geobbox'

export const getPlacesData = async(sw,ne) => {
    try{
        const {data : { data }} = await axios.get(URL, {
          params: {
            top_left: '40.7636412,-74.016265',
            bottom_right: '40.706929,-73.96682',
            size: '20',
          },
          headers: {
            'x-api-key': process.env.REACT_APP_REST_API_KEY1,
            'x-rapidapi-host': 'documenu.p.rapidapi.com',
            'x-rapidapi-key': process.env.REACT_APP_REST_API_KEY2
          }
        });
        return data;
    }
    catch(error){
        console.log(error)
    }
}