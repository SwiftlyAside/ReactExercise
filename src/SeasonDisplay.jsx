import React from 'react';

class SeasonDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lat: null, errorMessage: '' };

    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ lat: position.coords.latitude });
      },
      positionError => {
        this.setState({ errorMessage: positionError.message });
      },
    );
  }

  componentDidMount() {
    console.log('Rendered');
  }

  render() {
    if (!this.state.errorMessage && this.state.lat) {
      return (
        <div>
          Latitude:
          {this.state.lat}
        </div>
      );
    }
    if (this.state.errorMessage && !this.state.lat) {
      return (
        <div>
          Error:
          {this.state.errorMessage}
        </div>
      );
    }
    return <div>Loading...</div>;
  }
}

export default SeasonDisplay;
