import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice'
import {  useSearchParams } from 'react-router-dom'
import {GOOGLE_API_KEY} from '../utils/constants'

const WatchPage = () => {
    // const param=useParams()
    const [searchParams,setsearchParams]=useSearchParams()
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(closeMenu())
    })
    console.log(searchParams.get("v"));
  const VDO_ID=  searchParams.get("v")
// setsearchParams(searchParams.get("v"))

    

    const getYTVideo=async()=>{
        const data=await fetch( "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id="+VDO_ID+"&key="+GOOGLE_API_KEY);
        const response= await data.json();
        console.log(response);
    }
    useEffect(()=>{
getYTVideo()
    },[])
  return (
    <div>

        <div>
            Watch Page {VDO_ID}
        </div>
        <div>
            Watch Page {VDO_ID}
        </div>
    </div>
  )
}

export default WatchPage