import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'
const Head = () => {
  const dispatch=useDispatch()

  const toggleMenuHandler=()=>{ 
    dispatch(toggleMenu())
  }
  return (
    <div className='grid grid-flow-col p-4 mx-3 my-2 shadow-lg'>
  <div className='flex col-span-1 '>
    <img
    onClick={()=>toggleMenuHandler()}
    className='hamburger h-8 cursor-pointer'
    alt='menu'
     src="https://static.vecteezy.com/system/resources/previews/021/190/402/original/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"/>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/YouTube_Logo_%282013-2017%29.svg/1280px-YouTube_Logo_%282013-2017%29.svg.png"
      className='h-8 mx-2'/>
    </div>
    <div  className="col-span-10 px-10">
     <input type='text' className='w-1/2 border border-gray-400 rounded-l-full p-2 rounded-3xl'/> 
     <button className='border border-gray-400 p-2 rounded-r-full bg-gray-100 '>🔍</button>
    </div>

<div>
  <img alt='user' className='h-8 col-span-1'
  src='https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg'/>
</div>
    </div>
  )
}

export default Head