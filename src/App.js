import './App.css';
import React from 'react';
import videoCover from "./videos/Cover.mp4";
import background3 from "./images/background3.png";
import toran from './images/Toran.png';
import mala1 from "./images/elements/mala1.png";
import mala2 from "./images/elements/mala2.png";
import mala3 from "./images/elements/mala3.png";
// import hangingFlower1 from "./images/elements/hangingFlower1.png";
// import hangingFlower2 from "./images/elements/hangingFlower2.png";
import leaf1 from "./images/elements/leaf1.png";
import leaf2 from "./images/elements/leaf2.png";
import leaf3 from "./images/elements/leaf3.png";
import leaf5 from "./images/elements/leaf5.png";
import leaf6 from "./images/elements/leaf6.png";
import PC1 from "./images/PageContent1.PNG";

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
                           className={this.state.textDisplay ? 'hide coverVideo' : 'coverVideo'}
                           onEnded={this.transitionContext}
                    >
                        <source src={videoCover} type="video/mp4"/>
                    </video>
                </div>
                {this.state.textDisplay &&
                    <Invite/>
                }
            </div>
        )
    };
}

function Invite() {
    return(
        <div className="invite">
            <img src={background3} alt="" className="coloredBackground"/>
            <div className="animatedBackground">
                <img src={toran} alt="" className="malaLayer"/>
                <img src={PC1} alt="" className="PC1"/>
                {/*<div className="malaLayer">*/}
                {/*    <img src={mala1} alt="" className="mala mala1"/>*/}
                {/*    <img src={mala2} alt="" className="mala mala2"/>*/}
                {/*    /!*<img src={mala3} alt="" className="mala mala3"/>*!/*/}
                {/*</div>*/}
                {/*<div className="hangingFlowerLayer">*/}
                {/*    <img src={hangingFlower1} alt="" className="hangingFlower hF1"/>*/}
                {/*    <img src={hangingFlower2} alt="" className="hangingFlower hF2"/>*/}
                {/*</div>*/}
                <div className="footerBackground">
                    <img src={leaf1} alt="" className="leaf leaf1"/>
                    <img src={leaf2} alt="" className="leaf leaf2"/>
                    <img src={leaf3} alt="" className="leaf leaf3"/>
                    <img src={leaf1} alt="" className="leaf leaf4"/>
                    <img src={leaf5} alt="" className="leaf leaf5"/>
                    <img src={leaf6} alt="" className="leaf leaf6"/>
                </div>
            </div>
            {/*<div className="foreground">*/}
            {/*    <section className="content">*/}
            {/*        <h2 className="room-content">Section 1</h2>*/}
            {/*        /!*<img src={PC1} alt="" className="one"/>*!/*/}
            {/*    </section>*/}

            {/*    <section className="content">*/}
            {/*        <h2 className="room-content">Section 2</h2>*/}
            {/*        /!*<button className="viewButton">View</button>*!/*/}
            {/*    </section>*/}

            {/*    <section className="content">*/}
            {/*        <h2 className="room-content">Section 3</h2>*/}
            {/*    </section>*/}
            {/*</div>*/}
        </div>
    )
}

export default App;
