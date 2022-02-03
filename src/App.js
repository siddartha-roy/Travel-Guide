import React, {useState,useEffect} from 'react'
import { CssBaseline, Grid } from '@material-ui/core'
import {getPlacesData} from './api'
import Header from './components/Header/Header'
import List from './components/List/List'
import Map from './components/Map/Map'
import PlaceDetails from './components/PlaceDetails/PlaceDetails'

const App=()=>{
    const [places,setPlaces]=useState([])
    const [childClicked, setChildClicked]=useState(null)

    const [coordinates, setCoordinates]=useState({})
    const [bounds, setBounds]=useState({sw:0,ne:0})

    useEffect(()=>{
        navigator.geolocation.getCurrentPosition(({coords})=>{
            setCoordinates({lat:coords.latitude, lng:coords.longitude})
        })

    },[])

    useEffect(()=>{
        console.log(coordinates, bounds)
        getPlacesData(bounds.sw,bounds.ne)
         .then((data)=>{
            console.log(data)
            setPlaces(data)
        })

    },[coordinates,bounds])
    return(
        <>
           <CssBaseline/>
           <Header/>
           <Grid container spacing={3} style={{width:'100%'}}>
               <Grid item xs={12} md={4}>
                   <List places={places} childClicked={childClicked} />
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

            
        </>
    )
}

export default App