import { withScriptjs, withGoogleMap } from "react-google-maps";
import MyMap from './components/maps/MyMap'
const WrappedMap = withScriptjs(withGoogleMap(MyMap));
require('dotenv').config();

function App() {
  return (
    <div className="App">
      
      <div className="maps-container" 
        style={{
        width: '80vw', 
        height: '80vh',
        borderStyle: 'solid'}}>

        <WrappedMap 
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${
          process.env.REACT_APP_MAPS_API_KEY
        }`} 
        loadingElement={<div style={{ height: "100%" }} />}
        containerElement={<div style={{ height: "100%" }} />}
        mapElement={<div style={{ height: "100%" }} />}
        />
        </div>

    </div>
  );
}

export default App;
