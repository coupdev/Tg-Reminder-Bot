import { Bot } from "grammy";
import * as dotenv from "dotenv";
import dayjs from "dayjs";

dotenv.config();

const bot = new Bot(process.env.BOT_TOKEN!);

bot.command("start", (ctx) =>
  ctx.reply("Hi! Send /remind <time> <text>, and I will remind you!")
);

bot.command("remind", async (ctx) => {
  const text = ctx.message?.text?.split(" ").slice(1);
  if (!text || text.length < 2) {
    return ctx.reply("Format: /remind <time> <text>");
  }

  const timeText = text[0];
  const messageText = text.slice(1).join(" ");

  const match = timeText.match(/^(\d+)([smhd])$/);
  if (!match) {
    return ctx.reply("Example: /remind 10m to eat");
  }

  const value = parseInt(match[1], 10);
  const unit = match[2];

  const timeMap: Record<string, number> = {
    s: 1000,
    m: 60000,
    h: 3600000,
    d: 86400000,
  };

  const delay = value * timeMap[unit];
  const replyMessage = `Ok! Remind in ${value}${unit}: "${messageText}"`;

  await ctx.reply(replyMessage);

  setTimeout(() => {
    ctx.api.sendMessage(ctx.chat.id, `🔔 Reminder: ${messageText}`);
  }, delay);
});

bot.start();
