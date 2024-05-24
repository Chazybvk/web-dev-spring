const express = require('express');

const app = express();
// Use express' built-in static functionality
app.use(express.static('public'));

// app.get('/', (req, res) => {
//     res.send(`<!DOCTYPE html><html><body><h1>Hello SSE!</h1></body></html>`);
// });

app.get('/subscribe', (req, res) => {
    
    // TODO: Add subscription code here
    res.writeHead(200, {
        'Content-Type': 'text/event-stream',
        Connection: 'keep-alive',
        'Cache-Control': 'no-cache',
    });
        let counter = 0;


    
    
    res.write('event: chat\n');
    res.write(`data: Hello!\n`);
    res.write(`id: ${counter}\n\n`);
    
    
    
    counter += 1;

    // Send a subsequent message every five seconds
    setInterval(() => {

        
    res.write('event: chat\n');
    res.write(`data: Hello!\n`);
    res.write(`id: ${counter}\n\n`);


        res.write('event: message\n');
        res.write(`data: ${new Date().toLocaleString()}\n`);
        res.write(`id: ${counter}\n\n`);
        counter += 1;
    }, 5000);

    // Close the connection when the client disconnects
    req.on('close', () => res.end('OK'))

});

app.listen(3000, () => console.log('App listening: http://localhost:3000'));


    