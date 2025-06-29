import React from "react";
import "./styles/Services.scss";
import HomeIcon from '@mui/icons-material/Home';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import WifiIcon from '@mui/icons-material/Wifi';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import EventIcon from '@mui/icons-material/Event';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { Row, Col, Container } from 'react-bootstrap';

const Services = () => {
  return (
    <>
      <Container fluid>
        <div className="d-flex justify-content-center align-items-center text-center d-lg-none mt-5 py-5">
          <div className="bg-dark mx-2" style={{ height: 2, width: 24 }}></div>
          <div className="h1 text-dark">Our Services</div>
          <div className="bg-dark mx-2" style={{ height: 2, width: 24 }}></div>
        </div>
        <Row>
          <Col lg={6} className="bg-primary pt-5">
            <div className="py-5">
              <div className="d-none d-lg-flex align-items-center justify-content-end text-light pt-5">
                <div className="w-25 bg-light mx-2" style={{ height: 2 }}></div>
                <div className="h1">Our</div>
              </div>
              <div className="m-5">
                <Row>
                  <Col md={6}>
                    <div className="bg-light text-primary text-center py-3 mx-3 mb-3 mb-lg-5">
                      <HomeIcon style={{ fontSize: 70 }} />
                      <p>Accommodation</p>
                    </div>
                    <div className="bg-light text-primary text-center py-3 mx-3 mb-3 mb-lg-5">
                      <RestaurantIcon style={{ fontSize: 70 }} />
                      <p>Dining</p>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="bg-light text-primary text-center py-3 mx-3 mb-3 mt-lg-5">
                      <WifiIcon style={{ fontSize: 70 }} />
                      <p>WiFi</p>
                    </div>
                    <div className="bg-light text-primary text-center py-3 mx-3 mb-3 mt-lg-5">
                      <FitnessCenterIcon style={{ fontSize: 70 }} />
                      <p>Gym</p>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>

          <Col lg={6} className="bg-light pt-5">
            <div className="py-5">
              <div className="d-none d-lg-flex align-items-center justify-content-start text-dark pt-lg-5">
                <div className="h1">Services</div>
                <div className="w-25 bg-dark mx-2" style={{ height: 2 }}></div>
              </div>
              <div className="m-5">
                <Row>
                  <Col md={6}>
                    <div className="bg-primary text-light text-center py-3 mx-3 mb-3 mt-lg-5">
                      <EventIcon style={{ fontSize: 70 }} />
                      <p>Event Facilities</p>
                    </div>
                    <div className="bg-primary text-light text-center py-3 mx-3 mb-3 mt-lg-5">
                      <DirectionsCarIcon style={{ fontSize: 70 }} />
                      <p>Parking</p>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="bg-primary text-light text-center py-3 mx-3 mb-3 mb-lg-5">
                      <SportsSoccerIcon style={{ fontSize: 70 }} />
                      <p>Recreational Activities</p>
                    </div>
                    <div className="bg-primary text-light text-center py-3 mx-3 mb-3 mb-lg-5">
                      <LocalMallIcon style={{ fontSize: 70 }} />
                      <p>Gift Shops</p>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Services;
