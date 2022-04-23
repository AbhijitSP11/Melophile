import './Navbar.css';
import {Link,NavLink} from 'react-router-dom';
import {Navbar, Nav, NavDropdown ,FormControl, Button, Form, Container} from 'react-bootstrap';
 const Navigation = () => {
    return (
        <div >
            

            <Navbar style={{backgroundColor: "#111217"}} expand="lg" variant = "dark" fixed = "top">
          
  <Navbar.Brand Link to="#home" style={{color:'#EA215C'}}>Melophile</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
           
    <Nav className="mr-auto">
      
      <NavLink to="/" style={{color: "#a9a9a9"}} activeClassName="selectedLink">Home</NavLink>&nbsp;&nbsp;
      <NavLink to="/discover" style={{color: "#a9a9a9"}}  activeClassName="selectedLink">Discover</NavLink>&nbsp;&nbsp;
      <NavLink to="/album" style={{color: "#a9a9a9"}}  activeClassName="selectedLink">Album</NavLink>&nbsp;&nbsp;
      <NavLink to="/artists" style={{color: "#a9a9a9"}}  activeClassName="selectedLink">Artists</NavLink>&nbsp;&nbsp;
      <NavLink  to="/playlists" style={{color: "#a9a9a9"}}  activeClassName="selectedLink" >Playlists</NavLink>&nbsp;&nbsp;
      <NavLink to="/trending" style={{color: "#a9a9a9"}}  activeClassName="selectedLink">Trending</NavLink>&nbsp;&nbsp;
      <NavLink to="/podcasts"style={{color: "#a9a9a9"}}  activeClassName="selectedLink">Podcasts</NavLink>

      
    </Nav>
    
    {/* <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" style={{backgroundColor: "#2B2E33", border: "none"}}/>
      <Button variant="outline-danger"  style={{color:'white'}}>Search</Button>
    </Form>
     */}
    <Nav>
    <NavLink to="/subscription" activeClassName="selectedLink" style={{color: "#EA215C", marginTop:7, marginLeft:-20}}>Susbcription</NavLink>
    
    <NavDropdown title="Account" id="basic-nav-dropdown" style={{marginRight:15}} >
        <NavDropdown.Item href="#action/3.1">Login</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Susbcription</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3"></NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>

  </Navbar.Collapse>
  
</Navbar>

{/* 
            <nav className = "navbar navbar-expand-md navbar-dark bg-custom">
                <a href="#" className="navbar-brand">
                    <img src="/examples/images/logo.svg" height="28" alt="Melophile" />
                </a>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav">
                        <a href="#" className="nav-item nav-link active">Home</a>
                        <a href="#" className="nav-item nav-link">Discover</a>
                        <a href="#" className="nav-item nav-link">Album</a>
                        <a href="#" className="nav-item nav-link">Artists</a>
                        <a href="#" className="nav-item nav-link">Podcasts</a>
                    </div>
                    
                    <div className="navbar-nav ml-auto">
                    <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
                        <a href="#" className="nav-item nav-link">Login</a>
                    </div>
             
                </div>
            </nav> */}
            
        </div>
    )
}
export default Navigation;