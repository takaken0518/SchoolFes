import React from 'react';
import Counter from './Counter';

const RadioButton = () => {
  const [val,setVal] =React.useState();

  const handleChange = e => setVal(e.target.value);

  return (
    <div>

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
      <form attribute >
      <input type="submit" value="投票する！！"></input>
      </form>

      <Counter/>

    </div>

  )
};

export default RadioButton;