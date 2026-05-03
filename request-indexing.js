const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');

// Step 1: Place your service-account.json in the root directory
const keyPath = path.join(__dirname, 'service-account.json');

if (!fs.existsSync(keyPath)) {
  console.error('Error: service-account.json not found.');
  console.log('Please get your Service Account key from Google Cloud Console and save it as service-account.json');
  process.exit(1);
}

const key = require(keyPath);

const jwtClient = new google.auth.JWT(
  key.client_email,
  null,
  key.private_key,
  ['https://www.googleapis.com/auth/indexing'],
  null
);

const urls = [
  'https://www.mekongrivercruise.com/',
  'https://www.mekongrivercruise.com/terms-conditions',
  'https://www.mekongrivercruise.com/privacy-policy',
  'https://www.mekongrivercruise.com/discover',
  'https://www.mekongrivercruise.com/experiences',
  'https://www.mekongrivercruise.com/journeys'
];

async function requestIndexing() {
  try {
    await jwtClient.authorize();
    console.log('Authorized successfully.');

    for (const url of urls) {
      const options = {
        url: 'https://indexing.googleapis.com/v3/urlNotifications:publish',
        method: 'POST',
        data: {
          url: url,
          type: 'URL_UPDATED',
        },
      };

      const res = await jwtClient.request(options);
      console.log(`Indexing requested for: ${url} - Status: ${res.status}`);
    }
  } catch (err) {
    console.error('Indexing request failed:', err.message);
  }
}

requestIndexing();
