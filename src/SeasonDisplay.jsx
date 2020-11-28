import React from 'react';

class SeasonDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lat: null, errorMessage: '' };
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      positionError => this.setState({ errorMessage: positionError.message }),
    );
  }

  render() {
    const getSeason = (lat, month) => {
      if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
      }
      return lat > 0 ? 'winter' : 'summer';
    };

    const season = getSeason(this.state.lat, new Date().getMonth());
    const text =
      season === 'winter' ? 'Burr, it is chilly.' : "Let's hit the beach!";

    if (!this.state.errorMessage && this.state.lat) {
      return <div>{text}</div>;
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
