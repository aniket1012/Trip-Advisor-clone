import React, {useState, useEffect} from "react";
import { 
  CssBaseline,
  Grid,

 } from "@material-ui/core";

import Header from "./Components/Header/Header";
import List from "./Components/List/List";
import Map from "./Components/Map/Map";

import { getPlacesData } from "./API";


const App = () => {

  const [places, setPlaces] = useState([])
  const [childClicked, setChildClicked] = useState(null);

  const [coordinates, setCoordinates] = useState({})
  const [bounds, setBounds] = useState({})

  const [isLoading, setisLoading] = useState(false)
 
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}}) => {
      setCoordinates({lat: latitude, lng: longitude})
    })
  }, [])

  useEffect(() => {
    setisLoading(true)
    getPlacesData(bounds.sw, bounds.ne)
      .then((data) => {
        setPlaces(data)
        setisLoading(false)
      })
   
  }, [coordinates, bounds])


  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List 
            places={places} 
            childClicked={childClicked} 
            isLoading={isLoading}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
            places={places}
            setChildClicked={setChildClicked}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default App;
