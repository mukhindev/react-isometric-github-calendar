import {
  PROXY_GITHUB_CALENDAR,
  GITHUB_GRAPHQL,
  GITHUB_LOGIN,
  GITHUB_KEY,
} from './constants';

const getQuery = (login: string) => JSON.stringify({
  query: `query {
    user(login: "${login}") {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          months {
            name
            totalWeeks
            year
            firstDay
          }
          weeks {
            contributionDays {
              color
              contributionCount
              date
              weekday
            }
            firstDay
          }
        }
      }
    }
  }`,
});

const getFromProxyGitHubCalendar = async () => {
  if (!PROXY_GITHUB_CALENDAR) throw new Error('REACT_APP_PROXY_GITHUB_CALENDAR variable not defined in .env file');
  return await fetch(PROXY_GITHUB_CALENDAR)
}

const getFromGitHubApi = async () => {
  if (!GITHUB_GRAPHQL) throw new Error('REACT_APP_GITHUB_GRAPHQL variable not defined in .env file');
  if (!GITHUB_LOGIN) throw new Error('REACT_APP_GITHUB_LOGIN variable not defined in .env file');
  if (!GITHUB_KEY) throw new Error('REACT_APP_GITHUB_KEY variable not defined in .env file');
  return await fetch(GITHUB_GRAPHQL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${GITHUB_KEY}`
    },
    body: getQuery(GITHUB_LOGIN)
  });
}

const githubApi = {
  getCalendarData: async () => {
    if (PROXY_GITHUB_CALENDAR) {
      const response = await getFromProxyGitHubCalendar();
      return response.json();
    } else {
      const response = await getFromGitHubApi();
      return response.json();
    }
  }
};

export default githubApi;
