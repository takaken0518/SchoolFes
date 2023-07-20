import React from 'react'
import './modalmenu.css'

const ModalMenu = ({ selectedImage, closeModal }) => {

  const handleCloseModal = () => {
    closeModal(); // 親コンポーネントに閉じることを通知
  }

  return (
    <div>
      <div id="overlay">
        <div id="content">
          <p>
            <button className='closebutton' on3Click={handleCloseModal}>close</button>
          </p>
          {selectedImage === 'image1' && (
            <p><img src='images/Cook.png' className='cook_pasta'></img></p>
          )}
          {selectedImage === 'image2' && (
            <p><img src='images/Yummy.png' className='yummy_pasta'></img></p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ModalMenu;
