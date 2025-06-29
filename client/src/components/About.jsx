import React from "react";
import img1 from "../assets/images/img1.jpeg";
import img2 from "../assets/images/img2.jpeg";
import img3 from "../assets/images/img3.jpeg";
import img4 from "../assets/images/img4.jpeg";
import { Row, Col, Container } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';

const About = () => {
  return (
    <>
      <div className="mt-5 py-5">
        <Container className="py-5">
          <Row className="align-items-stretch">
            <Col lg={4} className="mb-5">
              <Row className="align-items-stretch h-100">
                <Col xs={6} className="d-flex flex-column justify-content-between">
                  <div className="ps-3 border-start border-2 border-secondary mb-3" style={{ height: '40%' }}>
                    <img src={img1} alt="Image 1" className="img-fluid h-100 w-100 object-fits-cover" />
                  </div>
                  <div className="pb-3 border-bottom border-2 border-secondary" style={{ height: '80%'}}>
                    <img src={img4} alt="Image 4" className="img-fluid h-100 w-100 object-fits-cover" />
                  </div>
                </Col>
                <Col xs={6} className="d-flex flex-column justify-content-between">
                  <div className="pt-3 border-top border-2 border-secondary mb-3" style={{ height: '40%' }}>
                    <img src={img3} alt="Image 3" className="img-fluid h-100 w-100 object-fits-cover" />
                  </div>
                  <div className="pe-3 border-end border-2 border-secondary" style={{ height: '80%' }}>
                    <img src={img2} alt="Image 2" className="img-fluid h-100 w-100 object-fits-cover" />
                  </div>
                </Col>
              </Row>
            </Col>

            <Col lg={8}>
              <div>
                <div className="d-flex align-items-center justify-content-around mb-3">
                  <div className="w-25 bg-secondary" style={{ height: 2 }}></div>
                  <h2>About Us</h2>
                  <div className="w-25 bg-secondary" style={{ height: 2 }}></div>
                </div>
                <h3 className="h1">Welcome To Hingar Hotels</h3>
                <div className="h3 mb-4">Your Gateway To Exceptional Stays</div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                  officiis, est vero reprehenderit provident laborum similique, iusto
                  repellat quis ipsam fugit ullam! Repudiandae, qui accusamus sunt
                  praesentium voluptas natus earum nemo odit veritatis enim. Expedita,
                  id aperiam porro molestiae assumenda minima ullam dolore rerum ipsum
                  recusandae exercitationem, adipisci hic doloremque! Magni blanditiis
                  repellendus omnis natus hic earum consequuntur asperiores deleniti.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Container fluid className="">
        <Container className="pb-5">
          <Row className="text-light">
            <Col md={4} className="px-3">
              <div className="d-flex bg-primary py-4 mx-lg-5 mb-3 mt-md-5">
                <div className="w-50 text-center">
                  <Icon.PeopleFill className="h1" />
                </div>
                <div className="w-50 text-center">
                  <div className="data">Staff</div>
                  <div className="data">2345</div>
                </div>
              </div>
            </Col>
            <Col md={4} className="px-3">
              <div className="d-flex bg-primary py-4 mb-3 mx-lg-5 mb-md-5">
                <div className="w-50 text-center">
                  <Icon.PersonLinesFill className="h1" />
                </div>
                <div className="w-50 text-center">
                  <div className="data">Clients</div>
                  <div className="data">2345</div>
                </div>
              </div>
            </Col>
            <Col md={4} className="px-3">
              <div className="d-flex bg-primary py-4 mx-lg-5 mb-3 mt-md-5">
                <div className="w-50 text-center">
                  <Icon.BuildingFill className="h1" />
                </div>
                <div className="w-50 text-center">
                  <div className="data">Rooms</div>
                  <div className="data">2345</div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default About;
