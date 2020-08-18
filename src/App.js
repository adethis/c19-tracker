import React, { Component } from 'react';
import { Cards, Charts, CountryPicker } from './components';
import { fetchData } from './api';

class App extends Component {
  state = {
    data: {},
  }

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }

  render() {
    const { data } = this.state;
    return (
      <React.Fragment>
        <div className="container mx-auto px-4 p-5">
          <Cards data={ data } />
          <CountryPicker />
          <Charts />
        </div>
      </React.Fragment>
    )
  }
}

export default App;