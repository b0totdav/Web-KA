import express from 'express'
import userRoutes from './routes/user.js'

const PORT=3000;
const app = express();

app.use(userRoutes)

app.use((err,req,res,next) =>{
    if(err){
        console.log(`Error: ${err}`)
        res.status(err.status || 500).send(`Hiba történt: ${err}`)
    }
    next()
})

app.listen(PORT,() =>{
console.log(`Fut a szerver a localhost:${PORT} porton`)
console.log('Press Ctrl+C to stop the server')})