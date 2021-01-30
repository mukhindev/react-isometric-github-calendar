# react-isometric-github-calendar

<img src="./doc/assets/calendar.png" alt="Isometric Github Calendar" width="480px">

## Demo

https://mukhindev.github.io/react-isometric-github-calendar/

## What's it?

Isometric Github Calendar with SVG and React.

## Нow to try?

* Rename file `.env.example` to `.env`. Add your login and token* from GitHub.
* Run `npm start` for developer mode.

| :warning: Attention! Use only the public GihHub token. Better yet, move the api request to the proxy server. |
| --- |

## Best way

* Create a proxy server that will return data from the GitHub Api.

  GraphQL query:

  ```graphql
  query {
    user(login: "login") {
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
  }
  ```

* Add `REACT_APP_PROXY_GITHUB_CALENDAR` variable to `.env`. Assign url to proxy.
* Remove other variables

© Sergey Mukhin 2021 @mukhindev