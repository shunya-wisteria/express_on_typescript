import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

dotenv.config();
const app = express();
app.use(cors());

const PORT = 3000;

const prisma = new PrismaClient();

app.get('/', (req, res) => { 
  res.json({title : "Hello World, express.js on TypeScript"});
});

app.get('/users', (req, res) => {
  prisma.apUser.findMany({
    where:{
      disabled : false
    }
  }).then((users)=>{
    res.json(users);
  })
})

app.listen(PORT, () => { 
  console.log("Server running at PORT: ", PORT);
});