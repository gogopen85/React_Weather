import React from 'react'
import { GoogleMap } from 'react-google-maps';

export default (props) => {
  return (
    <GoogleMap defaultZonn={12} defaultCenter={{lat: props.lat, lng: props.lon}}  />
  )
}