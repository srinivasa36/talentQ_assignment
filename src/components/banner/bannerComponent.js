import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./bannerComponent.module.css";

const BannerComponent = ({ banners }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className={styles["banner-container"]}>
      <Slider {...settings}>
        {banners.map((banner) => (
          <div className={styles["banner-item"]} key={banner.id}>
            <p>{banner.text}</p>
            {banner.button && (
              <a href={banner.link}>
                <button>{banner.btn_name}</button>
              </a>
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BannerComponent;
