import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
dotenv.config();


import authRoute from "./routes/userRoute.js";
import residencyRoute from "./routes/residencyRoute.js"


const app = express();


const corsOptions = {
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200, 
};

app.use(cors(corsOptions));

const PORT = process.env.PORT || 4000;



app.use(express.json());
app.use(cookieParser());
app.use(cors());



app.use("/api/user", authRoute);
app.use("/api/residency", residencyRoute)



app.listen(PORT, () => {
    console.log(`Server is listing at ${PORT}`)
})