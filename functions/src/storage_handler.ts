import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp(functions.config().firebase);

export const getFile = async (): Promise<unknown> => {
  try {
    let file = {};
    return admin.storage().bucket().file("conf.json")
        .download(function(err, contents) {
          if (!err) {
            file = JSON.parse(contents.toString("utf8"));
            return file;
          } else {
            return {err};
          }
        });
  } catch (error) {
    return {error};
  }
};

