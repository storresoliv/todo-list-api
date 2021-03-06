import { IRequest, IResponse, IController, Router, IItem } from "@models";

export class ItemsController implements IController {
  public path = "/items";

  private items: IItem[] = [
    {
      id: 1,
      text: "Dolor sit amet",
      active: false
    }
  ];

  findByID = (id: number) => this.items.find(item => item.id == id);

  validateParams = (params: { text: string }) => params.text;

  initializeRoutes(router: Router): Router {
    router.get(this.path, this.getAllItems);
    router.get(this.path + "/:id", this.getItem);
    router.post(this.path, this.createAItem);
    router.delete(this.path, this.removeItem);

    return router;
  }

  getAllItems = (request: IRequest, response: IResponse) => {
    response.send(this.items);
  };

  getItem = (request: IRequest, response: IResponse) => {
    const item = this.findByID(request.params.id);
    if (item) {
      return response.json(item);
    }
    response
      .status(404)
      .json({ error: `Item ${request.params.id} is not found` });
  };

  createAItem = (request: IRequest, response: IResponse) => {
    if (this.validateParams(request.body)) {
      const newItem: IItem = {
        id: Date.now(),
        text: request.body.text,
        active: true
      };

      this.items.push(newItem);

      return response.status(201).json(newItem);
    }

    response.json({ error: "Missing `text` attribute" });
  };

  removeItem = (request: IRequest, response: IResponse) => {
    response
      .status(500)
      .json({ error: "DELETE method is not implemented yet" });
  };
}
