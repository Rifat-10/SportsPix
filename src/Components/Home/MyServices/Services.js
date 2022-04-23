import React from "react";
import { Button, Container } from "react-bootstrap";

import image1 from "../../../Images/cricket.jpg";
import image2 from "../../../Images/hockey.png";
import image3 from "../../../Images/golf.png";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className='my-3 py-2'>
      <Container>
        <div className='row row-cols-1 row-cols-md-3 g-4'>
          <div className='col'>
            <div className='card'>
              <img src={image1} className='card-img-top' alt='...' />
              <div className='card-body'>
                <h5 className='card-title'>Cricket</h5>
                <h3 className='fw-bold'>100$</h3>
                <p className='card-text text-start'>
                  To get a perfect shot of the cricket is so
                  diffecult. 
                </p>
                <Button variant='dark' as={Link} to='checkout'>
                  {" "}
                  Checkout{" "}
                </Button>
              </div>
            </div>
          </div>
          <div className='col'>
            <div className='card'>
              <img src={image2} className='card-img-top' alt='...' />
              <div className='card-body'>
                <h5 className='card-title'>Hockey</h5>
                <h3 className='fw-bold'>200$</h3>
                <p className='card-text text-start'>
                  The hockey is very beautiful and pleasing game.
                </p>
                <Button variant='dark' as={Link} to='checkout'>
                  {" "}
                  Checkout{" "}
                </Button>
              </div>
            </div>
          </div>
          <div className='col'>
            <div className='card'>
              <img src={image3} className='card-img-top' alt='...' />
              <div className='card-body'>
                <h5 className='card-title'>Golf</h5>
                <h3 className='fw-bold'>300$</h3>
                <p className='card-text text-start'>
                  Golf thing became so dangerous and hard to shot
                  pictures. 
                </p>
                <Button variant='dark' as={Link} to='checkout'>
                  {" "}
                  Checkout{" "}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Services;
