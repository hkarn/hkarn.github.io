import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import WheelReact from 'wheel-react';
import SwipeReact from 'swipe-react';
import ArrowKeysReact from 'arrow-keys-react';

import {localizationInitialize} from './actions';
import IronImage from './components/ironimage';
import Computer from './images/pixabay/computer-1245714_1920.jpg';
import ComputerPre from './images/pixabay/computer-1245714_small.jpg';
import Me from './images/photos/me.png';

import TopMenu from './components/topmenu';

class App extends Component {
  constructor(props) {
    super(props);
    const {localizationInitialize = () => {}} = this.props;
    localizationInitialize();
    WheelReact.config({
      left: () => {
        console.log('wheel left detected.');
      },
      right: () => {
        console.log('wheel right detected.');
      },
      up: () => {
        console.log('wheel up detected.');
      },
      down: () => {
        console.log('wheel down detected.');
      }
    });
    SwipeReact.config({
      left: () => {
        console.log('Swipe left detected.');
      },
      right: () => {
        console.log('Swipe right detected.');
      },
      up: () => {
        console.log('Swipe up detected.');
      },
      down: () => {
        console.log('Swipe down detected.');
      }
    });
    ArrowKeysReact.config({
      left: () => {
        console.log('left key detected.');
      },
      right: () => {
        console.log('right key detected.');
      },
      up: () => {
        console.log('up key detected.');
      },
      down: () => {
        console.log('down key detected.');
      }
    });


  }

  componentDidMount() {
    this.topWrapper.focus();
  }

  componentWillUnmount() {
    WheelReact.clearTimeout();
    ArrowKeysReact.clearTimeout();
    SwipeReact.clearTimeout();
  }

  render() {
    return (
      <div className="App" style={{height: '100%'}}  {...WheelReact.events} {...SwipeReact.events} {...ArrowKeysReact.events} tabIndex="1" ref={(div) => { this.topWrapper = div; }} >
        <IronImage srcPreload={ComputerPre} srcLoaded={Computer} darken={.4} />
        <div className="MainWrapper">
          <TopMenu />
          <div className="MainContentWrapper">
            <div style={{color: '#fff', fontSize: '4em', fontWeight: 'bold', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
              <div style={{marginTop: '-20vh'}}>Hello</div>
              <img src={Me} alt="Håkan" style={{maxHeight: '20%', borderRadius: '20%'}}/>
            </div>
            <div style={{color: '#000', fontSize: '4em', fontWeight: 'bold'}}>Hello</div>
            <div style={{color: '#000', fontSize: '4em', fontWeight: 'bold'}}>Hello</div>
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  localizationInitialize:              PropTypes.func
};

const mapDispatchToProps = dispatch => bindActionCreators({
  localizationInitialize,
}, dispatch);

export default connect(null, mapDispatchToProps)(App);
