import { useParams } from "react-router-dom"
import Recomended from "../../Components/Recomended/Recomended"
import PlayVideo from "../../Components/playVideo/PlayVideo"
import './Video.css'

const Video = () => {
    const {videoId,categoryId} = useParams();
    return (
        <div className="play-container">
            <PlayVideo  videoId={videoId} />
            <Recomended/>
        </div>
    )
}

export default Video
