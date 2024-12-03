import app from "./app";
import config from "./config/config";

const PORT = config.PORT || 3000;

app.listen({ port: PORT }, (err, address) => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
  console.log(`Server running on ${address}`);
});
