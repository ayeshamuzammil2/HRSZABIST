const express = require('express');
const cors = require('cors');
const pool = require('./db');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/',async(req,res)=>{
    try{
        res.json('WELCOME TO HR API');
    }
    catch(err){
        res.status(500).json({Error:err.message});
    }
});

app.get('/emp',async(req,res)=>{
    try{
        const result = await pool.query('Select * from employees');
        res.json(result.rows);
    }
    catch(err){
        res.status(500).json({Error:err.message})
    }
});

app.get('/empcount',async(req,res)=>{
    try{
        const result = await pool.query('SELECT COUNT(*) FROM employees');
        res.json(result.rows);
    }
    catch(err){
        res.status(500).json({Error:err.message})
    }
});

app.get('/countriescount',async(req,res)=>{
    try{
        const result = await pool.query('SELECT COUNT(*) FROM countries');
        res.json(result.rows);
    }
    catch(err){
        res.status(500).json({Error:err.message})
    }
});



const port = process.env.PORT;

app.listen(port, () => {
    console.log(`connected Successfully ${port}`);
});