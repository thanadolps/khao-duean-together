import { Tags } from "./tag.model";

export interface SheetModel {
  title: string;
  tags: Tags;
  view: number;
  storagePath: string;
}

export interface SheetUploadModel {
  title: string;
  tags: Tags;
  file: File;
}
