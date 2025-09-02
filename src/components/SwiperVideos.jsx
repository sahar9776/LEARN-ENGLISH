import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { videoList } from "../asstes/data/db";

function SwiperVideos() {
  const videoRefs = useRef([]);

  const handleSlideChange = (swiper) => {
    //All video Pause
    videoRefs.current.forEach((video) => video && video.pause());
    // current video Play
    // const currentIndex = swiper.realIndex;

    // if (videoRefs.current[currentIndex]) {
    //   videoRefs.current[currentIndex].play();
    // }
  };

  useEffect(() => {
    // First video play
    if (videoRefs.current[0]) videoRefs.current[0].play();
  }, []);

  return (
    <div className="w-full max-w-full h-full max-h-full">
      <Swiper
        modules={[Navigation]}
        navigation
        loop={true}
        onSlideChange={handleSlideChange}
        spaceBetween={20}
        slidesPerView={1}
      >
        {videoList.map((item, index) => (
          <SwiperSlide key={item.id}>
            <div className="overflow-hidden rounded-lg shadow-lg">
              <video
                src={item.src}
                type="video/mp4"
                controls
                className="w-full h-56 md:h-80 object-cover"
                ref={(el) => (videoRefs.current[index] = el)}
                muted="muted"
                preload="none"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SwiperVideos;
