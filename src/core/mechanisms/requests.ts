import { keys } from '../utils/constants';
import { instance } from '../utils/api';
import { IDataWeather } from '../utils/types';

export const getDataWeather = async (city:String) => {
  let formatWeather:IDataWeather = {
    temperatura: 0, 
    cidade: '', 
    ur: 0 
  }
  const params = {
    access_key: keys.API_KEY,
    query: city
  }
  console.log("🚀 ~ file: requests.ts ~ line 17 ~ getDataWeather ~ params", params.query)
  try{
    
    const response = await instance.get('http://api.weatherstack.com/current', { params });
    console.log("🚀 ~ file: requests.ts ~ line 19 ~ getDataWeather ~ response", response)
  }catch(e){
    console.log(e)
  }
  console.log('api:', formatWeather)
  return formatWeather;
}