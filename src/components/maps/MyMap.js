import { GoogleMap, Marker } from "react-google-maps";


function MyMap() {
  return (
  <GoogleMap 
  defaultZoom={6}
  defaultCenter={{ lat: 55.378052, lng: -3.435973 }} 
  >
  <Marker
        position={{ lat: 55.378052, lng: -3.435973 }}
        />
  </GoogleMap>  
  
  )
}

export default MyMap;