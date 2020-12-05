import React from 'react';
import './App.css';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { images: [] };
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
  }

  onSearchSubmit = async term => {
    const response = await unsplash.get('/search/photos', {
      params: {
        query: term,
      },
    });
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
    /*  constructor(props) {
      super(props);
      this.state = { lat: null, errorMessage: '' };
    }

    componentDidMount() {
      window.navigator.geolocation.getCurrentPosition(
        position => this.setState({ lat: position.coords.latitude }),
        positionError => this.setState({ errorMessage: positionError.message }),
      );
    }

    renderContent() {
      if (this.state.errorMessage && !this.state.lat) {
        return (
          <div>
            Error:
            {this.state.errorMessage}
          </div>
        );
      }
      if (!this.state.errorMessage && this.state.lat) {
        return <SeasonDisplay lat={this.state.lat} />;
      }
      return <Spinner message="Please accept location request." />;
    }

    render() {
      return <div className="border red">{this.renderContent()}</div>;
    } */
  }
}

export default App;
