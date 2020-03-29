import * as express from "express";

import { IRequest, IResponse } from "models";

interface IAction {
  (request: IRequest, response: IResponse): void;
}

interface IMethod {
  (path: string, fn: IAction): void;
}

interface IRouter {
  get: IMethod;
  post: IMethod;
  put: IMethod;
  delete: IMethod;
}

class Router extends express.Router implements IRouter {
  constructor() {
    super();
  }

  get: IMethod;
  post: IMethod;
  put: IMethod;
  delete: IMethod;
}

class RouterSingleton {
  private static _instance: Router;
  public static get Instance(): Router {
    return this._instance || (this._instance = new Router());
  }
}

export const RouterInstance: Router = RouterSingleton.Instance;
