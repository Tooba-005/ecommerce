// import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 4 },
};

  const items = [
    "/Image/15.jpg",
    "/Image/16.jpg",
    "/Image/17.jpg",
    "/Image/18.jpg",
    "/Image/19.jpg",
    "/Image/20.jpg"
  ].map((x)=><img src={x} alt='' key={x.id}/>);

const Carousel = () => {
  return (
    <div>
    <div id="carouselExampleCaptions" className="carousel slide">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="/Image/s.jpg" className="d-block w-100" alt="..." style={{height:"450px"}} />
        <div className="carousel-caption d-none d-md-block">
          <button className='text-white bg-dark m-auto'>Explore Now</button>
        </div>
      </div>
      <div className="carousel-item">
        <img src="./Image/s1.jpg" className="d-block w-100" alt="..." style={{height:"450px"}} />
        <div className="carousel-caption d-none d-md-block">
        <button className='text-white bg-dark m-auto'>Explore Now</button>
        </div>
      </div>
      <div className="carousel-item">
        <img src="./Image/13.webp" className="d-block w-100" alt="..." style={{height:"450px"}}/>
        <div className="carousel-caption d-none d-md-block">
        <button className='text-white bg-dark m-auto'>Explore Now</button>
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="visually-hidden">Next</span>
    </button>
  </div>

  <div className="container">
  <h3 className="text-center fw-bold">---------- New Arrivals ----------</h3>
  <div className="row">
  <div className="d-flex mt-3">
  <div className="card mx-3">
  <img src="./Image/1.jpg" className="card-img-top m-auto py-2 px-2" alt="..." style={{height:"350px"}}/>
  <p className="text-dark fw-bold">Dania Chikan Kari Luxe 3 Piece Linen Eid Outfit Pink</p>
  <p className="text-grey">Rs.14,500.00</p>
  </div>
  <div className="card mx-3">
  <img src="./Image/2.jpg" className="card-img-top m-auto py-2 px-2" alt="..." style={{height:"350px"}}/>
  <p className="text-dark fw-bold">Dania Chikan Kari Luxe 3 Piece Linen Eid Outfit Pink</p>
  <p className="text-grey">Rs.14,500.00</p>
  </div>
  <div className="card mx-3">
  <img src="./Image/3.jpg" className="card-img-top m-auto py-2 px-2" alt="..." style={{height:"350px"}}/>
  <p className="text-dark fw-bold">Dania Chikan Kari Luxe 3 Piece Linen Eid Outfit Pink</p>
  <p className="text-grey">Rs.14,500.00</p>
  </div>
  <div className="card mx-3">
  <img src="./Image/4.jpg" className="card-img-top m-auto py-2 px-2" alt="..." style={{height:"350px"}}/>
  <p className="text-dark fw-bold">Dania Chikan Kari Luxe 3 Piece Linen Eid Outfit Pink</p>
  <p className="text-grey">Rs.14,500.00</p>
  </div>
  </div>
  </div>
  <div className="row">
  <div className="d-flex mt-3">
  <div className="card mx-3">
  <img src="./Image/5.jpg" className="card-img-top m-auto py-2 px-2" alt="..." style={{height:"350px"}}/>
  <p className="text-dark fw-bold">Nisa Linen Embroidered Eid 3 Piece Suit With Chiffon Dupatta MC02</p>
  <p className="text-grey">Rs.12,700.00</p>
  </div>
  <div className="card mx-3">
  <img src="./Image/6.jpg" className="card-img-top m-auto py-2 px-2" alt="..." style={{height:"350px"}}/>
  <p className="text-dark fw-bold">Nisa Linen Embroidered Eid 3 Piece Suit With Chiffon Dupatta MC02</p>
  <p className="text-grey">Rs.12,700.00</p>
  </div>
  <div className="card mx-3">
  <img src="./Image/7.jpg" className="card-img-top m-auto py-2 px-2" alt="..." style={{height:"350px"}}/>
  <p className="text-dark fw-bold">Nisa Linen Embroidered Eid 3 Piece Suit With Chiffon Dupatta MC02</p>
  <p className="text-grey">Rs.12,700.00</p>
  </div>
  <div className="card mx-3">
  <img src="./Image/8.jpg" className="card-img-top m-auto py-2 px-2" alt="..." style={{height:"350px"}}/>
  <p className="text-dark fw-bold">Nisa Linen Embroidered Eid 3 Piece Suit With Chiffon Dupatta MC02</p>
  <p className="text-grey">Rs.12,700.00</p>
  </div>
  </div>
  </div>
  <div className="row">
  <div className="d-flex mt-3">
  <div className="card mx-3">
  <img src="./Image/13.jpg" className="card-img-top m-auto py-2 px-2" alt="..." style={{height:"350px"}}/>
  <p className="text-dark fw-bold">Azure Designer Luxe Embroidered Mint Breeze 3 Piece Wedding Outfit</p>
  <p className="text-grey">Rs.34,300.00</p>
  </div>
  <div className="card mx-3">
  <img src="./Image/10.jpg" className="card-img-top m-auto py-2 px-2" alt="..." style={{height:"350px"}}/>
  <p className="text-dark fw-bold">Azure Designer Luxe Embroidered Mint Breeze 3 Piece Wedding Outfit</p>
  <p className="text-grey">Rs.34,300.00</p>
  </div>
  <div className="card mx-3">
  <img src="./Image/11.jpg" className="card-img-top m-auto py-2 px-2" alt="..." style={{height:"350px"}}/>
  <p className="text-dark fw-bold">Azure Designer Luxe Embroidered Mint Breeze 3 Piece Wedding Outfit</p>
  <p className="text-grey">Rs.34,300.00</p>
  </div>
  <div className="card mx-3">
  <img src="./Image/12.jpg" className="card-img-top m-auto py-2 px-2" alt="..." style={{height:"350px"}}/>
  <p className="text-dark fw-bold">Azure Designer Luxe Embroidered Mint Breeze 3 Piece Wedding Outfit</p>
  <p className="text-grey">Rs.34,300.00</p>
  </div>
  </div>
  </div>
  <button className="text-center text-white bg-dark rounded-5 py-2 px-3 mt-4 mb-5">Load More</button>
  <h3 className="text-center fw-bold mb-4">---------- Our Collections ----------</h3>
  <div className="text-center my-3">
  <AliceCarousel
  infinite
  autoPlay
  items={items}
  disableButtonsControls
  responsive={responsive}/>
  </div>
  </div>
  <div>
  <img src='/Image/ship.PNG' alt='' />
  </div>
  <div>
  <img src='/Image/footer.PNG' alt='' className='w-100' />
  </div>
  <div className='d-flex mt-3'>
  <p className='me-auto mx-3'>Copyright 2024 <span className='text-info'>DESI POSH</span> all rights reserved. Made with ❤</p>
  <p className='mx-3'>About Us&nbsp;&nbsp;&nbsp;Shipping&nbsp;&nbsp;&nbsp;ReturnsPolicy&nbsp;&nbsp;&nbsp;Contact Us&nbsp;&nbsp;&nbsp;Privacy Policy&nbsp;&nbsp;&nbsp;Search</p>
  </div>
    </div>
  )
}

export default Carousel
