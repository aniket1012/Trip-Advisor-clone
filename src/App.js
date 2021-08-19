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
  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState("");

  const [coordinates, setCoordinates] = useState({})
  const [bounds, setBounds] = useState({})

  const [filteredPlaces, setFilteredPlaces] = useState([])
  const [places, setPlaces] = useState([])

   const [autocomplete, setAutocomplete] = useState(null);
  const [childClicked, setChildClicked] = useState(null);
  const [isLoading, setisLoading] = useState(false)
 
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}}) => {
      setCoordinates({lat: latitude, lng: longitude})
    })
  }, [])

  useEffect(() => {
    const filteredPlaces = places.filter((place) =>  place.rating > rating)

    setFilteredPlaces(filteredPlaces)

  }, [rating])

  useEffect(() => {
    if(bounds.sw && bounds.ne) {
      setisLoading(true)
      
      getPlacesData(type, bounds.sw, bounds.ne)
        .then((data) => {
          setPlaces(data.filter((place) => place.name && place.num_reviews > 0));
          setFilteredPlaces([])
          setisLoading(false)
        })

    }
  }, [type, bounds])

  const onLoad = (autoC) => setAutocomplete(autoC);

  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();

    setCoordinates({ lat, lng });
  };


  return (
    <React.Fragment>
      <CssBaseline />
      <Header 
        onPlaceChanged={onPlaceChanged}
        onLoad={onLoad}
      />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List
            places={filteredPlaces.length ? filteredPlaces : places}
            childClicked={childClicked}
            isLoading={isLoading}
            type={type}
            setType={setType}
            rating={rating}
            setRating={setRating}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
            places={filteredPlaces.length ? filteredPlaces : places}
            setChildClicked={setChildClicked}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default App;
