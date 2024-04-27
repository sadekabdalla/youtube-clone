import './PlayVideo.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user from '../../assets/user_profile.jpg'
import { useEffect, useState } from 'react'
import { API_Key, valur_converter } from '../../Data/Data'
import moment from 'moment'

const PlayVideo = ({videoId}) => {
    const [apiData,setApiData]= useState(null);
    const fetchVideoData = async()=>{
        //fetch videos data
        const videoDetails_url=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_Key}`
        await fetch(videoDetails_url)
        .then(res=>res.json())
        .then(data=>setApiData(data.items[0]))
    }
    useEffect(()=>{
        fetchVideoData()
    },[])
    return (
        <div className='play-vodeo'>
            {/* <video src={video1} controls autoPlay muted></video> */}
            <iframe  src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <h2>{apiData?apiData.snippet.title:"title Here"}</h2>
            <div className='play-video-info'>
                <p>{apiData?valur_converter(apiData.statistics.viewCount):"16K"} views &bull;  {apiData?moment(apiData.snippet.publishedAt).fromNow():''}</p>
                <div>
                    <span><img src={like} alt='like'></img>{apiData?valur_converter(apiData.statistics.likeCount):'155'}</span>
                    <span><img src={dislike} alt='dlike'></img>2</span>
                    <span><img src={share} alt='share'></img>share</span>
                    <span><img src={save} alt='save'></img>save</span>
                </div>
                </div>
                <hr></hr>
                <div className='publisher'>
                    <img src={jack} alt='jack'></img>
                    <div>
                        <p>{apiData?apiData.snippet.channelTitle:""}</p>
                        <span>1M Subscribers</span>
                    </div>
                    <button>Subscribe</button>
                </div>
                .<div className='vid-discription'>
                    <p>{apiData?apiData.snippet.description.slice(0,250):'description here'}</p>
                    <hr></hr>
                    <h4>{apiData?valur_converter(apiData.statistics.commentCount):140} Comments</h4>
                    <div className='comment'>
                        <img src={user} alt=''></img>
                        <div>
                            <h2>Sadek abdalla <span>1 days ago</span> </h2>
                            <p>A global Compute Network Providing a Virity of information cc</p>
                            <div className='comment-action'>
                                <img src={like} alt='' /><span>244</span>
                                <img src={dislike} alt=''/>
                            </div>
                        </div>
                    </div>
                    <div className='comment'>
                        <img src={user} alt=''></img>
                        <div>
                            <h2>Sadek abdalla <span>1 days ago</span> </h2>
                            <p>A global Compute Network Providing a Virity of information cc</p>
                            <div className='comment-action'>
                                <img src={like} alt='' /><span>244</span>
                                <img src={dislike} alt=''/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
    )
}

export default PlayVideo
