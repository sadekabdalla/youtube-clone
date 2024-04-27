
import './Feed.css'
import {Link} from 'react-router-dom'
import { API_Key, valur_converter } from '../../Data/Data'
import { useEffect, useState } from 'react'
import moment from 'moment'
const Feed = ({category}) => {
    const [data,setData] = useState([])
    const fetchData = async()=>{
        const viseoList_url =`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_Key} `;
        await fetch(viseoList_url)
        .then(res=>res.json())
        .then(data=> setData(data.items))
    }
    useEffect(()=>{
        fetchData()
    },[category])
    return (
        
        <div className='feed'>
            {data.map((item,index)=>{
                return(
                    <Link to={`video/${item.snippet.categoryid}/${item.id}`} style={{textDecoration:"none"}} className='card'>
                        <img src={item.snippet.thumbnails.medium.url} alt='1'></img>
                        <h2>{item.snippet.title}</h2>
                        <h4>{item.snippet.channelTitle}</h4>
                        <p>{valur_converter(item.statistics.viewCount)} views &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
                    </Link>
                        )
            })}
            
            
        </div>
    )
}

export default Feed
