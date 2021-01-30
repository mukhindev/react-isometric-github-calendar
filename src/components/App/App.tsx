import { useCallback, useEffect, useState } from 'react';
import GitHubCalendar from '../GithubCalendar/GithubCalendar';
import githubApi from '../../utils/github-api'
import './App.css';

function App() {
  const [calendarData, setCalendarData] = useState({} as any);

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
        totalContributions={ calendarData?.totalContributions }
        months={ calendarData?.months }
        weeks={ calendarData?.weeks }
      />
    </div>
  );
}

export default App;
