import { Navbar, Nav } from 'react-bootstrap'
// the { } are for importing something that is not the DEFAULT EXPORT of the library!
// you'll need to import the react-bootstrap components in EVERY FILE you're using them in!

const MyNavbar = (props) => {
  // props is an object
  // every piece of prop you're going to pass to MyNavbar is going to be a property of this object
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">{props.navTitle}</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#deets">Menu</Nav.Link>
          <Nav.Link href="#deets">Reservation</Nav.Link>
          <Nav.Link href="#memes">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default MyNavbar
// this is now my custom navbar component, which started as a react-bootstrap navbar!
