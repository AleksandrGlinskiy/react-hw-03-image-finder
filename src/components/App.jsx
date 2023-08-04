import { Component } from 'react';
import { getImages } from 'services/api';
import css from './App.module.css';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { Loader } from './Loader/Loader';

export class App extends Component {
  state = {
    currentPage: 1,
    searchText: '',
    galleryItems: [],
    loading: false,
  };

  handleSearchbar = searchText => {
    this.setState({ searchText, currentPage: 1 });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchText !== this.state.searchText) {
      this.setState({ loading: true });
      getImages(this.state.searchText, this.state.currentPage)
        .then(res => res.json())
        .then(data => this.setState({ galleryItems: data.hits }))
        .finally(() => this.setState({ loading: false }));
    }
  }

  render() {
    return (
      <div className={css.App}>
        {this.state.loading && (
          <Loader/>
        )}
        <Searchbar onSubmit={this.handleSearchbar} />
        <ImageGallery galleryItems={this.state.galleryItems} />
      </div>
    );
  }
}
