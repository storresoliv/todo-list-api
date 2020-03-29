import { Router } from "./router.model";

export interface IController {
  initializeRoutes: (router: Router) => Router;
}
