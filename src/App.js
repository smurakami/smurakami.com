import React, { Component } from 'react';
// import EventListener from 'react-event-listener';
import { BrowserRouter, Route, Link } from 'react-router-dom'

import QR from './QR';
import {TopTriangle, BottomTriangle} from './Triangles'
import Works from './Works'

import './App.css';

const App = () => (
  <BrowserRouter>
    <div className='App'>
      <Route exact path='/' component={Top} />
      <Route exact path='/en' component={TopEnglish} />
      <Route path='/qr' component={QR} />
      {/* <Route path='/works/:index' component={Work} /> */}
    </div>
  </BrowserRouter>
);

class Top extends Component {
  render() {
    return (
      <div className="App">
        <Title></Title>
        <Statement lang="ja"></Statement>
        <Works lang="ja"></Works>
        <History lang="ja"></History>
      </div>
    );
  }
}

class TopEnglish extends Component {
  render() {
    return (
      <div className="App">
        <Title></Title>
        <Statement lang="en"></Statement>
        <Works lang="en"></Works>
        <History lang="en"></History>
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
        <div className="dot-pattern-inner">
        </div>
      </div>
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
  )
};


const Statement = (props) =>  {
  const {lang} = props;
  const SBR = () => (<br className='hide-on-med-and-up' />)

  return (
    <div className="Statement">
      <div className="container">
        <p className="title code">{'> make $you smile;'}</p>
          {
            lang == "ja" ?
            <div className="statement">
              <p>三度の飯くらいプログラミングが<SBR />好きなサラリーマンが、</p>
              <p>アイデアの力でどこまで飛べるのか。</p>
              <p>最近仲間になった<SBR />「ディープラーニング」を携えて、</p>
              <p>今日も考え、作り、動かす。</p>
            </div>
            :
            <div className="statement">
              <p>I love programming as much as sushi🍣</p>
              <p>"How high can we jump with techonology and creative thinking?"</p>
              <p>I am trying to find answer to this question.</p>
              <p>I will keep thinking, creating, executing everyday!</p>
            </div>
          }
      </div>
    </div>
  )
};

const History = (props) => {
  const {studies, experiences} = require('./data/history');
  const {lang} = props;

  const makeStudyCard = (data, index) => {
    var text = data.text;
    if (lang == "en" && (data.text_en)) {
      text = data.text_en;
    } 

    var title = data.title;
    if (lang == "en" && (data.title_en)) {
      title = data.title_en;
    } 

    var place = data.place;
    if (lang == "en" && (data.place_en)) {
      place = data.title_en;
    } 

    return (
      <div className="elem col s12 m6 l4" key={index}>
        <div className="card blue-grey darken-4">
          <div className="card-content">
            <span className="card-title">{title}</span>
            <p className='time'>{data.time}</p>
            <p className='place' dangerouslySetInnerHTML={{__html: place}}></p>
            <p className='text'>{text}</p>
          </div>
        </div>
      </div>
    )
  }

  const makeExperienceCard = (data, index) => {
    var text = data.text;
    if (lang == "en" && (data.text_en)) {
      text = data.text_en;
    } 

    var title = data.title;
    if (lang == "en" && (data.title_en)) {
      title = data.title_en;
    } 

    return (
      <div className="elem col s12 m6 l4" key={index}>
        <div className="card blue-grey darken-4">
          <div className="card-content">
            <span className="card-title">{title}</span>
            <p className='time'>{data.time}</p>
            <p className='text'>{data.job}</p>
          </div>
        </div>
      </div>
    )
  }


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
