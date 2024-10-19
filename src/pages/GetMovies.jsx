import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import "../style.css"
const GetMovies = () => {
    let[data,setdata]=useState([])
    let[search,setsearch]=useState("")
        // key:"4010f125677ceb848cba3ea144e40c8c",    url:"https://api.themoviedb.org/3/trending/movie/day?api_key=4010f125677ceb848cba3ea144e40c8c&language=en-US"
    useEffect(()=>{
        let api=fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=4010f125677ceb848cba3ea144e40c8c&language=en-US")
        api.then(x=>x.json()).then(val=>{
            setdata(val.results)
        }).catch((e)=>console.log(e) )
    },[])
    function movieSearch(){
        fetch(`https://api.themoviedb.org/3/search/movie?query=${search}&api_key=4010f125677ceb848cba3ea144e40c8c`).then(x=>x.json()).then(res=>setdata(res.results)).catch(console.log("api is not working"))
    }
    // console.log(data);
    let navigate=useNavigate()
  return (
    <div>
        {/* navbar */}
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={search}
              onChange={(e)=>setsearch(e.target.value)}
            />
            <Button variant="outline-success" onClick={movieSearch}>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    {/* caurousel */}
        <Carousel>
      {data.map((x,y)=>{
        return(
            <div key={y}>
            <img src={`https://image.tmdb.org/t/p/original/${x.backdrop_path}`} alt='img'/>
            <p className="legend">{x.title}</p>
            <p>{x.vote_average}</p>
            <p>{x.overview}</p>
        </div>
        )
      })}
     </Carousel>
     {/* cards */}
     <section className="card-container">
    {
        data.map((cards, ind) => {
            return (
                <div key={ind} className="card-item">
                    <Card style={{ width: '18rem' }} className="custom-card">
                        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original/${cards.backdrop_path}`} />
                        <Card.Body>
                            <Card.Title>{cards.title}</Card.Title>
                            <Card.Text>
                                {cards.overview}
                            </Card.Text>
                            <Button variant="primary" onClick={() => navigate("/partmovie", { state: { cards } })}>
                                More Details
                            </Button>
                        </Card.Body>
                    </Card>
                </div>
            )
        })
    }
</section>
    </div>
  )
}

export default GetMovies
