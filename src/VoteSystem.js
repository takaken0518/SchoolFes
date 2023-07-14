import React, { useState } from 'react';
import  './imagesAnime.css'


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
            className={`Votebutton Cook ${selectedImage === 'image1' ? 'selected' : ''}`}
            onClick={() => handleImageSelect('image1')}
          >
            <img src="images/Cook.png" alt="Image 1" className="vote-image Cook" />
            {selectedImage === 'image1' && <div className="frame-animation"></div>}
          </div>
          {console.log("イケザキ投票数" + votes.image1)}
        </div>
        <div>
          <div
            className={`Votebutton Yummy ${selectedImage === 'image2' ? 'selected' : ''}`}
            onClick={() => handleImageSelect('image2')}
          >
            <img src="images/Yummy.png" alt="Image 2" className="vote-image Yummy" />
            {selectedImage === 'image2' && <div className="frame-animation"></div>}
          </div>

          {console.log("Yummy投票数" + votes.image2)}

        </div>


        <button class="VoteComplete" onClick={handleVote} disabled={!selectedImage || hasVoted}>

        <span>
        投票する!!
        </span>

        </button>
      </div>
    );
  }
  
  export default VoteSystem;