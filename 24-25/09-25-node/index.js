import express from 'express'
import userRoutes from './routes/user.js'

const PORT=3000;
const app = express();

app.use(userRoutes)

app.listen(PORT,() =>{
console.log(`Fut a szerver a localhost:${PORT} porton`)
console.log('Press Ctrl+C to stop the server')})