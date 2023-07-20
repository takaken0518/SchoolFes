import './modal.css'

const ModalWindow = ({ selectedImage, votes, handleVote, handleCloseModal }) => {
  console.log("モーダルウィンドウ１表示中");

  const handleVoteButtonClick = () => {
    handleVote();
    handleCloseModal();
  };

  if(selectedImage === 'image1'){
    return (
    
      <div>
        <div id="overlay">
          <div id="content">
            <p>
              <button className='closebutton' onClick={handleCloseModal}>close</button>
            </p>
            <p><img src='images/Cook.png' className='cook_pasta'></img></p>

            <button className='VoteComplete' onClick={handleVoteButtonClick}>Vote</button>
  
          </div>
        </div>
      </div>
    );
  }


  if(selectedImage === 'image2'){
    return (
    
      <div>
        <div id="overlay">
          <div id="content">
            <p>
              <button className='closebutton' onClick={handleCloseModal}>close</button>
            </p>
            <p><img src='images/Yummy.png' className='yummy_pasta'></img></p>
            <p>Votes: {votes[selectedImage]}</p>
            <button className='VoteComplete' onClick={handleVoteButtonClick}>Vote</button>
  
          </div>
        </div>
      </div>
    );
  }

};

export default ModalWindow;