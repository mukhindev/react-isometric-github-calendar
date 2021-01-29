import React from 'react';

interface IGitHubCalendar {
  totalContributions?: number
  months?: any[]
  weeks?: any[]
  className?: string
}

const GitHubCalendar: React.FC<IGitHubCalendar> = (props) => {
  const {
    className = '',
    totalContributions,
    months,
    weeks
  } = props;

  if (!totalContributions || !months || !weeks ) return null

  const mix: string = !!className ? ` ${className}` : '';

  return (
    <div className={'github-calendar' + mix}>
      
    </div>
  );
};

export default GitHubCalendar;
