import React from 'react';
import IsometricBox from '../IsometricBox/IcometricBox'
import {
  BOX_SIZE_X, BOX_SIZE_Y,
  BOX_GAP_X, BOX_GAP_Y, 
  BOX_START_HEIGHT, BOX_HEIGHT_MULTIPLIER
} from '../../utils/constants'
import './GithubDay.css'

interface IGithubDay {
  dayIndex: number
  weekIndex: number
  contributionCount: number
  className?: string
}

const GithubDay: React.FC<IGithubDay> = (props) => {
  const {
    className = '',
    weekIndex,
    dayIndex,
    contributionCount
  } = props;

  const mix: string = !!className ? ` ${className}` : '';

  const getPosition = () => ({
    x: dayIndex * (BOX_SIZE_X + BOX_GAP_X), 
    y: weekIndex * (BOX_SIZE_Y + BOX_GAP_Y), 
    z: 0
  })

  const getSize = () => ({
    x: BOX_SIZE_X,
    y: BOX_SIZE_Y,
    z: BOX_START_HEIGHT + contributionCount * BOX_HEIGHT_MULTIPLIER
  })

  const getColors = () => {
    if (contributionCount === 0) return ['#C7C7C7', '#DEDEDE', '#F1F1F1']
    if (contributionCount < 7) return ['#B9C874', '#CBD888', '#DCEA9B']
    if (contributionCount < 13) return ['#70AA53', '#84BC68', '#98CE7C']
    if (contributionCount < 21) return ['#008A25', '#2B9D3D', '#48B056']
    if (contributionCount >= 21) return ['#004F08', '#006417', '#157933']
    return ['#004F08', '#006417', '#157933']
  }

  return (
    <g className={'github-day' + mix}>
      <IsometricBox
        position={ getPosition() }
        size={ getSize() }
        colors={ getColors() }
      />
    </g>
  );
};

export default GithubDay;
