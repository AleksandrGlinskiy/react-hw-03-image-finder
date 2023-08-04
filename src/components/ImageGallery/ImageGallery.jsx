import { ImageGalleryItem } from './ImageGalleryItem';
import css from './ImageGallery.module.css';
import { Component } from 'react';
import { getImages } from '../../services/api';
import { Loader } from 'components/Loader/Loader';
import { Button } from 'components/Button/Button';

const STATUS = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export class ImageGallery extends Component {
  state = {
    currentPage: 1,
    galleryItems: [],
    status: STATUS.IDLE,
    error: null,
  };

  fetchGetImages = () => {
    getImages(this.props.searchText, this.state.currentPage)
      .then(data =>
        this.setState(prevState => ({
          galleryItems: [...prevState.galleryItems, ...data.hits],
          status: STATUS.RESOLVED,
          currentPage: prevState.currentPage + 1,
        }))
      )
      .catch(error => this.setState({ error, status: STATUS.REJECTED }));
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchText !== this.props.searchText) {
      this.setState({
        status: STATUS.PENDING,
        galleryItems: [],
        currentPage: this.state.currentPage,
      });

      setTimeout(() => {
        this.fetchGetImages();
      }, 1000);
    }
  }

  render() {
    const { galleryItems, status, error } = this.state;
    if (status === STATUS.IDLE) {
      return <h1>Please enter text</h1>;
    }
    if (status === STATUS.PENDING) {
      return <Loader />;
    }

    if (status === STATUS.REJECTED) {
      return <h1>{error.message}</h1>;
    }

    if (status === STATUS.RESOLVED) {
      return (
        <ul className={css.ImageGallery}>
          {galleryItems.map(el => {
            return <ImageGalleryItem key={el.id} el={el} tags={el.tags} />;
          })}
          <Button onClick={this.fetchGetImages} />
        </ul>
      );
    }
  }
}
