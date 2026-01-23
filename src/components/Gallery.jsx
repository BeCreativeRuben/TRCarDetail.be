import { useState } from 'react'
import auto1 from '../assets/images/gallery/auto1.jpg'
import auto1_1 from '../assets/images/gallery/auto1-1.jpg'
import auto2_1 from '../assets/images/gallery/auto2-1.jpg'
import auto3_1 from '../assets/images/gallery/auto3-1.jpg'
import auto4_1 from '../assets/images/gallery/auto4-1.jpg'
import auto5_1 from '../assets/images/gallery/auto5-1.jpg'
import './Gallery.css'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  const images = [
    auto1,
    auto1_1,
    auto2_1,
    auto3_1,
    auto4_1,
    auto5_1
  ]

  const openLightbox = (image) => {
    setSelectedImage(image)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = ''
  }

  const navigateImage = (direction) => {
    const currentIndex = images.indexOf(selectedImage)
    let newIndex
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % images.length
    } else {
      newIndex = (currentIndex - 1 + images.length) % images.length
    }
    
    setSelectedImage(images[newIndex])
  }

  return (
    <>
      <section className="gallery" id="gallery">
        <h2 className="section-title">Ons Werk</h2>
        <p className="section-subtitle">
          Bekijk de geweldige transformaties die we hebben bereikt voor onze klanten.
        </p>

        <div className="gallery-grid">
          {images.map((image, index) => (
            <div
              key={index}
              className="gallery-item"
              onClick={() => openLightbox(image)}
            >
              <img
                src={image}
                alt={`Auto detailing ${index + 1}`}
                className="gallery-image"
                loading="lazy"
              />
              <div className="gallery-overlay">
                <span className="gallery-icon">🔍</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <button
            className="lightbox-close"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            ×
          </button>
          <button
            className="lightbox-nav lightbox-prev"
            onClick={(e) => {
              e.stopPropagation()
              navigateImage('prev')
            }}
            aria-label="Previous image"
          >
            ‹
          </button>
          <img
            src={selectedImage}
            alt="Gallery"
            className="lightbox-image"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="lightbox-nav lightbox-next"
            onClick={(e) => {
              e.stopPropagation()
              navigateImage('next')
            }}
            aria-label="Next image"
          >
            ›
          </button>
        </div>
      )}
    </>
  )
}

export default Gallery
