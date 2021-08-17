import React from 'react'
import { 
    Box,
    Typography,
    Button,
    Card,
    CardContent,
    CardMedia,
    CardActions,
    Chip
 } from '@material-ui/core';
 import LocationonIcon from '@material-ui/icons/LocationOn'
 import PhoneIcon from '@material-ui/icons/Phone'
 import { Rating } from '@material-ui/lab/Rating';


 import useStyles from './styles'
import { Place } from '@material-ui/icons';


const PlaceDetails = ({place}) => {

    const classes = useStyles()

    console.log(place);
    return (
        <Card>
            <CardMedia
                style={{height: 350}}
                image={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                title={place.name}
            />
            <CardContent>
                <Typography gutterBottom variant='h5'>{place.name}</Typography>
            </CardContent>
        </Card>
    )
}

export default PlaceDetails
