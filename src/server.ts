import dotenv from "dotenv";
import app from "./app";
import config from "./config/config";
dotenv.config({ path: "./.env" });

const PORT = config.PORT || 3000;

app
  .listen({ port: PORT, host: "0.0.0.0" })
  .then((address) => {
    console.log(`Server running on ${address}`);
  })
  .catch((err) => {
    app.log.error(err);
    process.exit(1);
  });
