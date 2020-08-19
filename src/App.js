import React, { Component } from 'react';
import { Cards, Charts, CountryPicker } from './components';
import { fetchData } from './api';

class App extends Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    
    this.setState({ data: fetchedData, country: country });
  }

  render() {
    const { data, country } = this.state;
    return (
      <React.Fragment>
        <div className="container mx-auto px-4 p-5 pt-10">
          <Cards data={ data } />
          <CountryPicker handleCountryChange={ this.handleCountryChange } />
          <Charts data={ data } country={ country } />
        </div>
      </React.Fragment>
    )
  }
}

export default App;