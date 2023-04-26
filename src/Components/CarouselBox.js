import React, { Component } from 'react'
import  Carousel  from 'react-bootstrap/Carousel'
import fonImg from '../assets/fon.jpg'
import fonsImg from '../assets/fons.jpg'

export default class CarouselBox extends Component {
    render() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={fonImg}
                    alt="fon"
                />
                <Carousel.Caption>
                    <h3>
                        Fon image
                    </h3>
                    <p>
                        lorem ipsam dolor sit amet, consectetur adipiscing elit.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={fonsImg}
                    alt="fon"
                />
                <Carousel.Caption>
                    <h3>
                        Fon image
                    </h3>
                    <p>
                        lorem ipsam dolor sit amet, consectetur adipiscing elit.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={fonImg}
                    alt="fon"
                />
                <Carousel.Caption>
                    <h3>
                        Fon image
                    </h3>
                    <p>
                        lorem ipsam dolor sit amet, consectetur adipiscing elit.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
    }
}
