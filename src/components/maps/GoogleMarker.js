import { Marker } from "react-google-maps";

const GoogleMarker = ({position}) => {
  return(
    <Marker>
      position = {{position}}
    </Marker>
  )
}

export default GoogleMarker
