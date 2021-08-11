import { GoogleMap, Marker } from "react-google-maps";


function MyMap() {
  return (
  <GoogleMap 
  defaultZoom={6}
  defaultCenter={{ lat: 55.378052, lng: -3.435973 }} 
  >
  <Marker
        position={{ lat: 55.378052, lng: -3.435973 }}
        icon={{
          url: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Map_marker_font_awesome.svg',
          scaledSize: new window.google.maps.Size(50, 50)
        }}
        />
  </GoogleMap>  
  
  )
}

export default MyMap;