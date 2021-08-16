import React, {useState, useEffect} from "react";
import { 
  CssBaseline,
  Grid,

 } from "@material-ui/core";

import Header from "./Components/Header/Header";
import List from "./Components/List/List";
import Map from "./Components/Map/Map";

import { getPlacedData } from "./API";


const App = () => {

  const [places, setPlaces] = useState([])
  const [coordinates, setCoordinates] = useState({})
  const [bounds, setBounds] = useState(null)

  useEffect(() => {
    getPlacedData()
    .then((data) => {
      console.log(data);
      setPlaces(data)
    })
  }, [])


  return (
    <React.Fragment>
      <CssBaseline/>
      <Header/>
      <Grid container spacing={3} style={{width: '100%'}}>
        <Grid item xs={12} md={4}>
          <List/>
        </Grid>
        <Grid item xs={12} md={8}>
          <Map 
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
          />
        </Grid>
      </Grid>
    
    </React.Fragment>
  );
}

export default App;
