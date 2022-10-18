const express = require("express");
const itemsRoute = require("./routers/itemsRouter");
const cors = require("cors");

const PORT = 8080;
const app = express();

app.use(express.static("dist"));
app.use(express.json({ limit: "50MB" }));
app.use(cors());

app.use("/api/items", itemsRoute);

app.listen(process.env.PORT || PORT, () =>
  console.log(`Puerto de escucha ${process.env.PORT || 8080}!`)
);
