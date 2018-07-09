import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Map from './components/Map.js';
import SearchPlaces from './components/SearchPlaces.js';
import * as MapsDataAPI from './MapsDataAPI.js';

class App extends Component {
  state = {
    locations: [],
    originalLocations: []
  }


  componentDidMount() {
    MapsDataAPI.getLocationsAll().then((locations) => {
      console.log(locations);
      this.setState({locations})
      this.setState({originalLocations: locations})
    })
  }

  updateLocations = (searchResultArr, query) => {
    if(query) {
      this.setState((state) => ({
        locations: searchResultArr
      }))
    }else {
      this.setState({locations: this.state.originalLocations})
    }
  }

  render() {
    return (
      <div className="main">
      <header className="App-header">
          
      </header>
      <div id="main-container">   
         <div id="places-list">
          <SearchPlaces locations= {this.state.locations} onUserDidSearch= {this.updateLocations}/>
        </div>
        <div id="map-container">
          <Map locations={this.state.locations}  />
        </div>      
      </div>
      </div>
      
    );
  }
}

export default App;
