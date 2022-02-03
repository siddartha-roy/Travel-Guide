import axios from 'axios'

const URL='https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'


  
  
  

export const getPlacesData=async(sw,ne)=>{
    try{
        const {data:{data}}=await axios.get(URL,{
    
          params: {
            bl_latitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
            
          },
          headers: {
            'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
            'x-rapidapi-key': 'c035736e0amsh032f32bdda55a22p139c11jsn5aa5295a578f'
          }
        });

        return data;

    }
    catch(error){
        console.log(error)

    }
}