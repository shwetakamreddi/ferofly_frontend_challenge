import React ,{Component} from "react"
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
export class MapContainer extends Component {
  render() {
    return (
    <div className="container"
    style={{
    position:'relative',
    top:'10rem',
    width:'100%',
    height:'100vh',
    margin: '0 auto',
    textAlign: 'center',
    }}>
      <Map google={this.props.google} zoom={14}>
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        {/* <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow> */}
      </Map>
      </div>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyDFe-8MK9aX81EHki16lLpWzYwxGe7wvzo')
})(MapContainer)
