import React from 'react'


let cook = 0;
let yammy = 0;

//投票された値受け取って集計する
function Totalling(voted)
{

  console.log(voted)

  if (voted == 'cook')
  {
    cook += 1;
  }

  else
  {
    yammy += 1;
  }
  return cook;
}


const Counter = (vote) => {
  return (
    <div>

      <p>
      Counter.{vote.value}
      </p>

      cook:{Totalling(vote.value)}
    </div>
  )
}

export default Counter