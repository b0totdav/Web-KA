import express from 'express'
import products from './routes/product.js'
import admins from './routes/admin.js'

const app = express()
const PORT = 3001;

app.use(products)
app.use(admins)

app.listen(PORT, () =>{
    console.log('CTRL+C a szerver zárása')
})