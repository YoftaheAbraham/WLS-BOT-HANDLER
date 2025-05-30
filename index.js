import TelegramBot from 'node-telegram-bot-api';
import dotenv from 'dotenv';
dotenv.config();

const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });

bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    let messageText = `
🎓 *Welcome to Wolaita Liqa School Mini App!*

📚 Here, you can quickly check your exam results and track your progress.

✨ Stay motivated and keep aiming high — your hard work matters!

💡 If you need help, don’t hesitate to reach out to your teachers.

🚀 Let’s make this school year your best one yet!
`;

    bot.sendMessage(chatId, messageText, {
        parse_mode: 'Markdown',
        reply_markup: {
            inline_keyboard: [[{
                text: 'Open Mini App',
                web_app: { url: 'https://wls-client-mini-app.vercel.app' }
            }]]
        }
    });
});

