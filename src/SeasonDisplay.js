import React from 'react';

class SeasonDisplay extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        window.navigator.geolocation.getCurrentPosition(
            position => console.log(position),
            positionError => console.log(positionError)
        );
        return (
            <div>
                <div>Season Display</div>
                <div>Latitude:</div>
            </div>
        );
    };
}

export default SeasonDisplay;
