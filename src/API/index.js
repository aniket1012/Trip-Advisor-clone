import axios from "axios";

const URL = "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary"







export const getPlacesData = async (sw, ne) => {
    try {
        //request
        const {data: {data}} = await axios.get(URL, {
  params: {
    bl_latitude:sw.lat,
    tr_latitude:ne.lat,
    bl_longitude: sw.lng,
    tr_longitude: ne.lng,
  },
  headers: {
    "x-rapidapi-key": "c8d9ad7008msha8b6c92b84a22bcp1a6b89jsn66946afd6df2",
    "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
  },
})

        return data
    } catch (error) {
        console.log(error);
    }
}