import './App.css';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import video from "./Background.mp4";

function App() {
    return (
        <div className="App">
            <video autoPlay muted loop>
                <source src={video} type="video/mp4"/>
            </video>
            <div className="overlay"/>
            <div className="background">
                <section className="content one">
                    <h1>Section 1</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
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
