import { PORT } from "./constants";
import * as serverService from "./services/server.service";

(async () => {
  try {
    serverService.server.listen(process.env.PORT || PORT, function () {
      console.log("Сервер ожидает подключения...");
    });
  } catch (error) {
    console.log(error);
  }
})();
