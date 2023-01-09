const express = require("express");
const app = express();
const cors = require("cors");
const { getPosts, createPost } = require('./posts');

PORT = 3000;

// Iniciador de puerto
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

// Habilitar CORS y Mod de json
app.use(express.json());
app.use(cors());

app.use(express.static("public"));


app.use(express.json()) 
app.use(express.static("public")); 

// Muestra archivos en el home
app.get("/", (req, res) => {
  try {
    res.sendFile();
  } catch (error) {
    res.json({ message: "No se encuentra el recurso solicitand" });
  }
});


//Endpoint para buscar los Posts
app.get('/posts', async (req, res) => {
  try {
    const getPost = await getPosts();
    console.log(getPost);
    res.json(getPost);
  } catch (error) {
    console.log(error);
  }
});


//Endpoint para crear Posts
app.post("/posts", async (req, res) => {
  try {
    const { titulo, url, descripcion } = req.body;
    await createPost(titulo, url, descripcion);
    res.send("Post creado con exito");
  } catch (error) {
    console.log(error);
  }
});








