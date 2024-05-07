import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();
app.use(cors());

const PORT = 3000;

app.get('/', (req, res) => { res.json({title : "Hello World, express.js on TypeScript"}); });
app.listen(PORT, () => { 
  console.log("Server running at PORT: ", PORT);
});