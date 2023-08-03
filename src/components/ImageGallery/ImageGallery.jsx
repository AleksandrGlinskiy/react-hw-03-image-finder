import { ImageGalleryItem } from './ImageGalleryItem';
import css from './ImageGallery.module.css'

export const ImageGallery = ({ galleryItems }) => {
  return (
    <ul className={css.ImageGallery}>
      {galleryItems.map(el => {
        return <ImageGalleryItem key={el.id} el={el} />;
      })}
    </ul>
  );
};
