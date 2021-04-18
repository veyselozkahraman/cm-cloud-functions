import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp(functions.config().firebase);

export const getFile = async (): Promise<unknown> => {
  try {
    const fileRef = admin.storage().bucket().file("conf.json");
    const file = fileRef.download(function(err, contents) {
      if (!err) {
        return JSON.parse(contents.toString("utf8"));
      } else {
        return {err};
      }
    });
    return file;
  } catch (error) {
    return {error};
  }
};

