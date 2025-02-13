import v1 from "../assets/V1-.jpg";
import v2 from "../assets/V2.webp";
import v3 from "../assets/v3-2.jpg";

const MainBanner = () => {
  return (
    <div className="w-full mx-auto">
      <div className="carousel w-full  h-[400px] md:h-[600px] xl:h-[800px]">
        <div id="slide1" className="carousel-item rounded-xl relative w-full">
          <img src={v1} className="w-full rounded-xl" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={v2} className="w-full rounded-xl" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={v3} className="w-full rounded-xl" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div>
          
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
