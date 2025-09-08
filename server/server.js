import express from "express";
const app = express();
import cors from "cors";

app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello");
});

// Server
app.listen(3000, () => {
  console.log(`Server is running on http://localhost:3000`);
});
