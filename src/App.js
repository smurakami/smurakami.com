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

const Utils = {
  sectionBorderHeight: () => window.innerWidth * Math.tan(Math.PI/12),
  sectionBorderWidth: () => window.innerWidth,
}

class Title extends Component {
  constructor(props) {
    super(props)
    this.timer = null;

    this.state = {
      logo_height: 300,
    }
  }

  componentDidMount() {
    if (this.timer) { clearTimeout(this.timer) }
    this.timer = setTimeout(() => {
      this.setState({logo_height: this.refs.logo.clientHeight})
    }, 100)
  }

  handleResize() {
    this.setState({
    }, () => {
      if (this.timer) { clearTimeout(this.timer) }
      this.timer = setTimeout(() => {
        this.setState({logo_height: this.refs.logo.clientHeight})
      }, 1000)
    })
  }

  render() {
    const {logo_height} = this.state;

    console.log(logo_height)

    const title_style = {
      backgroundImage: 'url(/images/profile.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: window.innerHeight + Utils.sectionBorderHeight(),
    };

    const dot_style = {
      paddingTop: window.innerHeight * 0.5 - logo_height/2,
      width: '100%',
      height: '100%',
      backgroundImage: 'url(/images/dot_pattern.png)',
      backgroundSize: '20px',
    }

    return (
      <div className="Title" style={title_style}>
        <EventListener target="window" onResize={this.handleResize.bind(this)} />
        <div className="dot-pattern" style={dot_style}>
          <div className="container">
            <div className="logo" ref='logo'>
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
        </div>
      </div>
      )
  }
}

const TopTriangle = () => {
  const style = {
    position: 'absolute',
    top: -Utils.sectionBorderHeight(),
    zIndex: 2,
    width: 0,
    height: 0,
    borderLeft: `${Utils.sectionBorderWidth()}px solid transparent`,
    borderBottom: `${Utils.sectionBorderHeight()}px solid #2c3e50`,
  }
  return (<div style={style}></div>)
}

const BottomTriangle = () => {
  const style = {
    position: 'absolute',
    // top: Utils.sectionBorderHeight(),
    zIndex: 2,
    width: 0,
    height: 0,
    borderRight: `${Utils.sectionBorderWidth()}px solid transparent`,
    borderTop: `${Utils.sectionBorderHeight()}px solid #2c3e50`,
  }
  return (<div style={style}></div>)
}

class Statement extends Component {
  constructor(props) {
    super(props)
  }

  handleResize() {this.setState({}); }

  render() {
    return (
      <div className="Statement">
        <EventListener target="window" onResize={this.handleResize.bind(this)} />
        <TopTriangle></TopTriangle>
        <div className="container">
          <p className="title code">{'> make $you smile;'}</p>
          <div className="statement">
            <p>三度の飯くらいプログラミングが好きなサラリーマンが、</p>
            <p>アイデアの力でどこまで飛べるのか。</p>
            <p>最近仲間になった「ディープラーニング」を携えて、</p>
            <p>今日も考え、作り、動かす。</p>
          </div>
        </div>
        <BottomTriangle></BottomTriangle>
      </div>
      )
  }
}

class Works extends Component {
  handleResize() {this.setState({}); }
  render() {
    const {works} = require('./data/works');

    const makeWorkCard = (data, index) => {
      var link = 'javascript:void(0)';
      var action = (<div></div>);
      if (data.link) {
        link = data.link;
        action = (
          <div className="card-action red-text text-lighten-2">
            LINK
          </div>
        )
      }

      return (
        <div className="work col s12 m6" key={index}>
          <a href={link} className='disabled'>
            <div className="card">
              <div className="card-image">
                <img src={data.image} />
              </div>
              <div className="card-content">
                <span className="card-title">{data.title}</span>
                <p>{data.text}</p>
              </div>
              {action}
            </div>
          </a>
        </div>
      )}

    return (
      <div className="Works"style={{paddingTop: Utils.sectionBorderHeight(), paddingBottom: Utils.sectionBorderHeight()}}>
        <div className="container">
          <p className="title code">WORKS</p>
          <div className="row flex">
            {works.map(makeWorkCard)}
          </div>
        </div>
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


class History extends Component {
  handleResize() {this.setState({}); }

  render() {
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
        <EventListener target="window" onResize={this.handleResize.bind(this)} />
        <TopTriangle></TopTriangle>
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
  }
}

export default App;
