import { useEffect } from 'react';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

function Gallery() {
  useEffect(() => {
    const gallery = new SimpleLightbox('.gallery a');
    return () => gallery.destroy();
  }, []);

  return (
    <div className="gallery">
      <a href="https://i.ibb.co/CHLBZnp/gal2323.jpg">
        <img src="https://i.ibb.co/CHLBZnp/gal2323.jpg" alt="Image 1" />
      </a>
      <a href="https://i.ibb.co/CHLBZnp/gal2323.jpg">
        <img src="https://i.ibb.co/CHLBZnp/gal2323.jpg" alt="Image 2" />
      </a>
      <a href="https://i.ibb.co/CHLBZnp/gal2323.jpg">
        <img src="https://i.ibb.co/CHLBZnp/gal2323.jpg" alt="Image 3" />
      </a>
    </div>
  );
}

export default Gallery;