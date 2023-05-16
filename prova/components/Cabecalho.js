import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'


const Cabecalho = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="">Obras de Arte</Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link href="/artes">Obras</Nav.Link>
          <Nav.Link href="/artes/tipo">Tipos de Arte</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    </>
  )
}

export default Cabecalho