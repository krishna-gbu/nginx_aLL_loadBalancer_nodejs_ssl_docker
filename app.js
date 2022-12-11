const express = require('express');
const mongoose = require('mongoose');
const AppError = require('./utils/appError')
const app = express();


mongoose.set('strictQuery',false)

mongoose.connect(
    'mongodb://localhost:27017/tutor',
    {useNewUrlParser:true})
    .then(() => {
     console.log('mongodb connected');
    }).catch((err) => {
        console.log(err.message);
    })

let temp = [] 
let arrr = [1,2,3,4,5,6,7,8,9,10,11];
let arrRe = [0,0,1,1,1,2,3, 4, 5]
const noRepeat = (arr,no) => {
    for (var i = 0; i < arr.length ; i++) {
            if (arr[i] < arr[i + 1])  {
                temp.push(arr[i]);
            } 
            if (arr[i] === arr[arr.length - 1]) {
                temp.push(arr[arr.length - 1]);
                break;
            }
    } 
    return temp.slice(0,no);   
}

console.log(noRepeat(arrRe,9));


app.get('/', (req, res)=>{
    res.status(200).json({message: 'OK'});
})


const port = process.env.PORT || 5000
app.listen(port,()=>{
 console.log(`server listening on ${port}`);   
})

app.all('*',(req,res,next)=>{
next(new AppError(req.originalUrl));
})