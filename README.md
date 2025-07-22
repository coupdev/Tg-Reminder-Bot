# ⏰ Telegram Reminder Bot

[![Author](https://img.shields.io/badge/Author-@coupdev-blue)](https://coupdev.com)
[![License](https://img.shields.io/badge/License-MIT-blue)](#license)

A simple, lightweight Telegram bot written in TypeScript using the [grammY](https://grammy.dev/) framework.  
The bot helps users set personal reminders via private chat. It is designed to be minimal and easy to extend.

---

## 🚀 Features

- Set reminders
- English-friendly interface
- Timezone-independent (uses UTC by default)
- Error handling for invalid or incomplete messages
- Fully open source and easily modifiable

---

## 🛠 Tech Stack

- [TypeScript](https://www.typescriptlang.org/)
- [grammY](https://grammy.dev/) – Telegram Bot Framework
- [chrono-node](https://github.com/wanasit/chrono) – natural language date parsing
- [dotenv](https://github.com/motdotla/dotenv) – environment variable support

---

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/coupdev/Tg-Reminder-Bot.git
   cd Tg-Reminder-Bot
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Create a .env file based on .env.example and insert your Telegram Bot Token:
   ```bash
   BOT_TOKEN=your_bot_token
   ```

4. Run the bot
   ```bash
   npm start
   ```
   
   Or with hot-reload during development:
   ```bash
   npx ts-node src/bot.ts
   ```
   
## 🤝 Contributing

Feel free to open issues or pull requests. Suggestions for new languages, features, or improvements are welcome

---
