import React, { useEffect, useState } from 'react'
import {   YT_VDO_API } from '../utils/constants'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { openMenu } from '../utils/appSlice'
const VideoContainer = () => {
const [ytHome,setytHome]=useState([])
  const getVideos=async()=>{
    const data=await fetch(YT_VDO_API)
    const response =await data?.json()
    // console.log(response);
    setytHome(response?.items)
    // setytCategory(resssponse?.filters)
// console.log(ytHome);
// console.log(ytCategory);
  }

  useEffect(()=>{
    getVideos()
  },[])

// const filtered=ytHome?.filter((data)=>{return data?.type==="video"})
const dispatch=useDispatch()
useEffect(()=>{
  dispatch(openMenu())
})

  return (
    <div className='flex flex-wrap'>
    {/* <VideoCard info={ytHome[0]}/>
    <VideoCard info={ytHome[0]}/>    <VideoCard info={ytHome[0]}/>    <VideoCard info={ytHome[0]}/>    <VideoCard info={ytHome[0]}/>    <VideoCard info={ytHome[0]}/>    <VideoCard info={ytHome[0]}/>    <VideoCard info={ytHome[0]}/>    <VideoCard info={ytHome[0]}/> */}
    {
      ytHome?.map((data,index)=>(<Link to={"/watch?v="+data.id} key={data?.id}><VideoCard  info={data}/></Link>))
    }
    </div>
  )
}

export default VideoContainer