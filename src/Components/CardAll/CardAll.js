import React, { Fragment } from 'react';
import { Button, Image, Row ,Container} from 'react-bootstrap';
import './Card.css';

export default function CardAll({ imageSrc, buttonText, imgBackground,children }) {
  return (
    <Fragment>
      <div
        className="pt-4 hide-bg-small"
        style={{
        
          backgroundSize: 'cover',
          backgroundImage:`url(${imgBackground})`,
          backgroundPosition: 'top',
          backgroundRepeat:'no-repeat'
        }}
      >
        <Container>
        <div className="pt-md-5 two-section" style={{padding:'12px 0px'}}>
          <Button
            style={{ backgroundColor: '#467F2D', letterSpacing: '1px',marginLeft:'-40px' }}
            className="btnChange px-3 my-5 py-1 fs-3 fw-lighter rounded-0 border-0 mt-5 mb-3 "
          >
            {buttonText}
          </Button>
          <Row className="d-flex align-items-start my-md-5 py-md-0">
          
            <div className="col-md-6   justify-content-sm-center mb-5">
              <Image src={imageSrc} alt="Background Design" className=" mt-3 "  style={{width:'83%'}}/>
            </div>

            <div className="col-md-6 col-12 pb-1">{children}</div>
          </Row>
        </div></Container>
      </div>
    </Fragment>
  );
}
