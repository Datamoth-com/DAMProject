import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import "./Carousal.css"

export const Carousal = () => {
  return (
    <div><Carousel variant="dark">
    <Carousel.Item>
      <img
        className="d-block w-100 carso"
        src="https://cdn.pixabay.com/photo/2016/08/05/09/31/banner-1571858_960_720.jpg"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>Create Assets</h3>
        <p>Create and register your assets with D.A.M.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100 carso"
        src="https://cdn.pixabay.com/photo/2016/08/05/09/31/banner-1571858_960_720.jpg"
        alt="Second slide"
      />

      <Carousel.Caption>
        <h3>Transfer Assets</h3>
        <p>Transfer and receive assets with others with D.A.M.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100 carso"
        src="https://cdn.pixabay.com/photo/2016/08/05/09/31/banner-1571858_960_720.jpg"
        alt="Third slide"
      />

      <Carousel.Caption>
        <h3>View assets</h3>
        <p>
          View and manage your assets with D.A.M.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>  
  </div>
  )
}
