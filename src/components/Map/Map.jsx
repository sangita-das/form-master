import { googleAPIKey } from "./googleAPIKey";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div style={{color: 'red'}}>{text}</div>;
const Map = () => {
    const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

    return (
        <div>
              <div style={{ height: '500px', width: '500px' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: googleAPIKey }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
        </div>
    );
};

export default Map;