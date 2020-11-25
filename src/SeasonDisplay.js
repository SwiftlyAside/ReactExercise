import React from 'react';

class SeasonDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {lat: null};

        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({lat: position.coords.latitude})
            },
            positionError => console.log(positionError)
        );
    }

    render() {
        return (
            <div>Latitude: {this.state.lat}</div>
        );
    };
}

export default SeasonDisplay;
