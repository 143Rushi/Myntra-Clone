import React from 'react';
import './RisingStars.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const RisingStars = () => {
  return (
    <div className="rising-stars">
      <h2 className="section-title">RISING STARS</h2>

      <Swiper
        spaceBetween={20}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
        breakpoints={{
          320: { slidesPerView: 1.2 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3.5 },
        }}
        className="swiper-container"
      >
        <SwiperSlide>
          <div className="brand-card">
            <img src='https://i.pinimg.com/originals/0b/cf/d0/0bcfd0af3035e69d46ea8720f411a6a2.jpg' alt="RARE RABBIT" className="brand-img" />
            <div className="brand-info">
              <h4>RARE RABBIT</h4>
              <p>Style Meets Comfort</p>
              <strong>Min. 50% Off</strong>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="brand-card">
            <img src="https://e0.pxfuel.com/wallpapers/90/846/desktop-wallpaper-allu-arjun-jitesh-by-jiteshpatre-59-now-browse-millions-of-popular-al-in-2021-allu-arjun-poses-for-boy-dj-movie-dj-allu-arjun.jpg" alt="SNITCH + Bewakoof" className="brand-img" />
            <div className="brand-info">
              <h4>SNITCH + Bewakoof</h4>
              <p>Modern Comfort</p>
              <strong>Min. 60% Off</strong>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="brand-card">
            <img src='https://i.pinimg.com/736x/5b/54/42/5b5442676f56648ab675377ccd4f0a1f.jpg' alt="POWERLOOK + URBANO" className="brand-img" />
            <div className="brand-info">
              <h4>POWERLOOK + URBANO</h4>
              <p>Effortless Fashion</p>
              <strong>Min. 60% Off</strong>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="brand-card">
            <img src="https://img.mensxp.com/media/content/2021/Apr/1aa_608bcbdaa7edc.jpeg" alt="FableStreet + Globus" className="brand-img" />
            <div className="brand-info">
              <h4>FableStreet + Globus</h4>
              <p>Modern Elegance</p>
              <strong>Min. 50% Off</strong>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="brand-card">
            <img src="https://i.pinimg.com/736x/14/b8/6e/14b86e3fa5901689db983aee6697b4d8.jpg" alt="Chikankari + Rain & Rainbow" className="brand-img" />
            <div className="brand-info">
              <h4>Chikankari + Rain & Rainbow</h4>
              <p>Shine with Confidence</p>
              <strong>Min. 30% Off</strong>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="brand-card">
            <img src='https://cdn0.weddingwire.in/article/9648/original/960/jpg/8469-kurta-pajama-with-jacket-for-wedding-sabyasachi-sherwani-style-kurta-pajama.jpeg' alt="Chikankari + Rain & Rainbow" className="brand-img" />
            <div className="brand-info">
              <h4>Kurta</h4>
              <p>New Design Branded</p>
              <strong>Min. 30% Off</strong>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="brand-card">
            <img src='https://image.dhgate.com/0x0s/f2-albu-g5-M00-D7-D7-rBVaJFlp3nKAWDIMAAIBwAY8pPM635.jpg/new-fancy-dress-custom-dress-2017-noble-wine.jpg' alt="Chikankari + Rain & Rainbow" className="brand-img" />
            <div className="brand-info">
              <h4>New Fungy Dress</h4>
              <p>Shine with Confidence</p>
              <strong>Min. 30% Off</strong>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="brand-card">
            <img src='https://d2x02matzb08hy.cloudfront.net/img/project_photo/image/10224562/50316/Untitled_design__17_.jpg' alt="Chikankari + Rain & Rainbow" className="brand-img" />
            <div className="brand-info">
              <h4>Crop Tops</h4>
              <p>Shine with Confidence</p>
              <strong>Min. 30% Off</strong>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default RisingStars;
