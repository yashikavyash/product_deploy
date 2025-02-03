const express = require('express')
const app = express();
const mongoose = require('mongoose')
const productRouter = require('./Routes/ProductRoutes')

app.use(express.json())
app.use("", productRouter);


app.listen('7000', ()=> console.log('server running on 7000'))

mongoose.connect('mongodb+srv://2216128:8925020154@myprojectcluster.qvwk0.mongodb.net/?retryWrites=true&w=majority&appName=MyprojectCluster')
    .then(()=> console.log('database connected..'))
    .catch((err) => console.log(err))



app.get('/', (req, res)=>{
    res.send('server reacted...')
})

console.log("updated");
