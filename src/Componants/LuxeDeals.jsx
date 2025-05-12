import React from 'react';
import './LuxeDeals.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const LuxeDeals = () => {
  return (
    <div className="luxe-deals">
      <h2 className="section-title">LUXE GRAND REDUCTION DEALS</h2>

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
          1280: { slidesPerView: 4.5 },
        }}
        className="swiper-container"
      >
        <SwiperSlide>
          <div className="deal-card">
            <img src="https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https://substack-post-media.s3.amazonaws.com/public/images/71dfc3bd-52a8-4baf-8d36-e3eea7767581_1170x834.jpeg" alt="Forest Essentials" />
            <div className="deal-info">
              <h4>FOREST ESSENTIALS™</h4>
              <p>FREE GIFT WITH PURCHASE</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="deal-card">
            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/c27d23154192569.633d9ac7d9275.jpg" alt="Kama Ayurveda" />
            <div className="deal-info">
              <h4>KAMA AYURVEDA</h4>
              <p>B2G1 + FLAT 15% OFF</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="deal-card">
            <img src="https://tse2.mm.bing.net/th?id=OIP.YROgedj-p1mraaNYkb5B8gAAAA&pid=Api&P=0&h=180" alt="Philipp Plein" />
            <div className="deal-info">
              <h4>PHILIPP PLEIN</h4>
              <p>UP TO 50% OFF</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="deal-card">
            <img src="https://i.pinimg.com/originals/2a/93/34/2a9334a22e4b6f10981391b0c83e5ef1.jpg" alt="Chopard" />
            <div className="deal-info">
              <h4>CHOPARD</h4>
              <p>UP TO 50% OFF</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="deal-card">
            <img src="https://image.isu.pub/220826205225-bc1f1c9df7251ff4027bc6974a388f43/jpg/page_1.jpg" alt="Swarovski" />
            <div className="deal-info">
              <h4>SWAROVSKI</h4>
              <p>UP TO 30% OFF</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="deal-card">
            <img src="https://static.wixstatic.com/media/b52b2f_24559dee129849ef88df18c7a2c68700~mv2.jpg/v1/fill/w_1000,h_1000,al_c,q_85,usm_0.66_1.00_0.01/b52b2f_24559dee129849ef88df18c7a2c68700~mv2.jpg" alt="Kay Ali" />
            <div className="deal-info">
              <h4>KAY ALI</h4>
              <p>GIFT ON ALL ORDERS</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default LuxeDeals;
