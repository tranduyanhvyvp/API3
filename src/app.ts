import express, {Application, Request, Response} from 'express';

const app:Application = express();
const port:number = 3000;

app.get('/',(req:Request, res:Response)=>{
    res.send('dm doi`');
});

app.listen(port,()=>{
    console.log(`Connect to port ${port}`)
});