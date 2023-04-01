import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import projects from "../../../data/projects";
import PojectItem from "../../projects/projectItem";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import "./swiper.css";
import { EffectCoverflow, Pagination, Navigation } from "swiper";

const SwiperSlideCom = () => {
  const [projectsDta, setProjectsData] = useState([]);

  useEffect(() => {
    projects.getProjects().then((data) => {
      setProjectsData(data[0]);
    });
  }, []);

  return (
    <div className="container">
      <h1 className="heading">Projects ⚡</h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        {projectsDta.length !== 0 ? (
          projectsDta.map((project, index) => {
            return (
              <SwiperSlide key={index}>
                <PojectItem project={project} />
              </SwiperSlide>
            );
          })
        ) : (
          <SwiperSlide>
            <div className="d-flex justify-content-center align-items-center see-more">
              <Link
                to="/projects"
                className="text-decoration-none  btn button1 "
              >
                see more projects ✨
              </Link>
            </div>
          </SwiperSlide>
        )}

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <i class="fa-solid fa-arrow-left"></i>
          </div>
          <div className="swiper-button-next slider-arrow">
            <i class="fa-solid fa-arrow-right"></i>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
};

export default SwiperSlideCom;
