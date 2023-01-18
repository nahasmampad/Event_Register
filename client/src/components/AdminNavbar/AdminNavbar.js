import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'


function AdminNavbar() {
  return (
    <div>

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand >Book Slot</Navbar.Brand>
          <Nav className="me-auto">
           <Link to='/admin'> <Nav className='me-3 text-light '>Home</Nav> </Link>
            <Link to='/admin/usersList'> <Nav className='me-3 text-light ' >Users</Nav></Link> 
            <Link to='/admin/applications'><Nav className='me-3 text-light ' >Applications</Nav></Link> 
          </Nav>
        </Container>
      </Navbar>

      
    </div>
  )
}

export default AdminNavbar