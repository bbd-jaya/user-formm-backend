const express = require("express");

const app = express();
var cors = require('cors');
app.use(cors());
app.use(express.json())


app.post('/user-form', function (req, res) {
    const phone = req.body.phone
    if (phone == null || phone < 1000000000 || phone > 9999999999){
        res.status(200).send({message:"Phone length must be of 10 digits.", isSubmitted: false})
    }
    else{
        res.send({message:"Form submitted successfully", isSubmitted: true})
    }
});

app.listen(5000);