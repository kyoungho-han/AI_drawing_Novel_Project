import Carousel from 'react-bootstrap/Carousel';
import './slides.css';

function Slides() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="img/game.jpeg"
          alt="First slide"
          style={{ width: '500px', height: '300px' }}
        />
        <Carousel.Caption>          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="img/basketball.jpeg"
          alt="Second slide"
          style={{ width: '500px', height: '300px' }}
        />

        <Carousel.Caption>          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="img/asp.jpeg"
          alt="Third slide"
          style={{ width: '500px', height: '300px' }}
        />

        <Carousel.Caption>          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slides;