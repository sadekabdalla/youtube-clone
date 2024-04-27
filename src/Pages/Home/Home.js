import { useState } from "react"
import Feed from "../../Components/Feed/Feed"
import Sidebar from "../../Components/Side/Sidebar"
import './Home.css'

const Home = ({show}) => {
    const [category,setCategory] =useState(0)
    return (
        <div>
            <Sidebar show={show} category={category} setCategory={setCategory} />
            <div className={`containere ${show?"":"larg-container"}`}>
                <Feed    category={category} />
            </div>
        </div>
    )
}

export default Home