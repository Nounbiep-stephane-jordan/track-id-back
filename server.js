const express = require("express")
const {Routes} = require("./routes/index.js")
const cors = require("cors")
const bodyParser = require("body-parser")

const port = process.env.PORT || 4000;
const app = express();

app.use(cors());
app.use(bodyParser.json({limit:'50mb'}));
app.use(bodyParser.urlencoded({limit:'50mb', extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((_, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use(Routes);


app.listen(port, () => console.log(` app listening on port ${port}!`));
