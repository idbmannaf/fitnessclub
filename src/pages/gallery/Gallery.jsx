import OtherHeader from '../../component/OtherHeader';
import HeaderImage from '../../images/header_bg_3.jpg';
import './gallery.css';
// import {images} from '../../data';

const Gallery = () => {
  const galleryLength = 15;
  const images = [];
  for (let i = 1; i < galleryLength; i++) {
    images.push(require(`../../images/gallery${i}.jpg`));

  }

  return (
    <>
      <OtherHeader title="Our Gallery" image={HeaderImage} >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim optio ipsa quis vero consectetur ea!
      </OtherHeader>
      <section className="gallery">
        <div className="container gallery_container">
          {
            images.map((image, index) => {
              return (
                <article key={index}>
                  <img src={image} alt={`Gallery Image ${index + 1}`} />
                </article>
              )
            })
          }
        </div>
      </section>
    </>
  )
}

export default Gallery