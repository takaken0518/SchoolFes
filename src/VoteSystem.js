import React, { useState } from 'react';
import imagesAnime from './imagesAnime.css'

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
        <h1>投票システム</h1>
        <div>
          <img
            src="images/Cook.png"
            class = "Votebutton Cook"
            alt="Image 1"
            onClick={() => handleImageSelect('image1')}
            className={`Votebutton Cook ${selectedImage === 'image1' ? 'selected' : ''}`}
          />


          <span>池崎投票数: {votes.image1}</span>
        </div>
        <div>
          <img
            src="images/Yummy.png"
            class = "Votebutton Yummy"
            alt="Image 2"
            onClick={() => handleImageSelect('image2')}
            className={`Votebutton Cook ${selectedImage === 'image2' ? 'selected' : ''}`}
            
          />

          <span>山亀投票数: {votes.image2}</span>
        </div>
        <button onClick={handleVote} disabled={!selectedImage || hasVoted}>
          投票する！！
        </button>
      </div>
    );
  }
  
  export default VoteSystem;