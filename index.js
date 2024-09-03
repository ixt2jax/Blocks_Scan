const express=require("express");
const connectToMongo = require('./db');

connectToMongo();

const app=express();
const port=3000;

app.use(express.json());

const trackAPIUsage = require('./middleware/trackAPI'); 

app.use('/api/user', require('./routes/user'));
app.use('/api/plans', require('./routes/All_plans'));
app.use('/api/key', require('./routes/APIKey'));
app.use('/api/planM',require('./routes/plan_management'));
app.use('/api/switchplan', require('./routes/plan_switching'))
app.use('/api/statistics',trackAPIUsage,require('./routes/Statistics'));

app.listen(port,()=>{
    console.log(`srcipt is running on port ${port}`);

});
