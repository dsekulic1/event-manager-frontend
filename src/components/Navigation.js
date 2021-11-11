import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { useGlobalContext } from '../context'
const Navigation = () => {
  const { user, logoutUser } = useGlobalContext()

  return (
    <>
      <Navbar
        bg='dark'
        variant='dark'
        sticky='top'
        fixed='top'
        collapseOnSelect
        expand='sm'
      >
        <Container>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          {user ? (
            <Navbar.Collapse id='responsive-navbar-nav'>
              <Nav className='mr-auto'>
                <Nav.Link href='/'>Dashboard</Nav.Link>
              </Nav>
              <Nav className='ms-auto'>
                <Nav.Link href='/slack'>Slack</Nav.Link>
                <Nav.Link href='/email'>Email</Nav.Link>
                <Nav.Link href='/calendar'>My calendar</Nav.Link>
                <Nav.Link href='/' onClick={logoutUser}>
                  Logout
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          ) : (
            <Navbar.Collapse id='responsive-navbar-nav'>
              <Nav className='mr-auto'>
                <Nav.Link href='/'>Home</Nav.Link>
              </Nav>
              <Nav className='ms-auto'>
                <Nav.Link href='/login'>Login</Nav.Link>
                <Nav.Link href='/register'>Register</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          )}
        </Container>
      </Navbar>
    </>
  )
}

export default Navigation
