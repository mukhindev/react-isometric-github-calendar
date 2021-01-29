import { GITHUB_GRAPHQL, GITHUB_LOGIN, GITHUB_KEY } from './constants';

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

const githubApi = {
  getCalendarData: async () => {
    if (!GITHUB_GRAPHQL) throw new Error('GITHUB_GRAPHQL variable not defined in .env file');
    if (!GITHUB_LOGIN) throw new Error('GITHUB_LOGIN variable not defined in .env file');
    if (!GITHUB_KEY) throw new Error('GITHUB_KEY variable not defined in .env file');
    const response = await fetch(GITHUB_GRAPHQL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${GITHUB_KEY}`
      },
      body: getQuery(GITHUB_LOGIN)
    });
    return response.json();
  }
};

export default githubApi;