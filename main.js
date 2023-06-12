const express = require("express")
const routes = require("./routes");
const layouts = require("express-ejs-layouts")
const bcrypt = require("bcrypt")

const app = express();

const mongoose = require("mongoose");
mongoose.connect(
    "mongodb://127.0.0.1:27017/cocina_mexicana",
    {useNewUrlParser: true}
);


app.set("port", process.env.PORT || 3000);

app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());

app.set("view engine", "ejs");
app.use(layouts);

app.use(express.static("public"));



//Rutas de la app
app.use("/", routes());


app.listen(app.get("port"), () => {
    console.log(`Servidor corriendo en el puerto 3000 ${app.get("port")}`);
});