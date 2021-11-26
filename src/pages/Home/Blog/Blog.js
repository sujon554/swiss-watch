import React from 'react';
import { Card, CardGroup, Col } from 'react-bootstrap';

import blog1 from '../../../images/blog/blog1.jpg'
import blog2 from '../../../images/blog/blog2.jpg'
import blog3 from '../../../images/blog/blog5.jpg'
import blog4 from '../../../images/blog/blog4.jpg'

const Blog = () => {
    return (
      <>
        <Col className="my-5">
          <h2>OUR BLOG</h2>
          <p>________________________</p>
          <h5>HAPPENINGS AROUND</h5>
        </Col>
        <Col>
          <CardGroup>
            <Card className="m-2">
              <Card.Img variant="top" src={blog1} />
              <Card.Body>
                <Card.Title>CREATORS OF THE MAN MADE WATCHES</Card.Title>
                <Card.Text>
                  Adipiscing enim eu turpis egestas pretium aenean pharetra
                  magna ac. Eu ultrices vitae auctor eu augue ut lectus arcu
                  bibendum. Elementum nisi quis.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card className="m-2">
              <Card.Img variant="top" src={blog2} />
              <Card.Body>
                <Card.Title>A LUBRICANT-FREE WATCH FOR PERFECT MEN</Card.Title>
                <Card.Text>
                  Aliquam sem et tortor consequat id porta nibh venenatis cras.
                  Mollis aliquam ut porttitor leo a diam sollicitudin. Venenatis
                  lectus magna fringilla urn.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card className="m-2">
              <Card.Img variant="top" src={blog3} />
              <Card.Body>
                <Card.Title>MODERN DIGITAL JUMP-SECONDS DISPLAY</Card.Title>
                <Card.Text>
                  Maecenas volutpat blandit aliquam etiam. Integer malesuada
                  nunc vel risus commodo viverra maecenas. Gravida quis blandit
                  turpis cursus in.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card className="m-2">
              <Card.Img variant="top" src={blog4} />
              <Card.Body>
                <Card.Title>MODERN DIGITAL JUMP-SECONDS DISPLAY</Card.Title>
                <Card.Text>
                  Maecenas volutpat blandit aliquam etiam. Integer malesuada
                  nunc vel risus commodo viverra maecenas. Gravida quis blandit
                  turpis cursus in.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          </CardGroup>
        </Col>
      </>
    );
};

export default Blog;