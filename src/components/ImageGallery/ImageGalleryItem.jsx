import { Modal } from 'components/Modal/Modal';
import React, { Component } from 'react';
import css from './ImageGallery.module.css';

export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { webformatURL, largeImageURL, tags } = this.props.el;
    return (
      <>
        <li className={css.ImageGalleryItem} onClick={this.toggleModal}>
          <img
            className={css.ImageGalleryImage}
            src={webformatURL}
            alt={tags}
          />
        </li>
        {this.state.showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={largeImageURL} alt={tags} />
          </Modal>
        )}
      </>
    );
  }
}
