import { Component } from 'react';
import css from './App.module.css';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';

export class App extends Component {
  state = {
    searchText: '',
    currentPage: 1
    
  };

  handleSearchbar = searchText => {
    this.setState({ searchText });
  };

  render() {
    return (
      <div className={css.App}>
        <Searchbar onSubmit={this.handleSearchbar} />
        <ImageGallery searchText={this.state.searchText} currentPage={this.state.currentPage} />
      </div>
    );
  }
}
