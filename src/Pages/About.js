import React, { Component } from 'react'
import { Container, Nav, Row, TabContent, Col, Tab } from 'react-bootstrap'
  
export default class About extends Component {
  render() {
    return (
      <Container>
        <Tab.Container id="ledt-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column mt-2">
                <Nav.Item>
                  <Nav.Link eventKey="first">Design</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Team</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Programming</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">Frameworks</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fifth">Libraries</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <TabContent className="mt-3">
                <Tab.Pane eventKey ="first">
                  <img src="https://s3-alpha.figma.com/hub/file/1080449610/5442d7d7-4ab7-4e3a-8d62-1b1b0f26a48c-cover.png" width="100%" />
                  <p>Lorem ipsum dolor sit amet</p>
                </Tab.Pane>
                <Tab.Pane eventKey ="second">
                  <img src="https://www.businessmanager.in/wp-content/uploads/2022/04/Effective-Team-Work.jpg" width="100%"/>
                  <p>Lorem ipsum dolor sit amet</p>
                </Tab.Pane>
                <Tab.Pane eventKey ="third">
                  <img src="https://www.freecodecamp.org/news/content/images/2022/12/main-image.png" width="100%" />
                  <p>Lorem ipsum dolor sit amet</p>
                </Tab.Pane>
                <Tab.Pane eventKey ="fourth">
                  <img src="https://jumpgrowth.com/wp-content/uploads/2021/01/10-Web-Development-Frameworks.png" width="100%" />
                  <p>Lorem ipsum dolor sit amet</p>
                </Tab.Pane>
                <Tab.Pane eventKey ="fifth">
                  <img src="https://epe.brightspotcdn.com/81/86/fb9958a549d28c0d58b434316e44/book-purchasing-021323-479704265.jpg" width="100%" />
                  <p>Lorem ipsum dolor sit amet</p>
                </Tab.Pane>
              </TabContent>
            </Col>
          </Row>

        </Tab.Container>
      </Container>
    )
  }
}
