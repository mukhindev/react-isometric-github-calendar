import React from 'react';
import { coordinates3d } from '../../utils/isometric-engine'
import IsometricPolygon from '../IsometricPolygon/IsometricPolygon';
import './IcometricBox.css'

interface IIcometricBox {
  position: coordinates3d
  size: coordinates3d
  colors: any[]
  className?: string
}

const IcometricBox: React.FC<IIcometricBox> = (props) => {
  const {
    className = '',
    position,
    size,
    colors = ['#C7C7C7', '#DEDEDE', '#F1F1F1']
  } = props;

  const mix: string = !!className ? ` ${className}` : '';

  const getPolygons = () => {
    return [
      [
        {x: size.x + position.x, y: position.y, z: position.z},
        {x: size.x + position.x, y: size.y + position.y, z: position.z},
        {x: size.x + position.x, y: size.y + position.y, z: size.z + position.z},
        {x: size.x + position.x, y: position.y, z: size.z + position.z},
      ],
      [
        {x: position.x, y: size.y + position.y, z: position.z},
        {x: size.x + position.x, y: size.y + position.y, z: position.z},
        {x: size.x + position.x, y: size.y + position.y, z: size.z + position.z},
        {x: position.x, y: size.y + position.y, z: size.z + position.z},
      ],
      [
        {x: position.x, y: position.y, z: size.z + position.z},
        {x: size.x + position.x, y: position.y, z: size.z + position.z},
        {x: size.x + position.x, y: size.y + position.y, z: size.z + position.z},
        {x: position.x, y: size.y + position.y, z: size.z + position.z}
      ]
    ]
  }

  return (
    <g className={'isometric-box' + mix}>
      {getPolygons().map((points, index) => (
        <IsometricPolygon
          points={ points }
          color= { colors[index] }
          key={ index }
        />
      ))}
    </g>
  );
};

export default IcometricBox;
