import "dotenv/config";

import { server } from "../shared/infra/http/app";

server.listen(3000, "0.0.0.0", () => {
  console.log("Server is running on port 3000");
});
