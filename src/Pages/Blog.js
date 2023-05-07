import React, { Component } from 'react'
import { Container, Row, Col, ListGroup,Card } from 'react-bootstrap'


export default class Blog extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md="9">
            
    <img src="https://static.javatpoint.com/images/javascript/javascript_logo.png" alt="..."/>

  <div class="flex-grow-1 ms-3">
    Это какой-то контент из медиа-компонента. Вы можете заменить его любым содержимым и при необходимости отрегулировать его.
            </div>
              <img src="https://static.javatpoint.com/images/javascript/javascript_logo.png" alt="..."/>

  <div class="flex-grow-1 ms-3">
    Это какой-то контент из медиа-компонента. Вы можете заменить его любым содержимым и при необходимости отрегулировать его.
            </div>
              <img src="https://static.javatpoint.com/images/javascript/javascript_logo.png" alt="..."/>

  <div class="flex-grow-1 ms-3">
    Это какой-то контент из медиа-компонента. Вы можете заменить его любым содержимым и при необходимости отрегулировать его.
            </div>
            <Col  md="3">
              <h5 className="text-center mt-5"> Blog post </h5>
              <Card>
                <ListGroup variant="flush">
                  <ListGroup.Item> HTML/CSS </ListGroup.Item>
                  <ListGroup.Item> JavaSctript </ListGroup.Item>
                  <ListGroup.Item> Python </ListGroup.Item>
                  <ListGroup.Item> Java </ListGroup.Item>
                  <ListGroup.Item> C++ </ListGroup.Item>
                </ListGroup>
              </Card>

              <Card className="mt=3" bg="light">
                <Card.Body>
                  <Card.Title> Site Widget </Card.Title>
                  <Card.Text>Это какой-то контент из медиа-компонента. Вы можете заменить его любым содержимым и при необходимости отрегулировать его.</Card.Text>
              </Card.Body>
              </Card>
            </Col>
          </Col>
        </Row>
        </Container>
    )
  }
}
