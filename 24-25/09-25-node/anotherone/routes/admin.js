import express from 'express'

const router = express.Router()

router.get('/admin', (req,res) =>
{
    console.log('admin oldal')
    res.send('<h2>Admin oldal</h2> <form action="/admin/product" method="POST"> <input type="text name="productName"><input type="text name="price">  <button type="submint">Send</button>')
})


router.post('/admin/product', (req, res) =>
{
    console.log("POST megérkezett")
    res.send('Termék hozzáadva')})

router.get('/', (req,res) =>
    {
        console.log('Root oldal')
        res.send('<h2>Root oldal</h2>')
    })

export default router;