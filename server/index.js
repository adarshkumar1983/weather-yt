const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 10000;
const axios = require('axios');
const bodyParser = require('body-parser');


app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.listen(port, ()=>{
    console.log(`The server is running on ${port}`)
})

app.post('/', async(req, res)=>{
const {zipcode} = req.body
try {
    if (zipcode.length < 5 || zipcode.length > 5){
        return res.status(400).json({message: 'Zipcode provided is incorrect!'})
    }
    else{
        const weather = await axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&appid=${process.env.api_key}&units=imperial`)
        res.send(weather.data)
       
    }
} catch (error) {
    console.log(error)
    res.status(400).json({message: "Zipcode is Incorrect"})
}

}
)