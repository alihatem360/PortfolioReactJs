import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./swiper.css";
import { EffectCoverflow, Pagination, Navigation } from "swiper";
import { useTranslation } from "react-i18next";
import PojectItem from "../../projects/components/projectItem";
import LoaderCom from "../LoaderCom";
import GetAllData from "../../../data/projects";
const OurTeamCom = () => {
  const { t, i18n } = useTranslation();

  const { getProjects, getSocials, getAboutme, getSkills } = GetAllData();
  const [projectsDta, setProjectsData] = useState([]);
  useEffect(() => {
    getProjects().then((data) => {
      setTimeout(() => {
        setProjectsData(data[0]);
      }, 2000);
    });
  }, [i18n.language]);

  return (
    <div className="container">
      {projectsDta.length > 0 ? (
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
          {projectsDta.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <PojectItem project={item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      ) : (
        <LoaderCom />
      )}
    </div>
  );
};

export default OurTeamCom;
