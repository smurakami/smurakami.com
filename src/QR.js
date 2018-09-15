import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'

import './App.css';

const QR = () => {
  return (
    <div className="QR">
      <div className="background">
        <div className="dot-pattern-inner"></div>
      </div>
      <div className="title">
        <div className="background"></div>
        <div className="container">
          <div className="logo">
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
      <div className="qrcode">
        <img src="/images/qrcode.png" alt="http://smurakami.com"/>
      </div>
      <div className="footer">
        <div className="background">
          
        </div>
      </div>
    </div>)
};

export default QR;

