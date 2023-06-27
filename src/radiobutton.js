import React from 'react';
import Counter from './Counter';

const RadioButton = () => {
  const [val,setVal] =React.useState();

  const handleChange = e => setVal(e.target.value);

  return (
    <div>

      <img src="logo192.png" />
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

      <img src="/images/Cook.jpg" />
      <p>

      </p>

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

      <button onClick={Counter}>投票する!!</button>

      {/*<input type="submit" value="投票する！！"></input>*/}

      {/*Counterコンポーネントに投票結果を送信する*/}
      <Counter value = {val}/>
      </form>



    </div>

  )
};

export default RadioButton;