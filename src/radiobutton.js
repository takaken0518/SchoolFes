import React from 'react';
import imagesAnime from './imagesAnime.css'
import VoteCounter from './VoteCounter';

const RadioButton = () => {
  const [val,setVal] =React.useState();

  const handleChange = e => setVal(e.target.value);

  return (
    <div>

      <img src="images/Cook.png" class="Votebutton" onclick = {VoteCounter('cook')} />
      <img src="/images/Yummy.png" class="Votebutton" onclick = {VoteCounter('yammy')}/>

      <p>
      </p>

      <label>
        <input
          type="radio"
          value="cook"
          onChange={handleChange}
          checked={val === 'cook'}
        />
        コック池崎
      </label>



      <label>
        <input
          type="radio"
          value="yammy"
          onChange={handleChange}
          checked={val === 'yammy'}
        />
        ヤミー山亀
      </label>

      <p>選択値：{val}</p>

      {/*画面遷移するなら遷移先を設定する*/}
      <form action = 'done!' >
        <image></image>

      <button onClick={VoteCounter}>投票する!!</button>

      {/*<input type="submit" value="投票する！！"></input>*/}

      {/*Counterコンポーネントに投票結果を送信する*/}
      </form>

      cook:<p></p>
      yammy:


    </div>

  )
};

export default RadioButton;