import express from 'express'

const app = express();
app.use('/',(req, res, next)=>
{
    console.log("üzenet 1")
    next();

})
app.use('/',(req, res, next)=>
{
    console.log("üzenet 2")
    next();
})
app.use('/',(req, res, next)=>
{
    console.log("uzenet 3")
    res.send("Szia")
})

app.listen(3000,() =>
console.log('Press Ctrl+c to stop the server'))