import React from "react";
import { withGoogleMap, GoogleMap } from "react-google-maps";

const Map = withGoogleMap(() => (
  <GoogleMap defaultZoom={8} defaultCenter={{ lat: 40.0, lng: -122.4194 }} />
));

export default Map;
