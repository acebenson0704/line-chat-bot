<div id="top"></div>

<!-- PROJECT SHIELDS -->

[![Stargazers][stars-shield]][stars-url]
[![Forks][forks-shield]][forks-url]
[![Issues][issues-shield]][issues-url]

<!-- PROJECT LOGO -->
<div align="center">
  <h3 align="center">Tsao Chia-Cheng LINE chat bot</h3>
  <p align="center">
    To promote myself
    <br />
    <img src="https://github.com/acebenson0704/line-chat-bot/blob/main/.github/images/qrcode.png" />
  </p>
</div>

<!-- ABOUT THE PROJECT -->
## About The Project

[![Demo][demo-jpg]]()

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

- [line-bot-sdk-nodejs](https://github.com/line/line-bot-sdk-nodejs)
- [Express.js](https://expressjs.com/)

<p align="right">(<a href="#top">back to top</a>)</p>

## Folder Structure

- `index.js`: Create Express server.
- `reply-mesgs`: Define keywords and corresponding reply Message objects.
- `rich-menu.js`: Create and upload rich menu by node js api.

<p align="right">(<a href="#top">back to top</a>)</p>

## Features

### Reply Message
When you send keywords, reply corresponding message.
Message types including: **Text message**, **Sticker message**, **Template message**, **Flex message**

<details>
<summary>keywords</summary>
<ol>
  <li>portfolio</li>
  <li>website</li>
  <li>about</li>
  <li>education</li>
  <li>hobbies</li>
  <li>mail</li>
  <li>linkedin</li>
  <li>github</li>
  <li>help</li>
</ol>
</details>

### Reply Sticker

Reply sticker you send.

### Rich Menu

Create rich menu by node.js

### Deploy

Deploy to [heroku](https://www.heroku/com/)


<p align="right">(<a href="#top">back to top</a>)</p>

## Acknowledgments

- [dotenv](https://github.com/motdotla/dotenv)
- [ngrok](https://ngrok.com/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->

[stars-shield]: https://img.shields.io/github/stars/acebenson0704/line-chat-bot.svg?style=for-the-badge
[forks-shield]: https://img.shields.io/github/forks/acebenson0704/line-chat-bot.svg?style=for-the-badge
[issues-shield]: https://img.shields.io/github/issues/acebenson0704/line-chat-bot.svg?style=for-the-badge
[stars-url]: https://github.com/acebenson0704/line-chat-bot/stargazers
[forks-url]: https://github.com/acebenson0704/line-chat-bot/network/members
[issues-url]: https://github.com/acebenson0704/line-chat-bot/issues
[demo-jpg]: https://github.com/acebenson0704/line-chat-bot/blob/main/.github/images/demo.jpg
[qrcode-img]: https://github.com/acebenson0704/line-chat-bot/blob/main/.github/images/qrcode.png

