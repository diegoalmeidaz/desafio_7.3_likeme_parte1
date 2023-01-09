require('dotenv').config({ path: "./.env" })

const { Pool } = require('pg')

const pool = new Pool({
    host: "localhost",
    user: "postgres",
    password: "12345",
    database: "likeme",
    allowExitOnIdle: true,
});
const getPosts = async() => {
  const { rows } = await pool.query("SELECT * FROM posts");
  return rows;
};
const createPost = async (titulo, url, descripcion) => {
  const consulta ="INSERT INTO posts values (DEFAULT, $1, $2, $3)";
  const values = [titulo, url, descripcion];
  const result = await pool.query(consulta, values);
};

module.exports = { getPosts, createPost };