import React, { Component } from 'react'
import CarouselBox from '../Components/CarouselBox'
import { Button, Container, Card, CardGroup } from 'react-bootstrap'

export default class Home extends Component {
  render() {
    return (
      <>
        <CarouselBox />
        <Container>
          <h2 className="text-center m-4"> Our Team </h2>
          <CardGroup className='m-4'>
            <Card border="success" text="primary">
              <Card.Img
                variant="top"
                src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg"
              />
              <Card.Body>
                <Card.Title> Developers </Card.Title>
                <Card.Text> 
                  A privately published site can only be accessed by people with read access to the repository the site is published from. 
                </Card.Text>
                <Button variant="primary"> About Team </Button>
              </Card.Body>
            </Card>
            <Card border="success" text="primary">
              <Card.Body>
                <Card.Title> Developers </Card.Title>
                <Card.Text> 
                  A privately published site can only be accessed by people with read access to the repository the site is published from. 
                </Card.Text>
                <Button variant="primary"> About Team </Button>
              </Card.Body>
              <Card.Img
                variant="bottom"
                src="https://images.pexels.com/photos/3184421/pexels-photo-3184421.jpeg"
              />
            </Card>
            <Card border="success" text="primary">
              <Card.Img
                variant="top"
                src="https://images.pexels.com/photos/3184419/pexels-photo-3184419.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
              <Card.Body>
                <Card.Title> Developers </Card.Title>
                <Card.Text> 
                  A privately published site can only be accessed by people with read access to the repository the site is published from. 
                </Card.Text>
                <Button variant="primary"> About Team </Button>
              </Card.Body>
            </Card>
          </CardGroup>
        </Container>
      </>
    )
  }
}
