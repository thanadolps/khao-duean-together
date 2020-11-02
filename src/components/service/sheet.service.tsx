import firebase from "firebase";
import { useCollectionDataOnce } from "react-firebase-hooks/firestore";
import { SheetModel, SheetUploadModel } from "../../models/sheet.model";

export function sheetCollection() {
  return firebase.firestore().collection("sheet");
}

export function useSheets() {
  return useCollectionDataOnce<SheetModel>(sheetCollection());
}

export async function downloadSheet(storagePath: string) {
  const url = await firebase.storage().ref(storagePath).getDownloadURL();
  window.open(url);
}

export async function uploadSheet(sheetUpload: SheetUploadModel) {
  const { file, ...data } = sheetUpload;

  const bucketRef = firebase.storage().ref("sheet").child(file.name);
  await bucketRef.put(file);

  const sheet: SheetModel = {
    storagePath: bucketRef.fullPath,
    view: 0,
    ...data,
  };

  await sheetCollection().add(sheet);
}
