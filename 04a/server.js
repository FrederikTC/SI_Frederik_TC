const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('/events', function(req, res) {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    const sendEvent = setInterval(() => {
        const data = { message: `The current time is: ${new Date().toTimeString()}`, timestamp: Date.now() };
        res.write(`data: ${JSON.stringify(data)}\n\n`);
    }, 1000);

    req.on('close', () => {
        clearInterval(sendEvent);
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
