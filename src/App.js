import './App.css';
import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import videoCover from "./videos/Cover.mp4";
import AOS from 'aos';
import 'aos/dist/aos.css';
// import thoran from "./images/thoran.png";
import mala1 from "./images/elements/mala1.png";
import mala2 from "./images/elements/mala2.png";
import mala3 from "./images/elements/mala3.png";
import hangingFlower1 from "./images/elements/hangingFlower1.png";
import hangingFlower2 from "./images/elements/hangingFlower2.png";
import bell from "./images/elements/bell.png";
import leaf1 from "./images/elements/leaf1.png";
import leaf2 from "./images/elements/leaf2.png";
import leaf3 from "./images/elements/leaf3.png";

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
        this.state = {textDisplay: true};
        this.transitionContext = this.transitionContext.bind(this);
    }

    transitionContext() {
        this.setState({textDisplay: true});
    }

    render() {
        return (
            <div className="App">
                <div id="cover" className={this.state.textDisplay ? 'hide' : ''}>
                    <video playsInline autoPlay muted
                           className={this.state.textDisplay ? 'hide' : ''}
                           onEnded={this.transitionContext}>
                        <source src={videoCover} type="video/mp4"/>
                    </video>
                    <div className={this.state.textDisplay ? 'hide coverBackground' : 'coverBackground'}>
                        <section className="content">
                            <h1>Introduction</h1>
                        </section>
                    </div>
                </div>
                {this.state.textDisplay &&
                    <Invite/>
                }
            </div>
        );
    }
}

function Invite() {
    return (
        <div className="invite">
            <div className="animatedBackground">
                <div className="background"
                     data-aos="fade-in"
                     data-aos-easing="ease-in"
                     data-aos-delay="500"
                     data-aos-duration="1000"
                >
                    <img src={mala1} alt="" className="mala mala1"/>
                    <img src={mala2} alt="" className="mala mala2"/>
                    <img src={mala3} alt="" className="mala mala3"/>
                </div>
                <div className="background layer2"
                     data-aos="fade-in"
                     data-aos-easing="ease-in"
                     data-aos-delay="500"
                     data-aos-duration="1000"
                >
                    <img src={bell} alt="" className="bell bell1"/>
                    <img src={bell} alt="" className="bell bell2"/>
                </div>
                <div className="background layer3"
                     data-aos="fade-in"
                     data-aos-easing="ease-in"
                     data-aos-delay="500"
                     data-aos-duration="1000"
                >
                    <img src={hangingFlower1} alt="" className="hangingFlower hF1"/>
                    <img src={hangingFlower2} alt="" className="hangingFlower hF2"/>
                </div>
                <div className="footerBackground"
                    data-aos="slide-up"
                    data-aos-offset="200"
                    data-aos-duration="2000"
                    data-aos-anchor-placement="top-bottom"
                >
                    <img src={leaf1} alt="" className="leaf leaf1"/>
                    <img src={leaf3} alt="" className="leaf leaf3"/>
                    <img src={leaf2} alt="" className="leaf leaf2"/>
                </div>
            </div>
            <div className="foreground"
                 data-aos="slide-up"
                 data-aos-offset="200"
                 data-aos-duration="2000"
                 data-aos-anchor-placement="top-bottom"
            >

                <section className="content one">
                    <h1>Section 1</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt
                        ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit
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
        </div>
    );
}

export default App;
