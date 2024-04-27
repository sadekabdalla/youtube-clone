import {Navbar,Container,Nav,Form} from "react-bootstrap"
import logo from '../../assets/logo.png'
import menu from '../../assets/menu.png'
import more from '../../assets/more-icon.png'
import upload from '../../assets/upload.png'
import notifc from '../../assets/notification.png'
import user from '../../assets/user_profile.jpg'
import { Link } from "react-router-dom"

export default function Navbare({setShow}) {
    
    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand href="#">
                        
                        <img className="mx-3" onClick={()=>setShow(prev=>prev===false?true:false)} src={menu} alt="logo" style={{width:"50px"}} ></img>
                        <Link to='/'><img src={logo} alt="logo" style={{width:"150px"}}></img></Link> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        
                    </Nav>
                    <Form className="d-flex w-50 mx-auto" >
                        <Form.Control
                        style={{borderRadius:"25px"}}
                        type="search"
                        placeholder="Search"
                        className="me-2 fs-4"
                        aria-label="Search"
                        />
                        <i className="fa-solid fa-magnifying-glass fs-4 " style={{transform:"translatex(-50px) translatey(10px)",color:"gray"}}></i>
                    </Form>
                    <Nav.Link href="#action2"><img src={upload} alt="logo" className="mx-3" style={{width:"35px"}}></img></Nav.Link>
                    <Nav.Link href="#action1"><img src={more} alt="logo" className="mx-3" style={{width:"35px"}}></img></Nav.Link>
                    <Nav.Link href="#action1"><img src={notifc} alt="logo" className="mx-3" style={{width:"35px"}}></img></Nav.Link>
                    <Nav.Link href="#action1"><img src={user} alt="logo" className="mx-3" style={{width:"35px"}}></img></Nav.Link>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
        </div>
    )
}


