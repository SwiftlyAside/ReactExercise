import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class SearchBar extends React.Component {
  // eslint-disable-next-line class-methods-use-this
  onInputChange(event) {
    console.log(event.target.value);
  }

  // eslint-disable-next-line class-methods-use-this
  onInputClick() {
    console.log('Input was clicked');
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
              onClick={this.onInputClick}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
