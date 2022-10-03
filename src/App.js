import './App.css';
import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import video from "./Background.mp4";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {textDisplay: false};
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({textDisplay: true})
        }, 3000);
    }

    render() {
        return (
            <div className="App">
                {!this.state.textDisplay &&
                    <video autoPlay muted loop>
                        <source src={video} type="video/mp4"/>
                    </video>
                }
                {this.state.textDisplay &&
                    <div className="background">
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
                    </div>}
            </div>
        );
    }
}

export default App;
