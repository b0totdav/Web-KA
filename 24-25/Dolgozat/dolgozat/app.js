import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.send('Hello, World!');
  });

app.listen(3000, 'localhost', () => { console.log(`Server is running on port http://localhost:3000`)})