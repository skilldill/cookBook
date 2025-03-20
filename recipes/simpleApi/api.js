import { initApi } from "./initApi";
import { initSomeController } from "./SomeController";

const api = initApi();

api.get("/healthcheck", (_, res) => {
  res.send({ status: "OK" });
});

initSomeController(api);
