import React, { Component } from 'react';
import EventListener from 'react-event-listener';
import { BrowserRouter, Route, Link } from 'react-router-dom'

import './App.css';

// import logo_yoko from './images/logo_yoko.svg';
// import logo_tate from './images/logo_tate.svg';
// import profile_image from './images/profile.jpg'

const App = () => (
  <BrowserRouter>
    <div>
      <Route exact path='/' component={Top} />
      <Route path='/works/:index' component={Work} />
    </div>
  </BrowserRouter>
);

class Top extends Component {
  render() {
    return (
      <div className="App">
        <Title></Title>
        <Statement></Statement>
        <Works></Works>
        <History></History>
      </div>
    );
  }
}

const Title = () => {
  const title_style = {
    backgroundImage: 'url(/images/profile.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const logo_style = {
    height: window.innerHeight,
  }

  return (
    <div className="Title" style={title_style}>
      <div className="dot-pattern">
        <div className="container">
          <div className="logo" style={logo_style}>
            <img 
            className="hide-on-small-only" 
            src="/images/logo_yoko.svg"
            alt="ディープサラリーマン村上晋太郎" />
            <img 
            className="hide-on-med-and-up" 
            src="/images/logo_tate.svg"
            alt="ディープサラリーマン村上晋太郎" />
          </div>
        </div>
      <TopTriangle color='#2c3e50' />
      </div>
    </div>
  )
};

const TopTriangle = (props) => {
  const {color} = props;
  const width = 100;
  const height = width * Math.tan(Math.PI/12);
  const points = [
    0, height,
    width, height,
    width, 0,
  ]
  const style = {
    verticalAlign: 'bottom',
  }
  return (
    <svg viewBox={[0, 0, width, height].join(' ')} style={style}>
      <polygon points={points.join(',')} stroke="none" fill={color} />
    </svg>
    )
}

const BottomTriangle = (props) => {
  const {color} = props;
  const width = 100;
  const height = width * Math.tan(Math.PI/12);
  const points = [
    0, 0,
    width, 0,
    0, height,
  ]
  const style = {
    verticalAlign: 'top',
  }
  return (
    <svg viewBox={[0, 0, width, height].join(' ')} style={style}>
      <polygon points={points.join(',')} stroke="none" fill={color} />
    </svg>
    )
}

const Statement = () =>  {
  const SBR = () => (<br className='hide-on-med-and-up' />)

  return (
    <div className="Statement">
      <div className="container">
        <p className="title code">{'> make $you smile;'}</p>
        <div className="statement">
          <p>三度の飯くらいプログラミングが<SBR />好きなサラリーマンが、</p>
          <p>アイデアの力でどこまで飛べるのか。</p>
          <p>最近仲間になった<SBR />「ディープラーニング」を携えて、</p>
          <p>今日も考え、作り、動かす。</p>
        </div>
      </div>
    </div>
  )
};

class Works extends Component {
  handleResize() {this.setState({}); }
  render() {
    const {works} = require('./data/works');

    const Background = () => {
      var style = {
        position: 'fixed',
        width: '100%',
        height: '100%',
        top: 0,
        zIndex: -1,
        backgroundImage: 'url(/images/mft.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.25,
      }

      return (
        <div style={style}>
          <div className="dot-pattern"></div>
        </div>
        )
    }

    const makeWorkCard = (data, index) => {
      var link = 'javascript:void(0)';
      var action = (<div></div>);
      if (data.link) {
        link = data.link;
        action = (
          <div className="card-action red-text text-lighten-2 waves-effect waves-red">
            LINK
          </div>
        )
      }

      return (
        <div className="work col s12 m6 l4" key={index}>
          <div className="card">
            <div className="card-image">
              <img src={data.image} />
            </div>
            <div className="card-content">
              <span className="card-title">{data.title}</span>
              <p>{data.text}</p>
            </div>
            <a href={link}>
            {action}
            </a>
          </div>
        </div>
      )}

    return (
      <div className="Works">
        <Background></Background>
        <BottomTriangle color='#2c3e50'></BottomTriangle>
        <div className="workscontainer">
          <p className="title code">WORKS</p>
          <div className="row flex">
            {works.map(makeWorkCard)}
          </div>
        </div>
        <TopTriangle color='#2c3e50' />
      </div>
      )
  }
}

class Work extends Component {
  handleResize() {this.setState({}); }
  render() {
    return (
      <div className="Work">
      </div>
      )
  }
}


const History = () => {
  const {studies, experiences} = require('./data/history');

  const makeStudyCard = (data, index) => (
    <div className="elem col s12 m6 l4" key={index}>
      <div className="card blue-grey darken-4">
        <div className="card-content">
          <span className="card-title">{data.title}</span>
          <p className='time'>{data.time}</p>
          <p className='place' dangerouslySetInnerHTML={{__html: data.place}}></p>
          <p className='text'>{data.text}</p>
        </div>
      </div>
    </div>
    )

  const makeExperienceCard = (data, index) => (
    <div className="elem col s12 m6 l4" key={index}>
      <div className="card blue-grey darken-4">
        <div className="card-content">
          <span className="card-title">{data.title}</span>
          <p className='time'>{data.time}</p>
          <p className='text'>{data.job}</p>
        </div>
      </div>
    </div>
    )


  return (
    <div className="History">
      <div className="container">
        <p className="title code">STUDY</p>
        <div className="study">
          <div className="row flex">
            {studies.map(makeStudyCard)}
          </div>
        </div>
        <p className="title code">EXPERIENCE</p>
        <div className="study">
          <div className="row flex">
            {experiences.map(makeExperienceCard)}
          </div>
        </div>
      </div>
    </div>
  )
};

export default App;
