# Podcast List

This is a website that lists podcast episodes I have found interesting.

It uses Create React App and the Google Sheets API.

## Getting Started

Install project dependencies:
```
npm install
```

### Google Sheets

The code that interacts with the Google Sheeets API can be found in the `sheets` directory and run with:

```
npm run fetch-podcasts
```

However,the spreadsheet I maintain is private. The sheets API will attempt to authenticate you, but it will fail.

To use this for yourself, create your own Google Sheet and see the [Google Sheets API documentation](https://developers.google.com/sheets/api).

### React

To run in development mode:
```
npm run start
```

Note that you will need to populate data to `src/data/podcasts.json`.

## Deployment

```
npm run deploy
```

The documentation for deploying to GitHub pages from Create React App was followed. See the [Create React App deployment documentation](https://create-react-app.dev/docs/deployment#github-pages).
