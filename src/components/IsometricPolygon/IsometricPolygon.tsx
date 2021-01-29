import React from 'react';
import isometricEngine from '../../utils/isometric-engine'
import './IcometricPolygon.css'

interface IIsometricPolygon {
  points: any[]
  color: any
  className?: string
}

const IsometricPolygon: React.FC<IIsometricPolygon> = (props) => {
  const {
    className = '',
    points,
    color
  } = props;

  const mix: string = !!className ? ` ${className}` : '';

  const getPolygonPoints = (points: any) => {
    let result = ''
    for (const i in points) {
      const { x, y, z } = points[i]
      const points2D = isometricEngine.convert({ x, y, z })
      result = `${result} ${points2D.a},${points2D.b}`.trim()
    }
    return result
  }

  return (
    <polygon
      className={'isometric-polygon' + mix}
      points={ getPolygonPoints(points) }
      fill={ color }
      stroke="black"
    />
  );
};

export default IsometricPolygon;
