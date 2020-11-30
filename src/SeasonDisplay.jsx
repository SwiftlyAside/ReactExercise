import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
  summer: {
    text: "Let's hit the beach!",
    iconName: 'sun',
  },
  winter: {
    text: 'Burr, it is cold!',
    iconName: 'snowflake',
  },
};

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
    const { text, iconName } = seasonConfig[season];

    if (!this.state.errorMessage && this.state.lat) {
      return (
        <div className={`season-display ${season}`}>
          <i className={`icon-left massive ${iconName} icon`} />
          <h1>{text}</h1>
          <i className={`icon-right massive ${iconName} icon`} />
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
