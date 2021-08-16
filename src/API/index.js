import axios from "axios";

const URL = "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary"


const options = {
  params: {
    bl_latitude: "11.847676",
    tr_latitude: "12.838442",
    bl_longitude: "109.095887",
    tr_longitude: "109.149359",
  },
  headers: {
    "x-rapidapi-key": "c8d9ad7008msha8b6c92b84a22bcp1a6b89jsn66946afd6df2",
    "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
  },
};




export const getPlacedData = async () => {
    try {
        //request
        const {data: {data}} = await axios.get(URL, options)

        return data
    } catch (error) {
        console.log(error);
    }
}