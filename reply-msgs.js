const keyword2function = {
  'portfolio': (baseURL) => getPortfolioMsgs(baseURL),
  'website': (baseURL) => getWebsiteMsgs(baseURL),
  'about': () => getAboutMsgs(),
  'education': (baseURL) => getEducationMsgs(baseURL),
  'hobbies': (baseURL) => getHobbiesMsgs(baseURL),
  'mail': () => getMailMsgs(),
  'linkedin': () => getLinkedinMsgs(),
  'github': () => getGitHubMsgs(),
  'help': (baseURL) => getHelpMsgs(baseURL)
}


function getReplyMsgs(keyword, baseURL) {
  keyword = keyword.toLowerCase();

  if (!(keyword in keyword2function)) {
    return [{
      "type": "text",
      "text": `The keyword "${keyword}" is not found, you can list all keywords by "help"`
    }];
  }

  let msgs = [];
  let mainMsgs = keyword2function[keyword](baseURL);
  msgs.push(...mainMsgs);
  return msgs;
};


function getPortfolioMsgs(baseURL) {
  let msgs = [];

  const works = [
    {
      "title": "Daily Keeper",
      "text": "sample text",
      "description": "Web application for time tracking", 
      "uri": "https://portfolio-website-eta-three.vercel.app/works/DailyKeeper",
      "imageFilename": "daily-keeper.png"
    },
    {
      "title": "Virtual Ads",
      "text": "sample text",
      "description": "Markerless Augmented Advertising for Sports Videos",
      "uri": "https://portfolio-website-eta-three.vercel.app/works/ScoreboardAnalysis",
      "imageFilename": "virtual-ads.png"
    },
    {
      "title": "Scoreboard Analysis",
      "text": "sample text",
      "description": "Analysis scoreboard by YOLO and Tesseract-OCR",
      "uri": "https://portfolio-website-eta-three.vercel.app/works/ScoreboardAnalysis",
      "imageFilename": "scoreboard-analysis.png"
    },
  ];
  let mainMsg = {
    "type": "template",
    "altText": "portfolio",
    "template": {
      "type": "carousel",
      "columns": works.map((work) => {
        return {
          "thumbnailImageUrl": `${baseURL}/static/works/${work.imageFilename}`,
          "imageBackgroundColor": "#FFFFFF",
          "title": work.title,
          "text": work.description,
          "defaultAction": {
            "type": "uri",
            "label": "View detail",
            "uri": work.uri
          },
          "actions": [
            {
              "type": "uri",
              "label": "View detail",
              "uri": work.uri
            }
          ]
        }

      })
    }
  };
  msgs.push(mainMsg);
  return msgs;
}

function getWebsiteMsgs(baseURL) {
  let msgs = [];

  let mainMsg = {
    "type": "template",
    "altText": "Visit my website!",
    "template": {
      "type": "buttons",
      "thumbnailImageUrl": `${baseURL}/static/demo.png`,
      "title": "Tsao Chia-Cheng's website",
      "text": "Visit Now!!",
      "defaultAction": {
        "type": "uri",
        "label": "Visit",
        "uri": "https://portfolio-website-eta-three.vercel.app/"
      },
      "actions": [
        {
          "type": "uri",
          "label": "Visit",
          "uri": "https://portfolio-website-eta-three.vercel.app/"
        }
      ]
    }
  };

  msgs.push(mainMsg);
  return msgs;
}

function getAboutMsgs() {
  let msgs = [];

  let mainMsg = {
    "type": "flex",
    "altText": "About me",
    "contents": {
      "type": "bubble",
      "body": {
        "type": "box",
        "layout": "horizontal",
        "contents": [
          {
            "type": "text",
            "text": "placeholder",
            "contents": [
              {
                "type": "span",
                "text": "My name is",
                "decoration": "none"
              },
              {
                "type": "span",
                "text": " Tsao chia-cheng",
                "weight": "bold",
                "decoration": "none"
              },
              {
                "type": "span",
                "text": ", a student in Taiwan. I'm currently studying at",
                "decoration": "none"
              },
              {
                "type": "span",
                "text": " National Tsing Hua University",
                "weight": "bold",
                "decoration": "none"
              },
              {
                "type": "span",
                "text": " to gain my master's degree in Computer Science.",
                "decoration": "none"
              },
            ],
            "wrap": true,
          }
        ]
      }
    }
  };

  msgs.push(mainMsg);
  return msgs;
}

function getEducationMsgs(baseURL) {
  let msgs = [];

  let mainMsg = {
    "type": "flex",
    "altText": "Education",
    "contents": {
      "type": "carousel",
      "contents": [
        {
          "type": "bubble",
          "header": {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "text",
                "text": "Bachelor",
                "size": "xl",
                "color": "#000000",
                "weight": "bold"
              }
            ]
          },
          "hero": {
            "type": "image",
            "url": `${baseURL}/static/NTHU.png`,
            "size": "full",
            "aspectMode": "fit",
            "aspectRatio": "20:11"
          },
          "body": {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "text",
                "text": "NTHU",
                "size": "lg",
                "weight": "bold"
              },
              {
                "type": "text",
                "text": "Interdisciplinary Program of Eletrical Engineering and Computer Science.",
                "wrap": true,
                "weight": "regular",
                "style": "italic"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "box",
                    "layout": "baseline",
                    "contents": [
                      {
                        "type": "text",
                        "text": "GPA",
                        "flex": 1,
                        "size": "sm",
                        "color": "#AAAAAA"
                      },
                      {
                        "type": "text",
                        "text": "4.03 / 4.3",
                        "flex": 5,
                        "color": "#666666"
                      }
                    ]
                  },
                  {
                    "type": "box",
                    "layout": "baseline",
                    "contents": [
                      {
                        "type": "text",
                        "text": "Years",
                        "flex": 1,
                        "size": "sm",
                        "color": "#AAAAAA"
                      },
                      {
                        "type": "text",
                        "text": "2017 - 2021",
                        "flex": 5,
                        "color": "#666666"
                      }
                    ]
                  }
                ],
                "offsetTop": "10px"
              }
            ]
          }
        },
        {
          "type": "bubble",
          "header": {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "text",
                "text": "Master",
                "size": "xl",
                "color": "#000000",
                "weight": "bold"
              }
            ]
          },
          "hero": {
            "type": "image",
            "url": `${baseURL}/static/NTHU.png`,
            "size": "full",
            "aspectMode": "fit",
            "aspectRatio": "20:11"
          },
          "body": {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "text",
                "text": "NTHU",
                "size": "lg",
                "weight": "bold"
              },
              {
                "type": "text",
                "text": "Computer Science.",
                "wrap": true,
                "weight": "regular",
                "style": "italic"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "box",
                    "layout": "baseline",
                    "contents": [
                      {
                        "type": "text",
                        "text": "GPA",
                        "flex": 1,
                        "size": "sm",
                        "color": "#AAAAAA"
                      },
                      {
                        "type": "text",
                        "text": "4.3 / 4.3",
                        "flex": 5,
                        "color": "#666666"
                      }
                    ]
                  },
                  {
                    "type": "box",
                    "layout": "baseline",
                    "contents": [
                      {
                        "type": "text",
                        "text": "Years",
                        "flex": 1,
                        "size": "sm",
                        "color": "#AAAAAA"
                      },
                      {
                        "type": "text",
                        "text": "2021 - Present",
                        "flex": 5,
                        "color": "#666666"
                      }
                    ]
                  }
                ],
                "offsetTop": "10px"
              }
            ]
          }
        }
      ]
    }
  };
  

  msgs.push(mainMsg);
  return msgs;
}

function getHobbiesMsgs(baseURL) {
  let msgs = [];

  let mainMsg = {
    "type": "template",
    "altText": "Hobbies",
    "template": {
      "type": "image_carousel",
      "columns": [
        {
          "imageUrl": `${baseURL}/static/hobbies/basketball.jpg`,
          "action": {
            "type": "uri",
            "label": "Basketball",
            "uri": "https://www.nba.com/games"
          }
        },
        {
          "imageUrl": `${baseURL}/static/hobbies/guitar.jpg`,
          "action": {
            "type": "uri",
            "label": "Guitar",
            "uri": "https://www.youtube.com/c/sunghajung"
          }
        },
      ]
    }
  };

  msgs.push(mainMsg);
  return msgs;
}

function getMailMsgs() {
  let msgs = []

  let mainMsg = {
    "type": "text",
    "text": `aabcd60628891tw@gmail.com`
  }
  
  msgs.push(mainMsg);
  return msgs;
}

function getLinkedinMsgs() {
  let msgs = []

  let mainMsg = {
    "type": "text",
    "text": `https://www.linkedin.com/in/chia-cheng-tsao-33b8b3233/`
  }
  
  msgs.push(mainMsg);
  return msgs;
}

function getGitHubMsgs() {
  let msgs = []

  let mainMsg = {
    "type": "text",
    "text": `https://github.com/AceBenson`
  }
  
  msgs.push(mainMsg);
  return msgs;
}

function getHelpMsgs() {
  let msgs = []

  let mainMsg = {
    "type": "text",
    "text": `The following are all keywords: ${Object.keys(keyword2function).join(", ")} (case insensitive)`,
    "quickReply": {
      "items": Object.keys(keyword2function).map((keyword) => {return {
        "type": "action",
        "action": {
          "type": "message",
          "label": keyword,
          "text": keyword
        }
      }})
    }
  }
  msgs.push(mainMsg);
  return msgs;
}

module.exports = getReplyMsgs;
