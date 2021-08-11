import { GoogleMap } from "react-google-maps";

function MyMap() {
  return (
  <GoogleMap 
  defaultZoom={6}
  defaultCenter={{ lat: 55.378052, lng: -3.435973 }} 
  />
  )
}

export default MyMap;