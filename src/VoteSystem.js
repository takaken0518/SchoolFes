import React, { useState, useEffect } from 'react';
import './imagesAnime.css';
import ModalWindow from './ModalWindow';

function VoteSystem() {
  const initialVotes = { image1: 0, image2: 0 };
  const [votes, setVotes] = useState(() => {
    const storedVotes = localStorage.getItem('votes');
    return storedVotes ? JSON.parse(storedVotes) : initialVotes;
  });
  const [selectedImage, setSelectedImage] = useState(null);
  const [hasVoted, setHasVoted] = useState(() => {
    const storedHasVoted = localStorage.getItem('hasVoted');
    return storedHasVoted ? JSON.parse(storedHasVoted) : false;
  });
  const [showModal, setShowModal] = useState(false);

  const handleVote = () => {
    if (selectedImage && !hasVoted) {
      setVotes((prevVotes) => ({
        ...prevVotes,
        [selectedImage]: prevVotes[selectedImage] + 1,
      }));
      setHasVoted(true);
    }
  };

  const handleImageSelect = (image) => {
    if (!hasVoted) {
      setSelectedImage(image);
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
    setShowModal(false);
  };

  useEffect(() => {
    localStorage.setItem('votes', JSON.stringify(votes));
  }, [votes]);

  useEffect(() => {
    localStorage.setItem('hasVoted', JSON.stringify(hasVoted));
  }, [hasVoted]);

  return (
    <div>
      <img
        src="images/Cook.png"
        alt="Image 1"
        className="vote-image Cook"
        onClick={() => handleImageSelect('image1')}
      />
      {console.log('イケザキ投票数' + votes.image1)}

      <img
        src="images/Yummy.png"
        alt="Image 2"
        className="vote-image Yummy"
        onClick={() => handleImageSelect('image2')}
      />
      {console.log('Yummy投票数' + votes.image2)}

      <p></p>

      {showModal && (
        <ModalWindow
          selectedImage={selectedImage}
          votes={votes}
          handleVote={handleVote}
          handleCloseModal={handleCloseModal}
        />
      )}
      <p className="Vote_info">投票したい方の画像をタップ！！</p>
    </div>
  );
}

export default VoteSystem;
