const http = require('http') // Чтобы использовать HTTP-интерфейсы в Node.js
const fs = require('fs') // Для взаимодействия с файловой системой
const path = require('path') // Для работы с путями файлов и каталогов
const url = require('url') // Для разрешения и разбора URL 

const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.ico': 'image/x-icon',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.json': 'application/json',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2'
}

const server = http.createServer()

server.on('request', (req, res) => {
    
    const parsedUrl = new URL(req.url, 'https://localhost:5000/')
    console.log(parsedUrl)
    let pathName = parsedUrl.pathname
    console.log(pathName)
    let ext = path.extname(pathName)

// Для обработки URL с конечным символом '/', удаляем вышеупомянутый '/'
// затем перенаправляем пользователя на этот URL с помощью заголовка 'Location'
if (pathName !== '/' && pathName[pathName.length - 1] === '/') {
  res.writeHead(302, {'Location': pathName.slice(0, -1)})
  res.end()
  return
}

    
// Если запрос для корневого каталога, вернуть index.html
// В противном случае добавляем «.html» к любому другому запросу без расширения
if (pathName === '/') { 
  ext = '.html' 
  pathName = '/index.html'
} else if (!ext) { 
  ext = '.html' 
  pathName += ext
}
 
// Создаем правильный путь к файлу, чтобы получить доступ к соответствующим ресурсам
const filePath = path.join(process.cwd(), '/public', pathName)
// Проверяем, существует ли запрошенный ресурс на сервере
fs.exists(filePath, function (exists, err) {
// Если запрошенный ресурс не существует, ответим 404 Not Found
  if (!exists || !mimeTypes[ext]) {
    console.log('Файл не найден: ' + pathName)
    res.writeHead(404, {'Content-Type': 'text/plain'})
    res.write('404 Not Found')
    res.end()
    return
  }
  // В противном случае отправим ответ со статусом 200 OK,
  // и добавляем правильный заголовок типа контента
  res.writeHead(200, {'Content-Type': mimeTypes[ext]})
  // Считать файл и передать его в ответ
  const fileStream = fs.createReadStream(filePath)
  fileStream.pipe(res)
})

    
})


server.listen(5000)
