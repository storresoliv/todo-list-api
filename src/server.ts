import { App } from "./app";
import { routes } from "./routes";

const app = new App([...routes], process.env.PORT || 5000);

app.listen();
