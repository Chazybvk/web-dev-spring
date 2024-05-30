const express = require('express');
const redis = require('redis');

// Создаем инстанс экспресса
const app = express();

// Разрешаем кросс-доменные запросы
const cors = require('cors');
app.use(cors());

// Парсим автоматически json что приходит в http body 
app.use(express.json()); 


app.get('/subscribe', async (req, res) => {
    
    // Устанавливаем заголовки для подключения по SSE
    res.writeHead(200, {
        'Content-Type': 'text/event-stream',
        Connection: 'keep-alive',
        'Cache-Control': 'no-cache',
    });
    
    // Подписываемся к Redis на топик "chat" ждем события 
    const subscribe = await redis.createClient()
    await subscribe.connect();
    await subscribe.subscribe('chat', (message) => {
        // При получении события в топике отправляем полученное сообщение клиенту по SSE
        res.write('event: message\n');
        res.write(`data: ${message}\n\n`);
        res.write(`id: ${message}\n\n`);
    });    
});


app.put('/publish', async (req, res) => {
    // Обращение к разобранному  body
    const messageBody = req.body; 
    
    const { receiver_id, sender_id, message } = messageBody
    const key = `message:${receiver_id}:${sender_id}`;
    // Подключаемся к Redis и публикуем в топик данные с клиента.
    const publisher = await redis.createClient()
    await publisher.connect();
    await publisher.publish('chat', JSON.stringify(messageBody));
    await publisher.disconnect();
    // Высылаем fetch код ответа
    res.end("OK")
    
})


app.listen(3001, () => console.log('App listening: http://localhost:3001'));