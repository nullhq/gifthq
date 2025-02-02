// Path: src/app.ts
// Our main app where w'll wrap all our backend components

import express from "express";
import path from "path";

const app = express();
const PORT = 3000;

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
});  
app.use('/statics/files', express.static(path.join(__dirname, '../statics')));
app.use(express.json());


app.listen(PORT, () => {
    console.log(`Everything is going good on: ${PORT}`);
}); 