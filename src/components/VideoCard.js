import React from 'react'

const VideoCard = ({info}) => {
    // console.log(info);
    if(!info){
        return "not"
    }
    const {channelTitle ,thumbnails,title}=info?.snippet
        const { viewCount}=info?.statistics
  return (
    <div className='p-2 m-2 w-72 shadow-lg'>
        {/* <h1>{channelTitle} - {lengthText}</h1> */}
        <img className='rounded-lg' alt='thumbnail' src={thumbnails?.medium?.url?thumbnails?.medium?.url:thumbnails?.high?.url}/>
        <ul>
            <li className='font-bold py-2'>{title}</li>
            <li>{channelTitle}</li>
            <li>{viewCount}</li>
        </ul>
{/* {info?.channelTitle} */}
    </div>
  )
}

export default VideoCard