console.log("app.js")
import Handlebars from "handlebars";
import {v4 as uuidv4} from 'uuid';

import { Chat } from "./portial/chat.hbs"
import { tmplLayout }  from './layout'
import "./portial/button.hbs"

Chat.init()
let template = Handlebars.compile(tmplLayout)
let htmlApp = template()
let root = document.getElementById("app")
root.innerHTML = htmlApp

const button = document.querySelector('button[data-id="sendButton"]')
button.addEventListener('click', function () { 
    const inputDOM = document.querySelector('input[data-id="message"]')
    if (inputDOM.value) {
       let myuuid = uuidv4();
        let item = { id: myuuid, id_send: 100, id_resv: 100 , name: 'VG', message: inputDOM.value }
         sendMessage(item)
      // todo: Проверка что код возварата 200 тогда сообщение добавляем. 
        // Chat.addMessage(item)
       console.log(item)  
    }
})


async function sendMessage(item) { 
let response = await fetch('http://localhost:8081/db.php', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
    },
  
   body: JSON.stringify(item)
});

    
    
    

// let result = await response.json();
// alert(result.message);
}