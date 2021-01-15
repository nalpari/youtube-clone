import React from 'react';

class SearchHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <header>
        <img src="/images/logo.png" alt="logo" />
        <h1>Youtube</h1>
        <input type="search" placeholder="Search..." />
        <button type="submit">
          <img src="/image/search.png" alt="search" />
        </button>
      </header>
    );
  }
}

export default SearchHeader;
