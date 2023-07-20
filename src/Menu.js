import React, { useState } from 'react';
import ModalMenu from './ModalMenu';
import './menu.css'


function Menu() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleImageSelect = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  return (
    <div>
      <img className='img-container' src='images/menu.jpg'></img>
      {selectedImage && (
        <ModalMenu selectedImage={selectedImage} closeModal={() => setShowModal(false)} />
      )}
    </div>
  );
}

export default Menu;
