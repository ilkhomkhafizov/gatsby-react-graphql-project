import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { Navbar, Form, Button, FormControl, Nav } from "react-bootstrap"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Navbar bg="dark" variant="dark" className="position-sticky">
      <Link to="/" className="link-no-style">
        <Navbar.Brand as="span">{data.site.siteMetadata.title}</Navbar.Brand>
      </Link>
      <Nav className="mr-auto">
        <Link to="/" className="link-no-style">
          <Nav.Link as="span">Home</Nav.Link>
        </Link>
        <Link to="/blog" className="link-no-style">
          <Nav.Link as="span">Blog</Nav.Link>
        </Link>
        <Link to="/about" className="link-no-style">
          <Nav.Link as="span">About Me</Nav.Link>
        </Link>
        <Link to="/contact" className="link-no-style">
          <Nav.Link as="span">Contacts</Nav.Link>
        </Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
      </Form>
    </Navbar>
  )
}

export default Header
