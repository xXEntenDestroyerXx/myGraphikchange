const express = require('express');
require('dotenv').config();
const app = express();

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Starting server at ${port}`));
app.use(express.static('public'));
app.use(express.json());

app.post('/api', (request, response) => {
    console.log("I got a request")
    console.log(request.body.message);
    response.json({
        status: "success"
    });
    publish(request.body.message);
});

//den server mit mqtt broker verbinden
var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://broker.mqttdashboard.com')

client.on('connect', function () {
    client.subscribe('grafikchange', function (err) {
        if (!err) {
            client.publish('grafikchangeNew', 'Hello mqtt')
        }
    })
})

client.on('message', function (topic, message) {
    // message is Buffer
    // console.log(message.toString())
    // client.end()
})

function publish(message) {
    client.publish('grafikchange', message.toString())
}
//den responseinhalt an den mqtt broker senden

// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })