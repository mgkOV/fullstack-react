import React, { PureComponent } from 'react';
import debounce from 'lodash.debounce';
import StoreProvider from './StoreProvider';

class SearchBar extends PureComponent {
  state = {
    searchTerm: ''
  };

  doSearch = debounce(() => {
    this.props.store.setSearchTerm(this.state.searchTerm);
  }, 300);

  handleChange = evt => {
    this.setState(
      {
        searchTerm: evt.target.value
      },
      () => {
        this.doSearch();
      }
    );
  };

  render() {
    return (
      <input
        type="search"
        value={this.state.searchTerm}
        placeholder="Enter search term"
        onChange={this.handleChange}
      />
    );
  }
}

export default StoreProvider()(SearchBar);
