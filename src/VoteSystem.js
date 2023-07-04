import React, { useState } from 'react';
import imagesAnime from './imagesAnime.css'
import main from './main.css'

function VoteSystem() {
    const [votes, setVotes] = useState({ image1: 0, image2: 0 });
    const [selectedImage, setSelectedImage] = useState(null);
    const [hasVoted, setHasVoted] = useState(false);
  
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
      }
    };
  
    return (
      <div>



        <div>
          <div
            className={`Votebutton ${selectedImage === 'image1' ? 'selected' : ''}`}
            onClick={() => handleImageSelect('image1')}
          >
            <img src="images/Cook.png" alt="Image 1" className="vote-image" />
            {selectedImage === 'image1' && <div className="frame-animation"></div>}
          </div>
          <span>池崎投票数: {votes.image1}</span>
        </div>
        <div>
          <div
            className={`Votebutton ${selectedImage === 'image2' ? 'selected' : ''}`}
            onClick={() => handleImageSelect('image2')}
          >
            <img src="images/Yummy.png" alt="Image 2" className="vote-image" />
            {selectedImage === 'image2' && <div className="frame-animation"></div>}
          </div>
          <span>山亀投票数: {votes.image2}</span>
        </div>
        <button onClick={handleVote} disabled={!selectedImage || hasVoted}>
          投票する!!
        </button>
      </div>
    );
  }
  
  export default VoteSystem;