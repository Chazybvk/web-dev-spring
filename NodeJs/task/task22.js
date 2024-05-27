// todo: Написать роутеры 
// Подключить express 
// Написать два роутера (GET, PUT) который принимают данные и записывают их в Redis
// Названия выбрать произвольные
// Данные передаются в json формате и включают следующие поля:
let message = { receiver_id:100, sender_id: 200,  message: "Bla-bla-bla"} 
// Для отладки rest использовать инструмент
// https://insomnia.rest/download 
// для получения данных в формате json необходимо создать парсер с помощью функции json:
const jsonParser = express.json();
//Parser применяется для автоматического парсинга тела запроса в объект json,
app.use(jsonParser);
// В самом роутере при запросе можно обратиться к разобранному  body
const user = request.body;


const redis = require('redis');

(async () => {
    const client = await redis.createClient()
    .on('error', err => console.log('Redis Client Error', err))
    .connect();
    await client.set('framework', 'vue3');
    const value = client.get('framework');
    console.log(value)

    //console.log(value)
    await client.disconnect();
})();