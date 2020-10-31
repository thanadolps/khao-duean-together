import { Tags } from "./tag.model";

export interface SheetModel {
  title: string;
  tags: Tags;
  view: number;
  dataSrc: string;
}
