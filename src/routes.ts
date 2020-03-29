import { IController } from "@models";

import { ItemsController } from "./features/items/items.controller";
import { ListsController } from "./features/lists/lists.controller";

export const routes: IController[] = [
  new ItemsController(),
  new ListsController()
];
