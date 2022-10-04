import logo from './images/marigold.png';
import './App.css';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
function App() {
  return (
    <div className="App">
        {/*<img src={logo} className="logo App-logo1" alt="logo"/>*/}
        {/*<img src={logo} className="logo App-logo2"  alt="logo"/>*/}
        {/*<img src={logo} className="logo App-logo3"  alt="logo"/>*/}
        {/*<img src={logo} className="logo App-logo4"  alt="logo"/>*/}
        {/*<div className="imgBackground">*/}
        {/*    /!*<img className="slideImage" src="https://daks2k3a4ib2z.cloudfront.net/5774d31fd2e5f9b80c2ab39f/5774dbfea8dfa30f2163e0d6_3.jpg" alt="image1"/>*!/*/}
        {/*</div>*/}
        <button className="viewButton">View</button>
        {/*<div className="swiperDiv">*/}
        {/*    <Swiper*/}
        {/*        // install Swiper modules*/}
        {/*        modules={[Navigation, Pagination, Scrollbar, A11y]}*/}
        {/*        spaceBetween={50}*/}
        {/*        slidesPerView={3}*/}
        {/*        navigation*/}
        {/*        pagination={{ clickable: true }}*/}
        {/*        scrollbar={{ draggable: true }}*/}
        {/*        onSwiper={(swiper) => console.log(swiper)}*/}
        {/*        onSlideChange={() => console.log('slide change')}*/}
        {/*    >*/}
        {/*        <SwiperSlide>Slide 1</SwiperSlide>*/}
        {/*        <SwiperSlide>Slide 2</SwiperSlide>*/}
        {/*        <SwiperSlide>Slide 3</SwiperSlide>*/}
        {/*        <SwiperSlide>Slide 4</SwiperSlide>*/}
        {/*        ...*/}
        {/*    </Swiper>*/}
        {/*</div>*/}
    </div>
  );
}

export default App;
