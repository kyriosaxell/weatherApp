import React, { Component } from 'react';
import LocationList from './components/LocationList';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';

const cities =[
  'Mexico, mx',
  'Bogota, col',
  'Mexico, mx',
  'Madrid, es',
  'Buenos Aires, ar'
];

class App extends Component {
  handleSelectedLocation = city => {
    console.log('handleSelectionLocation');
  }

  render() {
    return (

      <MuiThemeProvider>
      <div className="App">
        <LocationList cities ={cities}
        onSelectedLocation={this.handleSelectedLocation}>
        </LocationList>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
