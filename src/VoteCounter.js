import React from 'react'

let cook = 0;
let yammy = 0;


const VoteCounter = (vote) =>
{
    if (vote == 'cook')
    {
      cook += 1;
    }
  
    else
    {
      yammy += 1;
    }

}

export default VoteCounter;