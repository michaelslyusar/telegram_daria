const { Telegraf } = require("telegraf");
const TOKEN = "6715009822:AAEuXB6oQcpdRiLXUBk4b-IPSCjBqJMcjYg";
const bot = new Telegraf(TOKEN);

const web_link = "https://fastidious-gecko-28bc32.netlify.app/";

bot.start((ctx) =>
  ctx.reply("Welcome :)))))", {
    reply_markup: {
      keyboard: [[{ text: "web app", web_app: { url: web_link } }]],
    },
  })
);

bot.launch();