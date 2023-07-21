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
    <div className="votesystem-container">
      <div class="title"> 
        <p id="title_text">Vote / 投票</p>
        <p id="description_text">貴方が美味しいと思った料理人に投票を...</p>
      </div>
      <div class="modal_button">
        <img
          src="images/Cook.png"
          alt="Image 1"
          className="vote-image Cook"
          onClick={() => {handleImageSelect('image1');postJson(1)}}
        />
        {console.log('イケザキ投票数' + votes.image1)}

        <img
          src="images/Yummy.png"
          alt="Image 2"
          className="vote-image Yummy"
          onClick={() => {handleImageSelect('image2');postJson(0);}}
        />
        {console.log('Yummy投票数' + votes.image2)}
      </div>
      

      <p></p>

      {showModal && (
        <ModalWindow
          selectedImage={selectedImage}
          votes={votes}
          handleVote={handleVote}
          handleCloseModal={handleCloseModal}
        />
      )}
      <p className="Vote_info">投票したい方の画像をタップ！！
        <br/>
        ※投票は1度だけになります
      </p>
    </div>
  );
}

async function postJson(num) {
  let text = String(num);
  const url = 'https://script.google.com/macros/s/AKfycbyGArLU5iNDLTkp7wOKPxeGiQpvQCq_xk4x3yLRnmaLdOlzQ1nzp345rx6YtxNp_lP8JQ/exec?select=' + text;
  console.log("start");
      const response = await fetch(url, {
          //method: 'POST',
          mode: 'cors',
        
          //body: data
      }).then((response) => {
          if(!response.ok) {
              console.log('error!');
          } 
          console.log('ok!');
          return response.json();
      }).then((data)  => {
          console.log(data);
      }).catch((error) => {
          console.log(error);
      });
  console.log("end");
}

export default VoteSystem;
