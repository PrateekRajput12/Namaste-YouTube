import React from 'react'
import Button from './Button'
const ButtonList = () => {
  const list=["All","Song","Gaming","Songs","Live","Soccer","Cricket","valentines"]
  return (
    <div className='flex'>
{list?.map((data)=>(<Button key={data} name={data}/>))}

    </div>
  )
}

export default ButtonList