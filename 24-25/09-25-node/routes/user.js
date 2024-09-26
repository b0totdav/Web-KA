import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url';

const router = express.Router();
const __filename=fileURLToPath(import.meta.url)
const __dirname=path.dirname(__filename)

router.get('/',(req, res)=>
{
    console.log("üzenet 1")
    res.sendFile(path.join(__dirname,'..','views','index.html'))     
    
})

router.get('/users',(req, res)=>
    {
        console.log("üzenet 2")
        res.sendFile(path.join(__dirname,'..','views','users.html'))
         
    })

export default router