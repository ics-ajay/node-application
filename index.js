import express from "express";
const app = express();
const PORT = 8080;

app.use("/", (req, res) => res.send("This is test route"));
app.listen(PORT, () => console.log("Server listening at 8080"));
