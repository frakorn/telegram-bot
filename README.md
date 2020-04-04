# Telegram Bot

This is a telegram bot base on the npm library 'node-telegram-bot-api' and 'express' web framework.
It also provide a Procfile file in order to deploy it in the Heroku platform based on two main process: 
- The worker process: node telegram service (bot.js)
- The web process: the UI part of the application.

## Installation and start

## Worker process: Telegram bot

Before you launch the application you have to set the TOKEN environment variable of your telegram bot variable in order to bind the application to telegram.
After that you have to run `npm install` with node >=10 and type node index.js.

## Web process: HTML page

If you want bind an HTML page related to that process you have to launch the web process with 'node web.js' and edit the dist/index.html page.




