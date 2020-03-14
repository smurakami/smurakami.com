import React, { Component } from 'react';

export const TopTriangle = (props) => {
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
    position: 'relative',
  }
  return (
    <svg viewBox={[0, 0, width, height].join(' ')} style={style}>
      <polygon points={points.join(',')} stroke="none" fill={color} />
    </svg>
    )
}

export const BottomTriangle = (props) => {
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
