import axios from 'axios';
import fs from 'fs';
import request from 'request';
import TelegramBot from 'node-telegram-bot-api';
import BalabobaService from './BalabobaService.js';

// (async () => {
//5163025139:AAFKFzsULSPtLykbGxFtw1cQ8FPd_s8JCC0 - relaxer
//5653348884:AAHqiSE_ip8UMHMgUQEsWtgPCho5w_x9Bd4 - bala
  const token = '5163025139:AAFKFzsULSPtLykbGxFtw1cQ8FPd_s8JCC0';

  // const TelegramBot = await import ('telegram-bot-api');

  const bot = new TelegramBot(token, { polling: true });

  bot.onText(/\/bot/, (msg) => {
    try {
      if(msg.text.toLowerCase().includes('это смешно?')){
        let text = Math.random() > 0.5 ? "Да, это смешно" : "Нет, это не смешно. ";
        if(Math.random() > 0.9) 
          text += 'А ты придурок...'
        console.log(text);
        bot.sendMessage(msg.chat.id, text);
      }
    } catch (ex) {
      bot.sendMessage(msg.chat.id, "Нет, это не смешно");
      console.log(ex.message);
    }
      
  });

  bot.onText(/\/boba/, async (msg)=> {
    const start = msg.text.replace(/\/boba/, "").trim();
    
    bot.sendMessage(msg.chat.id, 'Ща все будет')
    const text = await BalabobaService.getText(start);
    console.log(text);
    bot.sendMessage(msg.chat.id, text);
  })
// })();
