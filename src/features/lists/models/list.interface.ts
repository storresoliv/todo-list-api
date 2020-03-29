import { IItem } from "@models";

export interface IList extends Array<any> {
  [index: number]: IItem;
}
