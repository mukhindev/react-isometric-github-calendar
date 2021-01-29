import React from 'react';
import GithubDay from '../GithubDay/GithubDay';
import './GithubWeek.css'

interface IGithubWeek {
  days: any[]
  weekIndex: number
  className?: string
}

const GithubWeek: React.FC<IGithubWeek> = (props) => {
  const {
    className = '',
    days,
    weekIndex
  } = props;

  const mix: string = !!className ? ` ${className}` : '';

  return (
    <g className={'github-week' + mix}>
      {days.length && days.map((day, index) => (
        <GithubDay
          dayIndex={ index }
          weekIndex={ weekIndex }
          contributionCount={ day.contributionCount }
          key={ index }
        />
      ))}
    </g>
  );
};

export default GithubWeek;
