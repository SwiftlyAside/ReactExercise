import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit = event => {
    event.preventDefault();
    console.log(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={event =>
                this.setState({ term: event.target.value.toUpperCase() })
              }
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
