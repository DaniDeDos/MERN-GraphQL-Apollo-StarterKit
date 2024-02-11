import dotenv from "dotenv";

import Server from "./models/server.js";

dotenv.config({ path: ".env" });


const serverInstance = new Server();
serverInstance.start().catch((error) => {
  console.error("Error al iniciar el servidor:", error);
});

