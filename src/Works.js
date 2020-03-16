import React, { Component } from 'react';
import {TopTriangle, BottomTriangle} from './Triangles'

class Works extends Component {
  handleResize() {this.setState({}); }
  render() {
    const {works} = require('./data/works');
    const {lang} = this.props;

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


    return (
      <div className="Works">
        <Background></Background>
        <BottomTriangle color='#2c3e50'></BottomTriangle>
        <div className="workscontainer">
          <p className="title code">WORKS</p>
          <div className="row flex">
            {works.map((work, index) => <Work work={work} index={index} lang={lang}></Work>)}
          </div>
        </div>
        <TopTriangle color='#2c3e50' />
      </div>
      )
  }
}

function Work(props) {
  const {work, index, lang} = props
  var link = 'javascript:void(0)';
  var action = (<div></div>);
  if (work.link) {
    link = work.link;
    action = (
      <div className="card-action red-text text-lighten-2 waves-effect waves-red">
        LINK
      </div>
    )
  }

  var text = work.text;
  if (lang == "en" && (work.text_en)) {
    text = work.text_en;
  } 

  var title = work.title;
  if (lang == "en" && (work.title_en)) {
    title = work.title_en;
  } 

  return (
    <div className="work col s12 m6 l4" key={index}>
      <div className="card">
        <div className="card-image">
          <img src={work.image} />
        </div>
        <div className="card-content">
          <span className="card-title">{title}</span>
          <p>{text}</p>
        </div>
        <a href={link}>
          {action}
        </a>
      </div>
    </div>
  )}

  export default Works;