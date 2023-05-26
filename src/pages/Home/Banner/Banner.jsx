import img1 from '../../../assets/banner/banner7.jpeg';
import img2 from '../../../assets/banner/banner8.jpeg';
import img3 from '../../../assets/banner/banner10.jpeg';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Banner = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // Specify the animation duration (in milliseconds)
      offset: 200, // Specify the offset (in pixels) before the element appears
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  });

  return (
    <div data-aos="fade-up" data-aos-delay="200">
      <div className="carousel w-full rounded-2xl">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img1} className="w-full" />
        <div className="absolute flex items-center h-full left-0 top-0">
          <div className='text-white space-y-7 pl-16 w-1/2'>
            <h2 className='text-5xl font-bold'>Some Mini Toys in Affordable Prices</h2>
            <p><small>Japanese mini trucks are the ultimate utility vehicle for farmers, ranchers, hunters, outdoorsman, manufacturers, or anyone looking for a reliable, capable, quiet, and comfortable vehicle to tackle anything you throw at it.</small></p>
            <div>
              <button className="btn btn-active btn-primary">Explore More Toys</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-3 right-3 top-1/2">
          <a href="#slide3" className="btn btn-circle">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full" />
        <div className="absolute flex items-center h-full left-0 top-0">
          <div className='text-white space-y-7 pl-16 w-1/2'>
            <h2 className='text-5xl font-bold'>Some Mini Toys in Affordable Prices</h2>
            <p><small>Japanese mini trucks are the ultimate utility vehicle for farmers, ranchers, hunters, outdoorsman, manufacturers, or anyone looking for a reliable, capable, quiet, and comfortable vehicle to tackle anything you throw at it.</small></p>
            <div>
              <button className="btn btn-active btn-primary">Explore More Toys</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-3 right-3 top-1/2">
          <a href="#slide1" className="btn btn-circle">❮</a>
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full" />
        <div className="absolute flex items-center h-full left-0 top-0">
          <div className='text-white space-y-7 pl-16 w-1/2'>
            <h2 className='text-5xl font-bold'>Some Mini Toys in Affordable Prices</h2>
            <p><small>Japanese mini trucks are the ultimate utility vehicle for farmers, ranchers, hunters, outdoorsman, manufacturers, or anyone looking for a reliable, capable, quiet, and comfortable vehicle to tackle anything you throw at it.</small></p>
            <div>
              <button className="btn btn-active btn-primary">Explore More Toys</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-3 right-3 top-1/2">
          <a href="#slide2" className="btn btn-circle">❮</a>
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
      </div>
    </div>
</div>
  );
};

export default Banner;