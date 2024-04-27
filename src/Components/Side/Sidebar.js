import home from '../../assets/home.png'
import game from '../../assets/game_icon.png'
import autpmobile from '../../assets/automobiles.png'
import sport from '../../assets/sports.png'
import entertinment from '../../assets/entertainment.png'
import tec from '../../assets/tech.png'
import music from '../../assets/music.png'
import blogs from '../../assets/blogs.png'
import news from '../../assets/news.png'
import jack from '../../assets/jack.png'
import simon from '../../assets/simon.png'
import tom from '../../assets/tom.png'
import megan from '../../assets/megan.png'
import cameron from '../../assets/cameron.png'
import './Side.css'
const Sidebar = ({show,category,setCategory}) => {
    return (
        <div className={`sidebar ${show?" ":"small-sidebar"}`}>
            <div className="sortcut-links">
                <div className={`side-link ${category===0?"active":""}`} onClick={()=> setCategory(0)} >
                    <img src={home} alt="" /><p>Home</p>
                </div>
                <div className={`side-link ${category===20?"active":""}`} onClick={()=> setCategory(20)}>
                    <img src={game} alt="" /><p>Gaming</p>
                </div>
                <div className={`side-link ${category===2?"active":""}`} onClick={()=> setCategory(2)}>
                    <img src={autpmobile} alt="" /><p>Automobiles</p>
                </div>
                <div className={`side-link ${category===17?"active":""}`} onClick={()=> setCategory(17)}>
                    <img src={sport} alt="" /><p>Sports</p>
                </div>
                <div className={`side-link ${category===24?"active":""}`} onClick={()=> setCategory(24)} >
                    <img src={entertinment} alt="" /><p>Entertinment</p>
                </div>
                <div className={`side-link ${category===28?"active":""}`} onClick={()=> setCategory(28)} >
                    <img src={tec} alt="" /><p>Technology</p>
                </div>
                <div className={`side-link ${category===10?"active":""}`} onClick={()=> setCategory(10)} >
                    <img src={music} alt="" /><p>Music</p>
                </div>
                <div className={`side-link ${category===22?"active":""}`} onClick={()=> setCategory(22)} >
                    <img src={blogs} alt="" /><p>Blogs</p>
                </div>
                <div className={`side-link ${category===25?"active":""}`} onClick={()=> setCategory(25)} >
                    <img src={news} alt="" /><p>News</p>
                </div>
            </div>
            <hr></hr>
            <div className="subscriped-list">
                <h3>Subscriped</h3>
                <div className="side-link">
                    <img src={jack}  alt="" /><p>PewDiPe</p>
                </div>
                <div className="side-link">
                    <img src={simon}  alt="" /><p>MeBeast</p>
                </div>
                <div className="side-link">
                    <img src={tom}  alt="" /><p>Justin Bieber</p>
                </div>
                <div className="side-link">
                    <img src={megan}  alt="" /><p>5-Minute Craft</p>
                </div>
                <div className="side-link">
                    <img src={cameron}  alt="" /><p>Nas Daily</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar