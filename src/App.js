import './App.css';
import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import videoCover from "./Cover.mp4";
import videoBackground from "./BackgroundDroneVideo.mp4";
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();
AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});
class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {textDisplay: false};
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({textDisplay: true});
        }, 3000);
    }

    render() {
        return (
            <div className="App">
                    <video className={this.state.textDisplay ? 'hide' : ''} autoPlay muted loop >
                        <source src={videoCover} type="video/mp4"/>
                    </video>
                {this.state.textDisplay &&
                    <div className="background"
                         data-aos="slide-up"
                         data-aos-offset="200"
                         data-aos-duration="2000"
                         data-aos-anchor-placement="top-bottom"
                    >
                        <video autoPlay muted loop className="droneVideo">
                            <source src={videoBackground} type="video/mp4"/>
                        </video>
                        <section className="content one">
                            <h1>Section 1</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                                in
                                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat
                                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </section>

                        <section className="content">
                            <button className="viewButton">View</button>
                        </section>

                        <section className="content">
                            <p className="room-content">Section 3</p>
                        </section>

                        <section className="content">
                            <p className="room-content">Section 4</p>
                        </section>

                        <section className="content">
                            <p className="room-content">Section 5</p>
                        </section>

                        <section className="content">
                            <p className="room-content">Section 6</p>
                        </section>

                        <section className="content">
                            <p className="room-content">Section 7</p>
                        </section>
                    </div>
                }
            </div>
        );
    }
}

export default App;
