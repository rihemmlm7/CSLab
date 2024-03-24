import express from'express';
import mongoose from 'mongoose'
import dotenv from'dotenv'{/* it for masque lien database from github */}
dotenv.config();
{/* that mean virfy if monogo is connected if change psw make error */}
mongoose.connect(process.env.MONGO).then(
    ()=>{
        console.log('Mongoos connected');
    }
)
const app = express();
app.listen(3000,() =>{
    console.log('server is running on port 3000')

}
)