import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, Container } from 'react-bootstrap'

const Navigation = () => {
  return (
    /*
    <nav>
      <Link to='/'>
        <p>Home</p>
      </Link>
      <Link to='/register'>
        <p>Register</p>
      </Link>
      <Link to='/login'>
        <p>login</p>
      </Link>
    </nav>*/
    <>
      <Navbar
        bg='dark'
        variant='dark'
        sticky='top'
        fixed='top'
        collapseOnSelect
      >
        <Container>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='mr-auto'>
              <Nav.Link href='/'>Home</Nav.Link>
            </Nav>
            <Nav className='ms-auto'>
              <Nav.Link href='/login'>Login</Nav.Link>
              <Nav.Link href='/register'>Register</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Navigation
