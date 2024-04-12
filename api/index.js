import express from'express';
import mongoose from 'mongoose'
import dotenv from'dotenv';
{/* it for masque lien database from github */}
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import cookieParser from 'cookie-parser';

dotenv.config();
{/* that mean virfy if monogo is connected if change psw make error */}
mongoose.connect(process.env.MONGO).then(
    ()=>{
        console.log('Mongoos connected');
    }
).catch((err)=>{
console.log(err);
})
const app = express();
app.use(express.json());
app.use(cookieParser());
app.listen(3000,() =>{
    console.log('server is running on port 3000')

}
);
{/* creat api route  */}
app.use('/api/user',userRoutes);
app.use('/api/auth',authRoutes);

app.use((err,req,res,next)=>{

    const statusCode =err.statusCode || 500;
    const message = err.message ||'internal server error';
    res.status(statusCode).json({success:false,
        statusCode,
        message,
    })
        
    });
