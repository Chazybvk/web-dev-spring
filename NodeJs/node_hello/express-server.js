const express = require('express')
const app = express()

// Укажем директорию в которой будут лежать наши файлы
app.use(express.static('public'))

// Отправляем index.html, когда пользователи получают доступ к
// корневому каталог с использованием res.sendFile()
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
})

//  GET /profile/{id} - получить пользователя  
//  POST /profile   - добавить пользователя
//  DELETE /profile/{id} - удалить пользователя
//  PUT /profile/{id} - модификация пользователя
// CRUD

app.get('/user', (req, res) => {
  res.sendFile(__dirname + '/public/user.html')
})

app.post('/profile', (req, res) => {
  console.log(req)
  res.sendFile(__dirname + '/public/user.html')
})

app.delete('/profile', (req, res) => {
  console.log("Удаление профиля")
  res.sendFile(__dirname + '/public/user.html')
})

app.put('/profile', (req, res) => {
    console.log("Изменения профиля")
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ a: 1 }, null, 3));
})


app.listen(3000)