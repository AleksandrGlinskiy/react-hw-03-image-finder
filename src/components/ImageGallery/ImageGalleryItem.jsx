import { Modal } from 'components/Modal/Modal';
import React, { Component } from 'react';
import css from './ImageGallery.module.css'

export class ImageGalleryItem extends Component {
  state = {
    showModal: false
  };

  toggleModal =() => {
    this.setState(({showModal}) => ({
      showModal: !showModal,
    }));
  }

  render() {
    return (
      <>
        <li className={css.ImageGalleryItem} onClick={this.toggleModal}>
          <img className={css.ImageGalleryImage} src={this.props.el.webformatURL} alt="" />
        </li>
        {this.state.showModal && (<Modal onClose={this.toggleModal} >
          <img src={this.props.el.largeImageURL} alt=""   />
          </Modal>)}
      </>
    );
  }
}
