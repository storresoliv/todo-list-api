import { RouterInstance } from "./../../router";
import { IRequest, IResponse } from "models";

import { IItem } from "./models/item.interface";

export class ItemsController {
  public path = "/items";
  public router = RouterInstance;

  private items: IItem[] = [
    {
      id: 1,
      text: "Dolor sit amet",
      active: false
    }
  ];

  findByID = (id: number) => this.items.find(item => item.id == id);

  validateParams = (params: { text: string }) => params.text;

  constructor() {
    this.intializeRoutes();
  }

  public intializeRoutes() {
    this.router.get(this.path, this.getAllItems);
    this.router.get(this.path + "/:id", this.getItem);
    this.router.post(this.path, this.createAItem);
    this.router.delete(this.path, this.removeItem);
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
