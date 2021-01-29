import { useCallback, useEffect, useState } from 'react';
import GitHubCalendar from '../GithubCalendar/GithubCalendar';
import githubApi from '../../utils/github-api'
import './App.css';

function App() {
  const [calendarData, setCalendarData] = useState({} as any);
  const { totalContributions, months, weeks } = calendarData

  const fecthCalendarData = useCallback(async () => {
    const { data } = await githubApi.getCalendarData();
    setCalendarData(data?.user?.contributionsCollection?.contributionCalendar);
  }, [])

  useEffect(() => {
    fecthCalendarData()
  }, [fecthCalendarData])

  return (
    <div className="app">
      <GitHubCalendar
        className="app__github-calendar"
        totalContributions={ totalContributions }
        months={ months }
        weeks={ weeks }
      />
    </div>
  );
}

export default App;
