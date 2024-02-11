import mongoose from "mongoose";

mongoose.Promise = global.Promise;

const dbConnection = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1/data");
    console.log("Base de datos en online");
  } catch (error) {
    console.error("Error al conectar con la base de datos: ", error);
    throw error;
  }
};

export default dbConnection;
