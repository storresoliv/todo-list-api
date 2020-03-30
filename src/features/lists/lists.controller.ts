import { IRequest, IResponse, IController, Router, IItem } from "@models";

import { IList } from "./models/list.interface";

export class ListsController implements IController {
  public path = "/lists";

  private list: IList = [];

  findByID = (id: number) => this.list.find(item => item.id == id);

  validateParams = (params: { text: string }) => params.text;

  initializeRoutes(router: Router): Router {
    router.get(this.path, this.getAllLists);
    router.get(this.path + "/:id", this.getList);
    router.post(this.path, this.createAList);
    router.delete(this.path, this.removeList);

    return router;
  }

  getAllLists = (request: IRequest, response: IResponse) => {
    response.send(this.list);
  };

  getList = (request: IRequest, response: IResponse) => {
    const item = this.findByID(request.params.id);
    if (item) {
      return response.json(item);
    }
    response
      .status(404)
      .json({ error: `List ${request.params.id} is not found` });
  };

  createAList = (request: IRequest, response: IResponse) => {
    if (this.validateParams(request.body)) {
      const newList: IItem = {
        id: 1,
        text: request.body.text,
        active: false
      };

      this.list.push(newList);

      return response.status(201).json(newList);
    }

    response.json({ error: "Missing `text` attribute" });
  };

  removeList = (request: IRequest, response: IResponse) => {
    response
      .status(500)
      .json({ error: "DELETE method is not implemented yet" });
  };
}
