const line = require('@line/bot-sdk');
const dotenv = require('dotenv');

dotenv.config();

// create LINE SDK config from env variables
const config = {
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
  channelSecret: process.env.CHANNEL_SECRET
};

// create LINE SDK client
const client = new line.Client(config);

const richMenu = {
  "size": {
    "width": 2500,
    "height": 843
  },
  "selected": false,
  "name": "richmenu",
  "chatBarText": "Menu",
  "areas": [
    {
      "bounds": {
        "x": 0,
        "y": 0,
        "width": 833,
        "height": 843
      },
      "action": {
        "type": "uri",
        "label": "Website",
        "uri": "https://portfolio-website-eta-three.vercel.app/"
      }
    },
    {
      "bounds": {
        "x": 833,
        "y": 0,
        "width": 833,
        "height": 843
      },
      "action": {
        "type": "message",
        "label": "About",
        "text": "about"
      }
    },
    {
      "bounds": {
        "x": 1666,
        "y": 0,
        "width": 833,
        "height": 843
      },
      "action": {
        "type": "uri",
        "label": "GitHub",
        "uri": "https://github.com/AceBenson"
      }
    }
 ]
};

const fs = require('fs');
// You can run all steps at once by async/await
// let richMenuId = 'richmenu-aa784f959f69b2440740ec3c07595dfa';

// Step1: Create rich menu
// client.createRichMenu(richMenu)
//   .then((id) => {
//     console.log("id: ", id);
//   })
//   .catch((err) => console.log(err));

// Step2: Upload rich menu image
// client.setRichMenuImage(richMenuId, fs.createReadStream('./static/rich-menu.jpg'))
//   .then((res) => console.log(res));

// Step3: Link to all users
// client.setDefaultRichMenu(richMenuId);