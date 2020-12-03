import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={event => {
                this.setState({ term: event.target.value.toUpperCase() });
              }}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
