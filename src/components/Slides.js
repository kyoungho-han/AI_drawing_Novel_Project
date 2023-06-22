import Carousel from 'react-bootstrap/Carousel';

function Slides() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="img/게임방송.jpeg"
          alt="First slide"
        />
        <Carousel.Caption>          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="img/농구.jpeg"
          alt="Second slide"
        />

        <Carousel.Caption>          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="img/아스팔트.jpeg"
          alt="Third slide"
        />

        <Carousel.Caption>          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slides;