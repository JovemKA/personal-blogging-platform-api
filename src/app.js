import express from "express";
import connectDatabase from "./config/database.js";

const connection = connectDatabase();

connection.on("error", (error) => {
    console.error("Erro ao conectar ao Banco de Dados: ", error);
});

connection.once("open", () => {
    console.log("Conectado ao Banco de Dados com sucesso!");    
});

const app = express();

export default app;
