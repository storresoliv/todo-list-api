import * as express from "express";
import * as bodyParser from "body-parser";
import { IController } from "./models";
import { RouterInstance } from "./router";

export class App {
  public app: express.Application;
  public port: number;

  constructor(controllers: IController[], port) {
    this.app = express();
    this.port = port;

    this.initializeMiddlewares();
    this.initializeControllers(controllers);
  }

  private initializeMiddlewares() {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }

  private initializeControllers(controllers: IController[]) {
    controllers.forEach(controller => {
      this.app.use("/", controller.initializeRoutes(RouterInstance));
    });
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });
  }
}
