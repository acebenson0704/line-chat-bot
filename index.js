const line = require('@line/bot-sdk');
const express = require('express');
const dotenv = require('dotenv');
const getReplyMsgs = require('./reply-msgs');

dotenv.config();

// create LINE SDK config from env variables
const config = {
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
  channelSecret: process.env.CHANNEL_SECRET
};

const baseURL = process.env.BASE_URL;

// create Express app
const app = express();

app.use('/static', express.static('static'));

// register a webhook handler with middleware
app.post('/linewebhook', line.middleware(config), (req, res) => {
  Promise
    .all(req.body.events.map(handleEvent))
    .then((result) => res.json(result))
    .catch((err) => {
      console.error(err);
      res.status(500).end();
    });
});

// create LINE SDK client
const client = new line.Client(config);

// event handler
function handleEvent(event) {
  if (event.type !== 'message' || event.message.type !== 'text') {
    return Promise.resolve(null);
  }

  return handleText(event.message, event.replyToken);
}

function handleText(message, replyToken) {
  console.log("baseURL", baseURL);
  const msgs = getReplyMsgs(message.text, baseURL);
  console.log("msgs: ");
  console.log(msgs);
  return client.replyMessage(
    replyToken,
    msgs 
  );
}

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});
