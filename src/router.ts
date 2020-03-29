import { Router } from "./models";

class RouterSingleton {
  private static _instance: Router;
  public static get Instance(): Router {
    return this._instance || (this._instance = new Router());
  }
}

export const RouterInstance: Router = RouterSingleton.Instance;
