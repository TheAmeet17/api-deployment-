import express,{Request,Response} from 'express';
const port=8050;
import userRouter from './Routes/userRouter';
const app=express();


app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api',userRouter);
app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})

export default app
