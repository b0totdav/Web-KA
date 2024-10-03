import bodyParser from 'body-parser'
import express from 'express'
import path from 'path'
import adminRoutes from './routes/admin.js'
import shopRoutes from './routes/shop.js'
import __dirname from './util/routpath.js'

const app = express()
const PORT =3000

app.use(bodyParser.urlencoded({extended: false}))

app.use(express.static(path.join(__dirname, 'public')))
app.use('/admin',adminRoutes)
app.use('/', shopRoutes)

app.listen(PORT, () => console.log(`server runs on port: http://localhost:${PORT}`))