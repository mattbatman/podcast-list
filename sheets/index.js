const fs = require('fs').promises;
const path = require('path');
const process = require('process');
const {authenticate} = require('@google-cloud/local-auth');
const {google} = require('googleapis');
const config = require('./config');

// If modifying these scopes, delete token.json.
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly'];
// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.
const TOKEN_PATH = path.join(process.cwd(), 'sheets/token.json');
const CREDENTIALS_PATH = path.join(process.cwd(), 'sheets/credentials.json');

/**
 * Reads previously authorized credentials from the save file.
 *
 * @return {Promise<OAuth2Client|null>}
 */
async function loadSavedCredentialsIfExist() {
  try {
    const content = await fs.readFile(TOKEN_PATH);
    const credentials = JSON.parse(content);
    return google.auth.fromJSON(credentials);
  } catch (err) {
    return null;
  }
}

/**
 * Serializes credentials to a file comptible with GoogleAUth.fromJSON.
 *
 * @param {OAuth2Client} client
 * @return {Promise<void>}
 */
async function saveCredentials(client) {
  const content = await fs.readFile(CREDENTIALS_PATH);
  const keys = JSON.parse(content);
  const key = keys.installed || keys.web;
  const payload = JSON.stringify({
    type: 'authorized_user',
    client_id: key.client_id,
    client_secret: key.client_secret,
    refresh_token: client.credentials.refresh_token,
  });
  await fs.writeFile(TOKEN_PATH, payload);
}

/**
 * Load or request or authorization to call APIs.
 *
 */
async function authorize() {
  let client = await loadSavedCredentialsIfExist();
  if (client) {
    return client;
  }
  client = await authenticate({
    scopes: SCOPES,
    keyfilePath: CREDENTIALS_PATH,
  });
  if (client.credentials) {
    await saveCredentials(client);
  }
  return client;
}

/**
 * Writes the quotes as a JSON file 
 * @param {google.auth.OAuth2} auth The authenticated Google OAuth client.
 */
async function writePodcasts(auth) {
  const sheets = google.sheets({version: 'v4', auth});
  sheets.spreadsheets.values.get({
    spreadsheetId: config.spreadsheetId,
    range: config.range,
  }, (err, res) => {
      if (err) return console.log('The API returned an error: ' + err);
      
      const zippedData = processData(res.data.values);
      
      const json = JSON.stringify(zippedData);
      
      fs.writeFile(config.outputPath, json, 'utf8', error => console.error(error));
  });
}

/**
 * Zips all data as an array of objects using the `data`'s first row as keys in each object
 * @param {string[][]} data The Google sheet data as an array of an array of strings 
 */
function processData(data) {
  const payload = [];

  const dataKeys = data[0];
  const dataLength = data.length;
  const rowLength = dataKeys.length;

  for (let i = 1; i < dataLength; i++) {
    const row = data[i];
    const zippedRow = {};
    
    for (let j = 0; j < rowLength; j++) {
      zippedRow[dataKeys[j]] = row[j];
    }
    
    payload.push(zippedRow);
  }

  return payload;
}

authorize().then(writePodcasts).catch(console.error);