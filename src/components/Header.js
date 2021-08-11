import React from 'react'
import { useWindowDimensions } from './useWindowDimensions'
import { Navbar, NavDropdown, Form, Button, Nav, FormControl } from 'react-bootstrap'


export const Header = () => {

  const { height, width } = useWindowDimensions();


  return (
    <>
      <Navbar bg="primary" expand="lg">
        <Navbar.Brand href="#">Tasveer8x10</Navbar.Brand>

        {
          width < 1000 ? (
            <Nav.Link href="#action2" className="m-3 ms-auto">
              <Button variant="primary " className="mx-2" style={{ border: '2px solid black' }}>
                Log In
              </Button>
            </Nav.Link>
          ) : (
            <h1></h1>
          )

        }<Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="ms-auto">
          <Nav
            className="ms-auto my-2 my-lg-0 "
            style={{ maxHeight: '100px', display: 'd-flex' }}
            navbarScroll
          >
            <Nav.Link href="#action1" className="m-4 ">Features</Nav.Link>
            <Nav.Link href="#action2" className="m-4">Pricing</Nav.Link>
            <Nav.Link href="#action2" className="m-4">Contact Us</Nav.Link>


            {
              width >= 1000 ?
                (
                  <Nav.Link href="#action2" className="m-3">
                    <Button variant="primary " className="mx-2" style={{ border: '2px solid black' }}>
                      Log In
                    </Button>

                    <Button variant="light" className="mx-3" style={{ background: 'black', color: "white" }}>
                      Explore
                    </Button>
                  </Nav.Link>
                ) : (
                  <Nav.Link href="#action2" className="m-3">
                    <Button variant="light" className="mx-3" style={{ background: 'black', color: "white" }}>
                      Explore
                    </Button>
                  </Nav.Link>
                )

            }
          </Nav>








        </Navbar.Collapse>
      </Navbar>
    </>
  )
}
