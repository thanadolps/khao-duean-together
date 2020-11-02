import firebase from "firebase";
import { useCollectionDataOnce } from "react-firebase-hooks/firestore";
import { SheetModel, SheetUploadModel } from "../../models/sheet.model";

export function sheetCollection() {
  return firebase.firestore().collection("sheet");
}

export function useSheets() {
  return useCollectionDataOnce<SheetModel>(sheetCollection());
}

export async function downloadSheet(
  storagePath: string,
  view: number,
  id?: string
) {
  const url = await firebase.storage().ref(storagePath).getDownloadURL();
  window.open(url, "_blank");

  await sheetCollection()
    .doc(id)
    .update({ view: view + 1 });
}

export async function deleteSheet(id: string, storagePath: string) {
  await sheetCollection().doc(id).delete();
  await firebase.storage().ref(storagePath).delete();
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
