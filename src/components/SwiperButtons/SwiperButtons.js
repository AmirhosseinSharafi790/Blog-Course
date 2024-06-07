import "./SwiperButtons.css";
import { useSwiper } from "swiper/react";
import { MdOutlineKeyboardArrowRight , MdKeyboardArrowLeft } from "react-icons/md";

function SwiperButtons() {
  const btnSwiper = useSwiper();
  return (
    <>
      <div>
        <button className="btnStyle mx-2" onClick={() => btnSwiper.slidePrev()}>
          <MdOutlineKeyboardArrowRight size="30px" />
        </button>
        <button className="btnStyle mx-2" onClick={() => btnSwiper.slideNext()}>
          <MdKeyboardArrowLeft size="30px" />
        </button>
      </div>
    </>
  );
}
export default SwiperButtons;