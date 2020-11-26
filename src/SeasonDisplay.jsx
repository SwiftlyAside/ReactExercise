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

  render() {
    return (
      <div>
        Latitude: {this.state.lat}
        <br />
        Error: {this.state.errorMessage}
      </div>
    );
  }
}

export default SeasonDisplay;
