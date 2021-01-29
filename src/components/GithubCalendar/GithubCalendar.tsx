import React from 'react';
import GithubWeek from '../GithubWeek/GithubWeek';
import './GithubCalendar.css'

interface IGithubCalendar {
  totalContributions?: number
  months?: any[]
  weeks?: any[]
  className?: string
}

const GithubCalendar: React.FC<IGithubCalendar> = (props) => {
  const {
    className = '',
    totalContributions,
    months,
    weeks
  } = props;

  if (!totalContributions || !months || !weeks ) return <div>Загрузка ...</div>

  const mix: string = !!className ? ` ${className}` : '';

  return (
    <div className={'github-calendar' + mix}>
      <svg
        className="github-calendar__svg"
        viewBox={`-320 -120 ${1980} ${1155}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        {weeks.length && weeks.map((week, index) => (
          <GithubWeek
            days={ week?.contributionDays }
            weekIndex= { index }
            key={ index } 
          />
        ))}
      </svg>
    </div>
  );
};

export default GithubCalendar;
